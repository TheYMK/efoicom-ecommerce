import React from 'react';

const Footer = () => {
	return (
		<React.Fragment>
			<footer className="section-footer bg-secondary">
				<div className="container">
					<section className="footer-top padding-y-lg text-white">
						<div className="row">
							<aside className="col-md col-6">
								<h6 className="title text-white">Services à la clientèle</h6>
								<ul className="list-unstyled">
									<li>
										{' '}
										<a href="#">Centre d’aide</a>
									</li>
									<li>
										{' '}
										<a href="#">Nous contacter</a>
									</li>
								</ul>
							</aside>
							<aside className="col-md col-6">
								<h6 className="title text-white">Qui sommes-nous ?</h6>
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
								<h6 className="title text-white">Vendre sur Bangwé La Massiwa</h6>
								<ul className="list-unstyled">
									<li>
										{' '}
										<a href="#">Adhésion comme référent</a>
									</li>
									<li>
										{' '}
										<a href="#">Trouver un référent</a>
									</li>
								</ul>
							</aside>
							{/* <aside className="col-md col-6">
								<h6 className="title text-white">Trouver ce que</h6>
								<ul className="list-unstyled">
									<li>
										{' '}
										<a href="#">Toutes les catégories </a>
									</li>
								</ul>
							</aside> */}
							<aside className="col-md">
								<h6 className="title text-white">Social</h6>
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
						<p className="text-white">Politique de confidentialité - Mentions Legales</p>
						<p className="text-muted">
							{' '}
							COPYRIGHT &copy; 2021 BANGWÉ LA MASSIWA by{' '}
							<a href="https://kaymkassai.tech" target="blank" style={{ color: '#fff' }}>
								Kaym Kassai
							</a>, TOUS DROIT RESERVÉS{' '}
						</p>
						<br />
					</section>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
