import React from 'react';

const OurCategories = () => {
	return (
		<React.Fragment>
			<section className="padding-bottom padding-y">
				<header className="section-heading heading-line">
					<h4 className="title-section text-uppercase">Nos catégories populaire</h4>
				</header>

				<section className="categories px-5">
					<div className="container text-center">
						<div className="row justify-content-center">
							<div className="col-md-3 col-sm-6 col-xs-6">
								<div className="categories-item">
									<a href="menu.html">
										<img src="/static/images/illustrations/carrot.png" alt="Breakfast" />
										<h4>Agriculture</h4>
									</a>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="categories-item">
									<a href="menu.html">
										<img src="/static/images/illustrations/clothes.png" alt="Lunch" />
										<h4>Artisanat</h4>
									</a>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="categories-item">
									<a href="menu.html">
										<img src="/static/images/illustrations/cow.png" alt="Dinner" />
										<h4>Élevage</h4>
									</a>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="categories-item">
									<a href="menu.html">
										<img src="/static/images/illustrations/animals.png" alt="Desserts" />
										<h4>Produits halieutiques</h4>
									</a>
								</div>
							</div>
						</div>

						<button className="btn btn-primary mt-5 rounded-pill">Voir la liste complète</button>
					</div>
				</section>
			</section>
		</React.Fragment>
	);
};

export default OurCategories;
