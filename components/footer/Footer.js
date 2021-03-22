import React from 'react';

const Footer = () => {
	return (
		<React.Fragment>
			<footer className="section-footer bg-secondary">
				<div className="container">
					<section className="footer-top padding-y-lg text-white">
						<div className="row">
							<aside className="col-md col-6">
								<h6 className="title">Services à la clientèle</h6>
								<ul className="list-unstyled">
									<li>
										{' '}
										<a href="#">Centre d’aide</a>
									</li>
									<li>
										{' '}
										<a href="#">Nous contacter</a>
									</li>
									<li>
										{' '}
										<a href="#">Signaler un abus</a>
									</li>
									<li>
										{' '}
										<a href="#">Politiques et règles</a>
									</li>
								</ul>
							</aside>
							<aside className="col-md col-6">
								<h6 className="title">Qui sommes-nous</h6>
								<ul className="list-unstyled">
									<li>
										{' '}
										<a href="#">À propos de Massiwa Market</a>
									</li>
									<li>
										{' '}
										<a href="#">Plan du site</a>
									</li>
								</ul>
							</aside>
							<aside className="col-md col-6">
								<h6 className="title">Vendre sur MassiwaMarket</h6>
								<ul className="list-unstyled">
									<li>
										{' '}
										<a href="#">Adhésion comme référent</a>
									</li>
									<li>
										{' '}
										<a href="#">Centre d’apprentissage</a>
									</li>
								</ul>
							</aside>
							<aside className="col-md col-6">
								<h6 className="title">Acheter sur Massiwa Market</h6>
								<ul className="list-unstyled">
									<li>
										{' '}
										<a href="#">Toutes les catégories </a>
									</li>
								</ul>
							</aside>
							<aside className="col-md">
								<h6 className="title">Social</h6>
								<ul className="list-unstyled">
									<li>
										<a href="#">
											{' '}
											<i className="fab fa-facebook" /> Facebook{' '}
										</a>
									</li>
									<li>
										<a href="#">
											{' '}
											<i className="fab fa-twitter" /> Twitter{' '}
										</a>
									</li>
									<li>
										<a href="#">
											{' '}
											<i className="fab fa-instagram" /> Instagram{' '}
										</a>
									</li>
									<li>
										<a href="#">
											{' '}
											<i className="fab fa-youtube" /> Youtube{' '}
										</a>
									</li>
								</ul>
							</aside>
						</div>
					</section>

					<section className="footer-bottom text-center">
						<p className="text-white">
							Privacy Policy - Terms of Use - User Information Legal Enquiry Guide
						</p>
						<p className="text-muted"> &copy 2019 Company name, All rights reserved </p>
						<br />
					</section>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
