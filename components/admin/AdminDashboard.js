import React, { useEffect, useState } from 'react';
import AdminMenu from './AdminMenu';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../actions/auth';
import { getCounts, getTotalRefRequests, updateReferentAccountApprovalStatus } from '../../actions/user';
import { toast } from 'react-toastify';
import ApproveRequestDialog from '../dialogs/ApproveRequestDialog';
import Skeleton from '@material-ui/lab/Skeleton';

const AdminDashboard = () => {
	const [ currentUser, setCurrentUser ] = useState({});
	const [ referentCount, setReferentCount ] = useState(0);
	const [ customerCount, setCustomerCount ] = useState(0);
	const [ requests, setRequests ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const { user } = useSelector((state) => ({ ...state }));

	useEffect(() => {
		if (user && user.token) {
			loadUserInfo();
			fetchTotalAccountsCount();
			fetchAllRefRequests();
		}
	}, []);

	// // Loads the current user informations
	const loadUserInfo = () => {
		getCurrentUser(user.token)
			.then((res) => {
				setCurrentUser(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// get total referent accounts count
	const fetchTotalAccountsCount = () => {
		getCounts(user.token)
			.then((res) => {
				setReferentCount(res.data.totalRefCount);
				setCustomerCount(res.data.totalCustomerCount);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// get all referents requests
	const fetchAllRefRequests = () => {
		setLoading(true);
		getTotalRefRequests(user.token)
			.then((res) => {
				setRequests(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};

	// display requests
	const showRequests = () => (
		<div className="table-responsive" style={{ height: '500px' }}>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Type de requête</th>
						<th>Envoyé par</th>
						<th>Tel</th>
						<th>Email</th>
						<th>Zone de référence</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{requests.map((request, index) => (
						<tr key={index}>
							<td>Approbation de référent</td>
							<td>
								<p className="title">{request.name} </p>
							</td>
							<td>{request.phone_number}</td>
							<td>{request.email}</td>
							<td>{request.reference_zone}</td>
							<td>
								<strong style={{ color: 'red' }}>En attente...</strong>
							</td>
							<td>
								<div className="dropdown d-inline-block">
									<button
										href="#"
										data-toggle="dropdown"
										className="dropdown-toggle btn btn-secondary"
									>
										Cliquer ici
									</button>
									<div className="dropdown-menu dropdown-menu-right">
										<button
											href="#"
											className="dropdown-item"
											onClick={() => handleRequestApproval(request.email)}
										>
											Approuver
										</button>
										<button
											className="dropdown-item"
											onClick={() => handleRequestRejection(request.email)}
										>
											Décliner
										</button>
									</div>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);

	const handleRequestApproval = (email) => {
		const result = window.confirm('Êtes-vous sûr de vouloir approuver ce référent?');
		const approval_status = 'approved';
		setLoading(true);
		if (result === true) {
			updateReferentAccountApprovalStatus(user.token, email, approval_status)
				.then((res) => {
					toast.info(
						`Vous venez d'approuver un référent. Ce dernier peut desormais mettre en ligne des produits ou services, et converser avec des clients de la platforme`
					);
					fetchAllRefRequests();
					setLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
					toast.error(`Oops, l'opération n'a pas été effectuer, veuillez recommencer`);
				});
		}
	};

	const handleRequestRejection = (email) => {
		const result = window.confirm('Êtes-vous sûr de vouloir decliner ce référent?');
		const approval_status = 'rejected';
		setLoading(true);
		if (result === true) {
			updateReferentAccountApprovalStatus(user.token, email, approval_status)
				.then((res) => {
					toast.info(
						`Vous venez de decliner un référent. Son compte sera automatiquement supprimer de la base de donnée. Assurez vous de supprimer le compte sur firebase aussi`
					);

					fetchAllRefRequests();
					setLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
					toast.error(`Oops, l'opération n'a pas été effectuer, veuillez recommencer`);
				});
		}
	};

	const showLoadingRequest = () => (
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
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<AdminMenu pageLocation="dashboard" />
						</aside>
						<main className="col-md-9">
							<article className="card mb-3">
								<div className="card-body">
									<figure className="icontext">
										<div className="text">
											<strong> {currentUser.name} (Administrateur) </strong> <br />
											<p className="mb-2"> {currentUser.email} </p>
											<a href="#" className="btn btn-light btn-sm">
												Modifier les informations
											</a>
										</div>
									</figure>
									<hr />

									<article className="card-group card-stat">
										<figure className="card bg">
											<div className="p-3">
												<h4 className="title">{referentCount}</h4>
												<span>Nombre de référents</span>
											</div>
										</figure>
										<figure className="card bg">
											<div className="p-3">
												<h4 className="title">{customerCount}</h4>
												<span>Nombre de clients</span>
											</div>
										</figure>
										<figure className="card bg">
											<div className="p-3">
												<h4 className="title">12</h4>
												<span>Nombre de produits en ligne</span>
											</div>
										</figure>
										<figure className="card bg">
											<div className="p-3">
												<h4 className="title">50</h4>
												<span>Nombre de services en ligne</span>
											</div>
										</figure>
									</article>
								</div>
							</article>
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">Gerez les requêtes</strong>
								</header>
								{requests === null || loading ? showLoadingRequest() : showRequests()}
							</article>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default AdminDashboard;
