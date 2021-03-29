import React from 'react';

const Main = () => {
	return (
		<React.Fragment>
			<section className="section-main padding-y">
				<main className="card">
					<div className="card-body">
						<div className="row">
							<aside className="col-lg-3 col-md-3 flex-lg-grow-0">
								<nav className="nav-home-aside">
									<h6 className="title-category">
										Nos Catégories <i className="d-md-none icon fa fa-chevron-down" />
									</h6>
									<ul className="menu-category">
										<li>
											<a href="#">Vêtements</a>
										</li>
										<li>
											<a href="#">Bijoux & Accessoires</a>
										</li>

										<li>
											<a href="#">Maison & Jardin</a>
										</li>
										<li>
											<a href="#">Beauté & Soins personnels</a>
										</li>
										<li>
											<a href="#">Agriculture & Alimentation</a>
										</li>
										<li>
											<a href="#">Bébé & Puériculture</a>
										</li>
										<li>
											<a href="#">Art & Création</a>
										</li>
										<li>
											<a href="#">Electroménager & Cuisine</a>
										</li>

										{/* <li className="has-submenu">
											<a href="#">More items</a>
											<ul className="submenu">
												<li>
													<a href="#">Submenu name</a>
												</li>
												<li>
													<a href="#">Great submenu</a>
												</li>
												<li>
													<a href="#">Another menu</a>
												</li>
												<li>
													<a href="#">Some others</a>
												</li>
											</ul>
										</li> */}
									</ul>
								</nav>
							</aside>
							<div className="col-md-9 col-xl-9 col-lg-9">
								<div
									id="carousel1_indicator"
									className="slider-home-banner carousel slide"
									data-ride="carousel"
								>
									<ol className="carousel-indicators">
										<li data-target="#carousel1_indicator" data-slide-to="0" className="active" />
										<li data-target="#carousel1_indicator" data-slide-to="1" />
										<li data-target="#carousel1_indicator" data-slide-to="2" />
									</ol>
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img src="/static/images/banners/slide1.jpg" alt="First slide" />
										</div>
										<div className="carousel-item">
											<img src="/static/images/banners/slide2.jpg" alt="Second slide" />
										</div>
										<div className="carousel-item">
											<img src="/static/images/banners/slide3.jpg" alt="Third slide" />
										</div>
									</div>
									<a
										className="carousel-control-prev"
										href="#carousel1_indicator"
										role="button"
										data-slide="prev"
									>
										<span className="carousel-control-prev-icon" aria-hidden="true" />
										<span className="sr-only">Previous</span>
									</a>
									<a
										className="carousel-control-next"
										href="#carousel1_indicator"
										role="button"
										data-slide="next"
									>
										<span className="carousel-control-next-icon" aria-hidden="true" />
										<span className="sr-only">Next</span>
									</a>
								</div>
							</div>
							{/* <div className="col-md d-none d-lg-block flex-grow-1">
								<aside className="special-home-right">
									<h6 className="bg-blue text-center text-white mb-0 p-2">Annonce</h6>

									<div className="card-banner border-bottom">
										<div className="py-3" style={{ width: '80%' }}>
											<h6 className="card-title">Du nouveau dans la catégorie vêtement</h6>
											<a href="#" className="btn btn-secondary btn-sm">
												{' '}
												Voir plus{' '}
											</a>
										</div>
									</div>

									<div className="card-banner border-bottom">
										<div className="py-3" style={{ width: '80%' }}>
											<h6 className="card-title">Du nouveau dans la catégorie vêtement</h6>
											<a href="#" className="btn btn-secondary btn-sm">
												{' '}
												Voir plus{' '}
											</a>
										</div>
									</div>

									<div className="card-banner border-bottom">
										<div className="py-3" style={{ width: '80%' }}>
											<h6 className="card-title">Du nouveau dans la catégorie vêtement</h6>
											<a href="#" className="btn btn-secondary btn-sm">
												{' '}
												Voir plus{' '}
											</a>
										</div>
									</div>
								</aside>
							</div> */}
						</div>
					</div>
				</main>
			</section>
		</React.Fragment>
	);
};

export default Main;
