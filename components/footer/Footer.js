import React from 'react';
import Link from 'next/link';

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
										<Link href="/faq">
											<a>F.A.Q</a>
										</Link>
									</li>
									<li>
										{' '}
										<a href="/#contact">Nous contacter</a>
									</li>
								</ul>
							</aside>
							<aside className="col-md col-6">
								<h6 className="title text-white">Qui sommes-nous ?</h6>
								<ul className="list-unstyled">
									<li>
										{' '}
										<a href="#">À propos de Bangwé La Massiwa</a>
									</li>
									{/* <li>
										{' '}
										<a href="#">Plan du site</a>
									</li> */}
								</ul>
							</aside>
							<aside className="col-md col-6">
								<h6 className="title text-white">Vendre sur Bangwé La Massiwa</h6>
								<ul className="list-unstyled">
									<li>
										<Link href="/help/how-to-become-referent">
											<a>Devenir référent</a>
										</Link>
									</li>
									<li>
										<Link href="/find-referent">
											<a>Trouver un référent</a>
										</Link>
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
										<a
											href="https://www.facebook.com/Efoicom-Entreprendre-au-Feminin-Ocean-Indien-Comores-1640111439617410"
											target="blank"
										>
											<i className="fab fa-facebook" /> Facebook{' '}
										</a>
									</li>
									{/* <li>
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
									</li> */}
								</ul>
							</aside>
						</div>
					</section>

					<section className="footer-bottom text-center">
						<p className="text-white">
							<a href="/privacy-policy" style={{ color: '#fff' }}>
								Politique de confidentialité
							</a>{' '}
							-{' '}
							<a href="/terms-and-conditions" style={{ color: '#fff' }}>
								Mentions légales
							</a>
						</p>
						<p className="text-muted"> COPYRIGHT &copy; 2021 BANGWÉ LA MASSIWA, TOUS DROIT RESERVÉS </p>
						<p>
							<span className="text-muted">Developed by</span>{' '}
							<a href="https://kaymkassai.tech" target="blank" style={{ color: '#fff' }}>
								Kaym Kassai
							</a>
						</p>
					</section>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
