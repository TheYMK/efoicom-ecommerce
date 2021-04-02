import React, { useEffect, useState } from 'react';
import AdminMenu from './AdminMenu';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../actions/auth';
import { getCounts, getTotalRefRequests, updateReferentAccountApprovalStatus } from '../../actions/user';
import { toast } from 'react-toastify';
import Skeleton from '@material-ui/lab/Skeleton';
import { getTotalItemsRequests, updateItemApprovalStatus } from '../../actions/item';
import AdminViewItemDialog from '../dialogs/AdminViewItemDialog';
import Link from 'next/link';
import NoData from '../indicators/NoData';

const AdminDashboard = () => {
	const [ currentUser, setCurrentUser ] = useState({});
	const [ referentCount, setReferentCount ] = useState(0);
	const [ customerCount, setCustomerCount ] = useState(0);
	const [ productCount, setProductCount ] = useState(0);
	const [ serviceCount, setServiceCount ] = useState(0);
	const [ requests, setRequests ] = useState(null);
	const [ itemsrequests, setItemsRequests ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const { user } = useSelector((state) => ({ ...state }));
	const [ openViewItemDialog, setOpenViewItemDialog ] = useState(false);
	const [ currentItem, setCurrentItem ] = useState({});

	useEffect(() => {
		if (user && user.token) {
			loadUserInfo();
			fetchTotalCounts();
			fetchAllRefRequests();
			fetchAllItemsRequests();
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
	const fetchTotalCounts = () => {
		getCounts(user.token)
			.then((res) => {
				setReferentCount(res.data.totalRefCount);
				setCustomerCount(res.data.totalCustomerCount);
				setProductCount(res.data.totalProductsCount);
				setServiceCount(res.data.totalServicesCount);
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

	// get all items requests
	const fetchAllItemsRequests = () => {
		setLoading(true);
		getTotalItemsRequests(user.token)
			.then((res) => {
				setItemsRequests(res.data);
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
						<th>Envoyé par (référent)</th>
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

	// to be reduced because same as below. Just use one function and let the backend decide
	const handleRequestApproval = (email) => {
		const result = window.confirm('Êtes-vous sûr de vouloir approuver ce référent?');
		const approval_status = 'approved';

		if (result === true) {
			setLoading(true);
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

	// to be reduced because same as above. Just use one function and let the backend decide
	const handleRequestRejection = (email) => {
		const result = window.confirm('Êtes-vous sûr de vouloir decliner ce référent?');
		const approval_status = 'rejected';

		if (result === true) {
			setLoading(true);
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

	// display items requests
	const showItemsRequests = () => (
		<div className="table-responsive" style={{ height: '500px' }}>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Type de requête</th>
						<th>Envoyé par (référent)</th>
						<th>Titre de l'article</th>
						<th>Nom du fournisseur</th>
						<th>Tel du fournisseur</th>
						<th>Adresse du fournisseur</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{itemsrequests.map((request, index) => (
						<tr key={index}>
							<td>Approbation d'article</td>
							<td>
								<p className="title">{request.referent_email} </p>
							</td>
							<td>{request.title}</td>
							<td>{request.provider_name}</td>
							<td>{request.provider_phone_number}</td>
							<td>{request.provider_address}</td>
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
											onClick={(e) => handleOpenViewItemDialog(request)}
										>
											Voir l'article
										</button>
										<button
											href="#"
											className="dropdown-item"
											onClick={(e) => handleUpdateItemApprovalStatus(request.slug, 'approved')}
										>
											Approuver
										</button>
										<button
											className="dropdown-item"
											onClick={(e) => handleUpdateItemApprovalStatus(request.slug, 'rejected')}
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

	const handleUpdateItemApprovalStatus = (slug, item_approval_status) => {
		if (item_approval_status === 'approved') {
			const result = window.confirm('Êtes-vous sûr de vouloir approuver cet article?');

			if (result) {
				setLoading(true);
				if (user && user.token) {
					updateItemApprovalStatus(user.token, slug, item_approval_status)
						.then((res) => {
							toast.success("L'article a été approuvé!");
							fetchAllItemsRequests();
							setLoading(false);
						})
						.catch((err) => {
							console.log(err);
							toast.error("Oops! l'opération a echoué. Veuillez réessayer");
							setLoading(false);
						});
				}
			}
		}

		if (item_approval_status === 'rejected') {
			const result = window.confirm('Êtes-vous sûr de vouloir rejeter cet article?');

			if (result) {
				setLoading(true);
				if (user && user.token) {
					updateItemApprovalStatus(user.token, slug, item_approval_status)
						.then((res) => {
							toast.success("La requête a été decliner. L'article sera automatiquement supprimé");
							fetchAllItemsRequests();
							setLoading(false);
						})
						.catch((err) => {
							console.log(err);
							toast.error("Oops! l'opération a echoué. Veuillez réessayer");
							setLoading(false);
						});
				}
			}
		}
	};

	const handleOpenViewItemDialog = (item) => {
		setCurrentItem(item);
		setOpenViewItemDialog(true);
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

	const handleCloseViewItemDialog = () => {
		setOpenViewItemDialog(false);
		setCurrentItem({});
	};

	return (
		<React.Fragment>
			<AdminViewItemDialog open={openViewItemDialog} handleClose={handleCloseViewItemDialog} item={currentItem} />
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
											<Link href="/admin/account-settings">
												<a className="btn btn-light btn-sm">Modifier les informations</a>
											</Link>
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
												<h4 className="title">{productCount}</h4>
												<span>Nombre de produits en ligne</span>
											</div>
										</figure>
										<figure className="card bg">
											<div className="p-3">
												<h4 className="title">{serviceCount}</h4>
												<span>Nombre de services en ligne</span>
											</div>
										</figure>
									</article>
								</div>
							</article>
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">
										Gerez les requêtes de création de compte{' '}
										{requests !== null && requests.length === 0 ? <NoData /> : ''}
									</strong>
								</header>

								{requests === null || loading ? showLoadingRequest() : showRequests()}
							</article>
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">
										Gerez les requêtes de publication d'article{' '}
										{itemsrequests !== null && itemsrequests.length === 0 ? <NoData /> : ''}
									</strong>
								</header>
								{itemsrequests === null || loading ? showLoadingRequest() : showItemsRequests()}
							</article>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default AdminDashboard;
