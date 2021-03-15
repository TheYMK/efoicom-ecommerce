import React from 'react';
import AdminMenu from './AdminMenu';

const AdminAccountSettings = () => {
	return (
		<React.Fragment>
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<AdminMenu pageLocation="account_settings" />
						</aside>
						<main className="col-md-9">
							<div className="card">
								<div className="card-body">
									<form className="row">
										<div className="col-md-9">
											<div className="form-row">
												<div className="col form-group">
													<label>Name</label>
													<input type="text" className="form-control" value="Vosidiy" />
												</div>
												<div className="col form-group">
													<label>Email</label>
													<input
														type="email"
														className="form-control"
														value="vosidiy@gmail.com"
													/>
												</div>
											</div>

											<div className="form-row">
												<div className="form-group col-md-6">
													<label>Country</label>
													<select id="inputState" className="form-control">
														<option> Choose...</option>
														<option>Uzbekistan</option>
														<option>Russia</option>
														<option>United States</option>
														<option>India</option>
														<option>Afganistan</option>
													</select>
												</div>
												<div className="form-group col-md-6">
													<label>City</label>
													<input type="text" className="form-control" />
												</div>
											</div>

											<div className="form-row">
												<div className="form-group col-md-6">
													<label>Zip</label>
													<input type="text" className="form-control" value="123009" />
												</div>
												<div className="form-group col-md-6">
													<label>Phone</label>
													<input type="text" className="form-control" value="+123456789" />
												</div>
											</div>
											<button className="btn btn-primary">Save</button>
											<button className="btn btn-light ml-2">Change password</button>

											<br />
											<br />
											<br />
											<br />
											<br />
											<br />
										</div>
									</form>
								</div>
							</div>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default AdminAccountSettings;
