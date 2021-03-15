import React from 'react';

const Request = () => {
	return (
		<React.Fragment>
			<section className="padding-bottom">
				<header className="section-heading heading-line">
					<h4 className="title-section text-uppercase">Qu'est ce que Massiwa Market</h4>
				</header>

				<div className="row">
					<div className="col-md-8">
						<div
							className="card-banner banner-quote overlay-gradient"
							style={{ backgroundImage: "url('/static/images/banners/banner9.jpg')" }}
						>
							<div className="card-img-overlay white">
								<h3 className="card-title">Une communauté unique</h3>
								<p className="card-text" style={{ maxWidth: '400px' }}>
									Massiwa Market est un marché national en ligne, où les gens se retrouvent pour
									fabriquer, vendre, acheter et collectionner des articles uniques.
								</p>
								<a href="" className="btn btn-primary rounded-pill">
									En savoir plus
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card card-body">
							<h4 className="title py-3">Soutenir des créateurs indépendants</h4>
							<p>
								Il n'y a pas d'entrepôt Massiwa Market ; il n'y a que des millions de personnes qui
								vendent ce qu'ils aiment. Nous facilitons tout ce processus, en vous aidant à entrer
								directement en contact avec les créateurs et à trouver des choses extraordinaires.
							</p>
							<p>
								Nous accordons une très haute importance à la confidentialité de vos données. Si vous
								avez besoin d'assistance en quoi que ce soit, nous sommes toujours prêts à intervenir
								pour vous aider.
							</p>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Request;
