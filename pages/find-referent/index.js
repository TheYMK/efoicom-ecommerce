import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import { fetchReferentsByFilter, getAllReferents } from '../../actions/user';
import ContactReferentDialog from '../../components/dialogs/ContactReferentDialog';
import { getCurrentUser } from '../../actions/auth';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { contactReferent } from '../../actions/form';
import Router from 'next/router';
import { getAllZones } from '../../actions/zone';

const FindReferentPage = ({ allReferents, allZones }) => {
	const [ data, setData ] = useState({
		allRefs: allReferents
	});

	const [ values, setValues ] = useState({
		ref_email: '',
		usr_email: '',
		usr_phone: '',
		usr_name: '',
		subject: '',
		message: ''
	});

	const { allRefs } = data;
	const [ openContactDialog, setOpenContactDialog ] = useState(false);
	const { user } = useSelector((state) => ({ ...state }));
	const [ currentReferent, setCurrentReferent ] = useState({
		ref_name: '',
		ref_phone: '',
		ref_city: '',
		ref_island: '',
		ref_address: '',
		ref_zone: ''
	});

	const [ loading, setLoading ] = useState(false);
	const [ selectedZone, setSelectedZone ] = useState('allZones');
	const [ selectedIsland, setSelectedIsland ] = useState('allIslands');

	const handleOpenContactDialog = (referent) => {
		if (user && user.token) {
			getCurrentUser(user.token)
				.then((res) => {
					setValues({
						...values,
						ref_email: referent.email,
						usr_email: res.data.email,
						usr_phone: res.data.phone_number,
						usr_name: res.data.name
					});
					setCurrentReferent({
						...currentReferent,
						ref_name: referent.name,
						ref_phone: referent.phone_number,
						ref_city: referent.city,
						ref_island: referent.island,
						ref_address: referent.address,
						ref_zone: `${referent.reference_zone.name} (${referent.reference_zone.island})`
					});

					setOpenContactDialog(true);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			toast.error(
				'Vous devez avoir un compte et être connecter avant de pouvoir rentrer en contact avec un référent'
			);
			setInterval(() => {
				Router.push('/auth/login');
			}, 3000);
		}
	};

	const handleCloseContactDialog = () => {
		setCurrentReferent({
			ref_name: '',
			ref_phone: '',
			ref_city: '',
			ref_island: '',
			ref_address: '',
			ref_zone: ''
		});

		setValues({
			ref_email: '',
			usr_email: '',
			usr_phone: '',
			usr_name: '',
			subject: '',
			message: ''
		});

		setOpenContactDialog(false);
	};

	const handleSubmitContactForm = () => {
		// console.table(values);
		setLoading(true);
		contactReferent(values)
			.then((res) => {
				toast.success(
					'Votre message à bien été envoyé. Le référent de cet article vous contactera dans les plus brefs délai'
				);
				handleCloseContactDialog();
				setLoading(false);
			})
			.catch((err) => {
				toast.error(`Oops! Echec de l'envoi. Veuillez réessayer`);
				setLoading(false);
			});
	};

	const showRefs = () => (
		<div className="table-responsive" style={{ height: '500px' }}>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>#</th>
						<th>Nom & Prénom</th>
						<th>Tel</th>
						<th>Ville</th>
						<th>Adresse</th>
						<th>Commune</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{allRefs.length > 0 &&
						allRefs.map((referent, index) => (
							<tr key={referent._id}>
								<td>{index + 1}</td>
								<td>{referent.name}</td>
								<td>{referent.phone_number}</td>
								<td>
									{referent.city} ({referent.island})
								</td>
								<td>{referent.address}</td>
								<td>{referent.reference_zone && referent.reference_zone.name}</td>
								<td>
									<button
										className="btn btn-primary"
										onClick={(e) => handleOpenContactDialog(referent)}
									>
										Contacter
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);

	const fetchReferents = (arg) => {
		fetchReferentsByFilter(arg)
			.then((res) => {
				setData({ ...data, allRefs: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleZoneChange = (e) => {
		// reset values
		setSelectedIsland('allIslands');

		setSelectedZone(e.target.value);
		fetchReferents({ zone_name: e.target.value });
	};

	const handleIslandChange = (e) => {
		// reset values
		setSelectedZone('allZones');

		setSelectedIsland(e.target.value);
		fetchReferents({ island: e.target.value });
	};

	return (
		<React.Fragment>
			<ContactReferentDialog
				open={openContactDialog}
				handleClose={handleCloseContactDialog}
				ref_name={currentReferent.ref_name}
				ref_phone={currentReferent.ref_phone}
				ref_city={currentReferent.ref_city}
				ref_island={currentReferent.ref_island}
				ref_address={currentReferent.ref_address}
				ref_zone={currentReferent.ref_zone}
				values={values}
				setValues={setValues}
				loading={loading}
				handleSubmitContactForm={handleSubmitContactForm}
				title={`Souhaitez-vous contacter ce référent?`}
				description={`À propos de ce référent`}
			/>
			<Layout>
				<b className="screen-overlay" />
				<header className="section-header">
					<Header />
					<Navbar />
				</header>
				<section className="section-pagetop bg-light">
					<div className="container">
						<h2 className="title-page">Vous cherchez un référent ?</h2>
					</div>
				</section>
				<section className="section-content padding-y">
					<div className="container">
						<article className="card mb-3">
							<header className="card-header">
								<div className="form-inline d-inline-flex mt-2">
									<label htmlFor="zones">Filtrer par île</label>
									<select
										id="zones"
										className="ml-2 form-control"
										value={selectedIsland}
										onChange={handleIslandChange}
									>
										<option value="allIslands">Toutes les îles</option>
										<option value="ndzuwani">Ndzuwani</option>
										<option value="ngazidja">Ngazidja</option>
										<option value="mwali">Mwali</option>
									</select>
								</div>
								<div className="form-inline d-inline-flex ml-md-2 mt-2">
									<label>Filtrer par commune</label>
									<select
										className="ml-2 form-control"
										value={selectedZone}
										onChange={handleZoneChange}
									>
										<option value="allZones">Toutes les communes</option>
										{allZones &&
											allZones.map((zone, index) => (
												<option value={zone.name} key={zone._id}>
													{zone.name} ({zone.island})
												</option>
											))}
									</select>
								</div>
							</header>
						</article>
						<article className="card">
							<header className="card-header">
								<strong>Liste des référents</strong>
							</header>
							<div className="">{showRefs()}</div>
						</article>
					</div>
				</section>
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getAllReferents().then((r) => {
		return getAllZones().then((z) => {
			return {
				props: {
					allReferents: r.data,
					allZones: z.data
				}
			};
		});
	});
}

export default FindReferentPage;
