import React from 'react';

const Deal = () => {
	return (
		<React.Fragment>
			<section className="padding-bottom">
				<header className="section-heading heading-line">
					<h4 className="title-section text-uppercase">À découvrir</h4>
				</header>

				<div className="card card-deal">
					<div className="col-heading content-body">
						<header className="section-heading">
							<h3 className="section-title text-center">
								Notre selection hebdomadaire des meilleurs magasins et services
							</h3>
						</header>
						{/* <div className="timer">
							<div>
								{' '}
								<span className="num">04</span> <small>Days</small>
							</div>
							<div>
								{' '}
								<span className="num">12</span> <small>Hours</small>
							</div>
							<div>
								{' '}
								<span className="num">58</span> <small>Min</small>
							</div>
							<div>
								{' '}
								<span className="num">02</span> <small>Sec</small>
							</div>
						</div> */}
					</div>
					<div className="row no-gutters items-wrap">
						<div className="col-md col-6">
							<figure className="card-product-grid card-sm">
								<a href="#" className="img-wrap">
									<img src="/static/images/products/vegetables.jpg" />
								</a>
								<div className="text-wrap p-3">
									<a href="#" className="title">
										Vente de Légumes
									</a>

									<span className="badge badge-primary"> Magasin 1 </span>
									<p className="text-muted mt-3">
										<i className="fa fa-map-marker-alt" /> Moroni, Malouzini
									</p>
								</div>
							</figure>
						</div>
						<div className="col-md col-6">
							<figure className="card-product-grid card-sm">
								<a href="#" className="img-wrap">
									<img src="/static/images/products/jubba1.jpg" />
								</a>
								<div className="text-wrap p-3">
									<a href="#" className="title">
										Fabrication de vêtement
									</a>

									<span className="badge badge-primary"> Chez Mr X </span>
									<p className="text-muted mt-3">
										<i className="fa fa-map-marker-alt" /> Anjouan, Domoni
									</p>
								</div>
							</figure>
						</div>
						<div className="col-md col-6">
							<figure className="card-product-grid card-sm">
								<a href="#" className="img-wrap">
									<img src="/static/images/products/vegetables.jpg" />
								</a>
								<div className="text-wrap p-3">
									<a href="#" className="title">
										Vente de Légumes
									</a>

									<span className="badge badge-primary"> Magasin 1 </span>
									<p className="text-muted mt-3">
										<i className="fa fa-map-marker-alt" /> Moroni, Malouzini
									</p>
								</div>
							</figure>
						</div>
						<div className="col-md col-6">
							<figure className="card-product-grid card-sm">
								<a href="#" className="img-wrap">
									<img src="/static/images/products/jubba1.jpg" />
								</a>
								<div className="text-wrap p-3">
									<a href="#" className="title">
										Fabrication de vêtement
									</a>

									<span className="badge badge-primary"> Chez Mr X </span>
									<p className="text-muted mt-3">
										<i className="fa fa-map-marker-alt" /> Anjouan, Domoni
									</p>
								</div>
							</figure>
						</div>
						<div className="col-md col-6">
							<figure className="card-product-grid card-sm">
								<a href="#" className="img-wrap">
									<img src="/static/images/products/vegetables.jpg" />
								</a>
								<div className="text-wrap p-3">
									<a href="#" className="title">
										Vente de Légumes
									</a>

									<span className="badge badge-primary"> Magasin 1 </span>
									<p className="text-muted mt-3">
										<i className="fa fa-map-marker-alt" /> Moroni, Malouzini
									</p>
								</div>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Deal;
