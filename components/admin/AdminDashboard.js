import React from 'react';
import AdminMenu from './AdminMenu';

const AdminDashboard = () => {
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
											<strong> Mr. Kaym Kassai </strong> <br />
											<p className="mb-2"> kaymkassai269@gmail.com </p>
											<a href="#" className="btn btn-light btn-sm">
												Modifier les informations
											</a>
										</div>
									</figure>
									<hr />

									<article className="card-group card-stat">
										<figure className="card bg">
											<div className="p-3">
												<h4 className="title">38</h4>
												<span>Nombre de référents</span>
											</div>
										</figure>
										<figure className="card bg">
											<div className="p-3">
												<h4 className="title">5</h4>
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
									<strong className="d-inline-block mr-3">Gerez les demandes</strong>
								</header>

								<div className="table-responsive" style={{ height: '500px' }}>
									<table className="table table-hover">
										<thead>
											<tr>
												<th>Type de requête</th>
												<th>Envoyé par</th>
												<th>Tel</th>
												<th>Email</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											{/* 1 */}
											<tr>
												<td>Création de compte</td>
												<td>
													<p className="title">Asmina Said Ahmed </p>
												</td>
												<td>3725168</td>
												<td>asmina@gmail.com</td>
												<td>
													<div className="dropdown d-inline-block">
														<a
															href="#"
															data-toggle="dropdown"
															className="dropdown-toggle btn btn-outline-secondary"
														>
															Cliquer ici
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href="#" className="dropdown-item">
																Approuver
															</a>
															<a href="#" className="dropdown-item">
																Décliner
															</a>
														</div>
													</div>
												</td>
											</tr>
											{/* 2 */}
											<tr>
												<td>Création de compte</td>
												<td>
													<p className="title">Asmina Said Ahmed </p>
												</td>
												<td>3725168</td>
												<td>asmina@gmail.com</td>
												<td>
													<div className="dropdown d-inline-block">
														<a
															href="#"
															data-toggle="dropdown"
															className="dropdown-toggle btn btn-outline-secondary"
														>
															Cliquer ici
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href="#" className="dropdown-item">
																Approuver
															</a>
															<a href="#" className="dropdown-item">
																Décliner
															</a>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>Création de compte</td>
												<td>
													<p className="title">Asmina Said Ahmed </p>
												</td>
												<td>3725168</td>
												<td>asmina@gmail.com</td>
												<td>
													<div className="dropdown d-inline-block">
														<a
															href="#"
															data-toggle="dropdown"
															className="dropdown-toggle btn btn-outline-secondary"
														>
															Cliquer ici
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href="#" className="dropdown-item">
																Approuver
															</a>
															<a href="#" className="dropdown-item">
																Décliner
															</a>
														</div>
													</div>
												</td>
											</tr>
											{/* 3 */}
											<tr>
												<td>Création de compte</td>
												<td>
													<p className="title">Asmina Said Ahmed </p>
												</td>
												<td>3725168</td>
												<td>asmina@gmail.com</td>
												<td>
													<div className="dropdown d-inline-block">
														<a
															href="#"
															data-toggle="dropdown"
															className="dropdown-toggle btn btn-outline-secondary"
														>
															Cliquer ici
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href="#" className="dropdown-item">
																Approuver
															</a>
															<a href="#" className="dropdown-item">
																Décliner
															</a>
														</div>
													</div>
												</td>
											</tr>
											{/* 4 */}
											<tr>
												<td>Création de compte</td>
												<td>
													<p className="title">Asmina Said Ahmed </p>
												</td>
												<td>3725168</td>
												<td>asmina@gmail.com</td>
												<td>
													<div className="dropdown d-inline-block">
														<a
															href="#"
															data-toggle="dropdown"
															className="dropdown-toggle btn btn-outline-secondary"
														>
															Cliquer ici
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href="#" className="dropdown-item">
																Approuver
															</a>
															<a href="#" className="dropdown-item">
																Décliner
															</a>
														</div>
													</div>
												</td>
											</tr>
											{/* 5 */}
											<tr>
												<td>Création de compte</td>
												<td>
													<p className="title">Asmina Said Ahmed </p>
												</td>
												<td>3725168</td>
												<td>asmina@gmail.com</td>
												<td>
													<div className="dropdown d-inline-block">
														<a
															href="#"
															data-toggle="dropdown"
															className="dropdown-toggle btn btn-outline-secondary"
														>
															Cliquer ici
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href="#" className="dropdown-item">
																Approuver
															</a>
															<a href="#" className="dropdown-item">
																Décliner
															</a>
														</div>
													</div>
												</td>
											</tr>
											{/* 6 */}
											<tr>
												<td>Création de compte</td>
												<td>
													<p className="title">Asmina Said Ahmed </p>
												</td>
												<td>3725168</td>
												<td>asmina@gmail.com</td>
												<td>
													<div className="dropdown d-inline-block">
														<a
															href="#"
															data-toggle="dropdown"
															className="dropdown-toggle btn btn-outline-secondary"
														>
															Cliquer ici
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href="#" className="dropdown-item">
																Approuver
															</a>
															<a href="#" className="dropdown-item">
																Décliner
															</a>
														</div>
													</div>
												</td>
											</tr>
											{/* 7 */}
											<tr>
												<td>Création de compte</td>
												<td>
													<p className="title">Asmina Said Ahmed </p>
												</td>
												<td>3725168</td>
												<td>asmina@gmail.com</td>
												<td>
													<div className="dropdown d-inline-block">
														<a
															href="#"
															data-toggle="dropdown"
															className="dropdown-toggle btn btn-outline-secondary"
														>
															Cliquer ici
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href="#" className="dropdown-item">
																Approuver
															</a>
															<a href="#" className="dropdown-item">
																Décliner
															</a>
														</div>
													</div>
												</td>
											</tr>
											{/* 8 */}
											<tr>
												<td>Création de compte</td>
												<td>
													<p className="title">Asmina Said Ahmed </p>
												</td>
												<td>3725168</td>
												<td>asmina@gmail.com</td>
												<td>
													<div className="dropdown d-inline-block">
														<a
															href="#"
															data-toggle="dropdown"
															className="dropdown-toggle btn btn-outline-secondary"
														>
															Cliquer ici
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href="#" className="dropdown-item">
																Approuver
															</a>
															<a href="#" className="dropdown-item">
																Décliner
															</a>
														</div>
													</div>
												</td>
											</tr>
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

export default AdminDashboard;
