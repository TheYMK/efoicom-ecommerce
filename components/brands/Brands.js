import React from 'react';

const Brands = () => {
	return (
		<React.Fragment>
			<section className="padding-bottom">
				<header className="section-heading heading-line">
					<h4 className="title-section text-uppercase">Nos partenaires</h4>
				</header>

				<div className="container">
					<div className="card mb-5">
						<div className="card-body">
							<div className="row text-center">
								<div className="col-md-2 mt-3">
									<img src="/static/images/partenaires/logocomores.png" style={{ height: '200px' }} />
								</div>
								<div className="col-md-3 mt-3">
									<img src="/static/images/partenaires/logoefoicom.png" style={{ height: '200px' }} />
								</div>
								<div className="col-md-2 mt-3">
									<img src="/static/images/partenaires/logoonu.png" style={{ height: '200px' }} />
								</div>
								<div className="col-md-2 mt-3">
									<img src="/static/images/partenaires/logopnud.png" style={{ height: '200px' }} />
								</div>
								<div className="col-md-3">
									<img
										src="/static/images/partenaires/logocanada.png"
										style={{ height: '300px', marginTop: '-50px', paddingBottom: '0' }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Brands;
