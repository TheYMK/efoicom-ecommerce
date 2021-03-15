import React from 'react';
import AdminMenu from './AdminMenu';

const ClientAccountManagement = () => {
	return (
		<React.Fragment>
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
											{/* 1 */}
											<tr>
												<td>Moufida Mohamed</td>
												<td>moufida@gmail.com</td>
												<td>3725168</td>
												<td>Moroni, Zilimadjou</td>
												<td>Ngazidja</td>
												<td>
													<a href="#" class="btn btn-outline-primary">
														Voir le profile
													</a>
												</td>
											</tr>
											{/* 2 */}
											<tr>
												<td>Moufida Mohamed</td>
												<td>moufida@gmail.com</td>
												<td>3725168</td>
												<td>Moroni, Zilimadjou</td>
												<td>Ngazidja</td>
												<td>
													<a href="#" class="btn btn-outline-primary">
														Voir le profile
													</a>
												</td>
											</tr>
											{/* 3 */}
											<tr>
												<td>Moufida Mohamed</td>
												<td>moufida@gmail.com</td>
												<td>3725168</td>
												<td>Moroni, Zilimadjou</td>
												<td>Ngazidja</td>
												<td>
													<a href="#" class="btn btn-outline-primary">
														Voir le profile
													</a>
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

export default ClientAccountManagement;
