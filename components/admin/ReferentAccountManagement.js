import React, { useEffect, useState } from 'react';
import { getAllReferents } from '../../actions/user';
import AdminMenu from './AdminMenu';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Skeleton from '@material-ui/lab/Skeleton';
import ReferentProfileOverview from '../dialogs/ReferentProfileOverview';

const ReferentAccountManagement = () => {
	const [ referents, setReferents ] = useState(null);
	const [ open, setOpen ] = useState(false);
	const [ currentReferent, setCurrentReferent ] = useState([]);
	const { user } = useSelector((state) => ({ ...state }));

	useEffect(() => {
		if (user && user.token) {
			loadReferents(user.token);
		}
	}, []);

	const loadReferents = async (token) => {
		try {
			const allRefs = await getAllReferents(token);

			setReferents(allRefs.data);
		} catch (err) {
			console.log(`----> Failed to get all approved referents: {Error: ${err}}`);
			toast.error('Failed to get all approved referents');
		}
	};

	const showReferents = () => (
		<div className="table-responsive" style={{ height: '500px' }}>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Nom & Prénom</th>
						<th>Email</th>
						<th>Tel</th>
						<th>Adresse</th>
						<th>Île</th>
						<th>Zone de référence</th>
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
							<td>{referent.island}</td>
							<td>{referent.reference_zone}</td>
							<td>
								<button className="btn btn-primary" onClick={() => handleViewProfile(referent)}>
									Voir le profil
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);

	const handleClose = () => {
		setOpen(false);
	};

	const handleViewProfile = (referent) => {
		setCurrentReferent(referent);
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

	return (
		<React.Fragment>
			<ReferentProfileOverview referent={currentReferent} open={open} handleClose={handleClose} />
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<AdminMenu pageLocation="referent" />
						</aside>
						<main className="col-md-9">
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">
										Tous les comptes référents approuvés
									</strong>
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
