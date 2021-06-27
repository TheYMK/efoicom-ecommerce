import React, { useEffect, useState } from 'react';
import { getAllReferents, deleteReferentUser } from '../../actions/user';
import AdminMenu from './AdminMenu';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Skeleton from '@material-ui/lab/Skeleton';
import ReferentProfileOverview from '../dialogs/ReferentProfileOverview';
import { getItemsCountsByReferent } from '../../actions/item';
import NoData from '../indicators/NoData';

const ReferentAccountManagement = () => {
	const [ referents, setReferents ] = useState(null);
	const [ open, setOpen ] = useState(false);
	const [ currentReferent, setCurrentReferent ] = useState([]);
	const { user } = useSelector((state) => ({ ...state }));
	const [ loading, setLoading ] = useState(false);
	const [ totalApprovedProducts, setTotalApprovedProducts ] = useState(0);
	const [ totalApprovedServices, setTotalApprovedServices ] = useState(0);

	useEffect(() => {
		loadReferents();
	}, []);

	// code improvement to be done here: token doesn't have to be passed as parameter, we can just directly use user.token
	const loadReferents = async () => {
		try {
			const allRefs = await getAllReferents();

			setReferents(allRefs.data);
		} catch (err) {
			console.log(`----> Failed to get all approved referents: {Error: ${err}}`);
		}
	};

	const handleDeleteUser = (id, referent_email) => {
		if (user && user.token) {
			const result = window.confirm('Êtes-vous sûr de vouloir supprimer ce compte ?');

			if (result) {
				setLoading(true);
				deleteReferentUser(user.token, id, referent_email)
					.then((res) => {
						setLoading(false);
						setOpen(false);
						toast.success(
							`Le compte ${res.data
								.email} a bien été supprimer. Tous les articles de cet utilisateur ont été également supprimés.`
						);
						loadReferents();
					})
					.catch((err) => {
						setLoading(false);
						console.log(err);
						toast.error(`Oops! l'opération n'a pas été effectuer, veuillez recommencer.`);
					});
			}
		}
	};

	const showReferents = () => (
		<div className="table-responsive" style={{ height: '500px' }}>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Nom & Prénom</th>
						<th>Email</th>
						<th>Tél</th>
						<th>Adresse</th>
						<th>Commune</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{referents.map((referent, index) => (
						<tr key={index}>
							<td>{referent.name}</td>
							<td>{referent.email}</td>
							<td>{referent.phone_number}</td>
							<td>{referent.address}</td>
							<td>
								{referent.reference_zone && referent.reference_zone.name} ({referent.reference_zone && referent.reference_zone.island.toUpperCase()})
							</td>
							<td>
								<div>
									<button
										className="btn btn-primary btn-block"
										onClick={() => handleViewProfile(referent)}
									>
										Profil
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);

	const handleClose = () => {
		setOpen(false);
		setTotalApprovedServices(0);
		setTotalApprovedProducts(0);
	};

	const handleViewProfile = (referent) => {
		setCurrentReferent(referent);
		loadCounts(referent.email);
		setOpen(true);
	};

	const showLoadingReferents = () => (
		<div className="p-5">
			<Skeleton animation="wave" variant="text" />
			<Skeleton animation="wave" variant="text" />
			<Skeleton animation="wave" variant="text" />
			<Skeleton animation="wave" variant="text" />
			<Skeleton animation="wave" variant="text" />
			<Skeleton animation="wave" variant="text" />
		</div>
	);

	const loadCounts = (email) => {
		getItemsCountsByReferent(email)
			.then((res) => {
				setTotalApprovedProducts(res.data.totalApprovedProducts);
				setTotalApprovedServices(res.data.totalApprovedServices);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<React.Fragment>
			<ReferentProfileOverview
				referent={currentReferent}
				open={open}
				handleClose={handleClose}
				handleDeleteUser={handleDeleteUser}
				loading={loading}
				totalApprovedProducts={totalApprovedProducts}
				totalApprovedServices={totalApprovedServices}
			/>
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<AdminMenu pageLocation="referent" />
						</aside>
						<main className="col-md-9">
							<article className="card mb-4 pure-text">
								<header className="card-header">
									<strong className="d-inline-block mr-3">
										Tous les comptes référents approuvés{' '}
										{referents !== null && referents.length === 0 ? <NoData /> : ''}
									</strong>
									<br />
									<small>
										Vous trouverez ici la liste de tous les comptes référents approuvés de la
										plateforme. Vous avez la possibilité de consulter les activités de ces comptes
										et de les supprimer si nécessaire.
									</small>
								</header>

								{referents === null ? showLoadingReferents() : showReferents()}
							</article>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default ReferentAccountManagement;
