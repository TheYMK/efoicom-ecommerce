import React from 'react';

const SectionOne = () => {
	return (
		<React.Fragment>
			<section className="padding-bottom">
				<header className="section-heading heading-line">
					<h4 className="title-section text-uppercase">Bijoux & Accessoires</h4>
				</header>

				<div className="card card-home-category">
					<div className="row no-gutters">
						<div className="col-md-3">
							<div className="home-category-banner bg-light-orange">
								<h5 className="title">Sélection des nouveaux produits</h5>
								{/* <p>
									Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
									magna aliqua.{' '}
								</p> */}
								<a href="#" className="btn btn-outline-primary rounded-pill mt-5">
									Explorez plus
								</a>
								<img src="/static/images/items/2.jpg" className="img-bg" />
							</div>
						</div>
						<div className="col-md-9">
							<ul className="row no-gutters bordered-cols">
								<li className="col-6 col-lg-3 col-md-4">
									<a href="#" className="item">
										<div className="card-body">
											<h6 className="title">Article 1 </h6>
											<img className="img-sm float-right" src="/static/images/items/1.jpg" />
											<p className="text-muted">
												<i className="fa fa-map-marker-alt" /> Anjouan, Domoni
											</p>
										</div>
									</a>
								</li>
								<li className="col-6 col-lg-3 col-md-4">
									<a href="#" className="item">
										<div className="card-body">
											<h6 className="title">Article 2 </h6>
											<img className="img-sm float-right" src="/static/images/items/2.jpg" />
											<p className="text-muted">
												<i className="fa fa-map-marker-alt" /> Anjouan, Domoni
											</p>
										</div>
									</a>
								</li>
								<li className="col-6 col-lg-3 col-md-4">
									<a href="#" className="item">
										<div className="card-body">
											<h6 className="title">Article 3 </h6>
											<img className="img-sm float-right" src="/static/images/items/3.jpg" />
											<p className="text-muted">
												<i className="fa fa-map-marker-alt" /> Anjouan, Domoni
											</p>
										</div>
									</a>
								</li>
								<li className="col-6 col-lg-3 col-md-4">
									<a href="#" className="item">
										<div className="card-body">
											<h6 className="title">Article 4 </h6>
											<img className="img-sm float-right" src="/static/images/items/4.jpg" />
											<p className="text-muted">
												<i className="fa fa-map-marker-alt" /> Anjouan, Domoni
											</p>
										</div>
									</a>
								</li>
								<li className="col-6 col-lg-3 col-md-4">
									<a href="#" className="item">
										<div className="card-body">
											<h6 className="title">Article 5 </h6>
											<img className="img-sm float-right" src="/static/images/items/5.jpg" />
											<p className="text-muted">
												<i className="fa fa-map-marker-alt" /> Anjouan, Domoni
											</p>
										</div>
									</a>
								</li>
								<li className="col-6 col-lg-3 col-md-4">
									<a href="#" className="item">
										<div className="card-body">
											<h6 className="title">Article 6 </h6>
											<img className="img-sm float-right" src="/static/images/items/6.jpg" />
											<p className="text-muted">
												<i className="fa fa-map-marker-alt" /> Anjouan, Domoni
											</p>
										</div>
									</a>
								</li>
								<li className="col-6 col-lg-3 col-md-4">
									<a href="#" className="item">
										<div className="card-body">
											<h6 className="title">Article 7 </h6>
											<img className="img-sm float-right" src="/static/images/items/7.jpg" />
											<p className="text-muted">
												<i className="fa fa-map-marker-alt" /> Anjouan, Domoni
											</p>
										</div>
									</a>
								</li>
								<li className="col-6 col-lg-3 col-md-4">
									<a href="#" className="item">
										<div className="card-body">
											<h6 className="title">Article 8 </h6>
											<img className="img-sm float-right" src="/static/images/items/6.jpg" />
											<p className="text-muted">
												<i className="fa fa-map-marker-alt" /> Anjouan, Domoni
											</p>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default SectionOne;
