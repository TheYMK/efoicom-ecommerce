import React from 'react';

const Subscribe = () => {
	return (
		<React.Fragment>
			<section className="section-subscribe padding-y-lg">
				<div className="container">
					<p className="pb-2 text-center text-white">
						Pour recevoir les dernières tendances des produits et les nouvelles de l'industrie directement
						dans votre boîte de réception
					</p>

					<div className="row justify-content-md-center">
						<div className="col-lg-5 col-md-6">
							<form className="form-row">
								<div className="col-md-8 col-7">
									<input className="form-control border-0" placeholder="Votre email" type="email" />
								</div>
								<div className="col-md-4 col-5">
									<button type="submit" className="btn btn-block btn-warning">
										{' '}
										<i className="fa fa-envelope" /> S'abonner{' '}
									</button>
								</div>
							</form>
							<small className="form-text text-white-50">
								Nous ne partagerons jamais votre adresse e-mail avec un tiers.
							</small>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Subscribe;
