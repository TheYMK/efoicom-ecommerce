import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux';

const Request = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const { lang } = useSelector((state) => ({ ...state }));

	return (
		<React.Fragment>
			<section className="padding-bottom">
				<header className="section-heading heading-line">
					<h4 className="title-section text-uppercase">
						{lang === 'fr' ? `Qu'est-ce que Bangwé La Massiwa` : 'What is Bangwé La Massiwa'}
					</h4>
				</header>

				<div className="row" data-aos="zoom-in-up">
					<div className="col-md-8">
						<div
							className="card-banner banner-quote overlay-gradient"
							style={{ backgroundImage: "url('/static/images/banners/banner1.jpg')" }}
						>
							<div className="card-img-overlay white">
								<h3 className="card-title text-white">
									{lang === 'fr' ? `Une communauté unique` : 'A unique community'}
								</h3>
								<p className="card-text" style={{ maxWidth: '400px' }}>
									{lang === 'fr' ? (
										`Bangwé La Massiwa est un marché national en ligne, où les gens se retrouvent pour
									fabriquer, vendre, acheter et collectionner des articles uniques.`
									) : (
										'Bangwé La Massiwa is a national online marketplace, where people come together to create, sell, buy and collect unique items.'
									)}
								</p>
								<a href="" className="btn btn-primary rounded-pill">
									{lang === 'fr' ? `En savoir plus` : 'Read more'}
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card card-body">
							<h4 className="title py-3">
								{lang === 'fr' ? `Soutenir des créateurs indépendants` : 'Support independent creators'}
							</h4>
							<p>
								{lang === 'fr' ? (
									`Il n'y a pas d'entrepôt Bangwé La Massiwa, il n'y a que des millions de personnes qui
								vendent ce qu'elles aiment. Nous facilitons tout ce processus en vous aidant à entrer
								directement en contact avec les créateurs et à trouver des choses extraordinaires.`
								) : (
									'There is no Bangwé La Massiwa warehouse, there are only millions of people selling what they like. We make this whole process easier by helping you connect directly with the creators and find extraordinary things.'
								)}
							</p>
							<p>
								{lang === 'fr' ? (
									`Nous accordons une très haute importance à la confidentialité de vos données. Si vous
								avez besoin d'assistance, nous sommes toujours prêts à intervenir pour vous aider.`
								) : (
									'We attach great importance to the confidentiality of your data. If you need assistance, we are always ready to step in to help.'
								)}
							</p>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Request;
