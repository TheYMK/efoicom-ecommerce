import React, { useState } from 'react';
import ViewCustomerInfoDialog from '../dialogs/ViewCustomerInfoDialog';
import AdminMenu from './AdminMenu';

const ClientAccountManagement = ({ customers }) => {
	const [ currentCustomer, setCurrentCustomer ] = useState({});
	const [ open, setOpen ] = useState(false);

	const handleViewProfile = (customer) => {
		setCurrentCustomer(customer);
		setOpen(true);
	};

	const handleClose = () => {
		setCurrentCustomer({});
		setOpen(false);
	};

	return (
		<React.Fragment>
			<ViewCustomerInfoDialog open={open} handleClose={handleClose} customer={currentCustomer} />
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<AdminMenu pageLocation="client" />
						</aside>
						<main className="col-md-9">
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">Tous les comptes clients</strong>
									<br />
									<small>Vous trouverez ici la liste de tous les clients de la plateforme.</small>
								</header>
								<div className="table-responsive" style={{ height: '500px' }}>
									<table className="table table-hover">
										<thead>
											<tr>
												<th>Nom & Prénom</th>
												<th>Email</th>
												<th>Tel</th>
												<th>Adresse</th>
												<th>Île</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											{customers &&
												customers.map((c, i) => (
													<tr key={c._id}>
														<td>{c.name}</td>
														<td>{c.email}</td>
														<td>{c.phone_number}</td>
														<td>{c.address}</td>
														<td>{c.island}</td>
														<td>
															<div>
																<button
																	className="btn btn-primary btn-block"
																	onClick={() => handleViewProfile(c)}
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
							</article>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default ClientAccountManagement;
