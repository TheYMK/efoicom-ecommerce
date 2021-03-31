import React from 'react';

const Services = () => {
	return (
		<React.Fragment>
			<section className="padding-bottom">
				<header className="section-heading heading-line">
					<h4 className="title-section text-uppercase">Nos partenaires</h4>
				</header>

				{/* <div className="brands">
					<div className="brands-container">
						<div className="row ml-5 px-5">
							<div className="brands-col-5 mr-5">
								<img src="/static/images/partenaires/comores.png" alt="" />
							</div>
							<div className="brands-col-5 mr-5">
								<img src="/static/images/partenaires/efoicom.png" alt="" />
							</div>
							<div className="brands-col-5 mr-5 mt-5">
								<img src="/static/images/partenaires/onu.png" alt="" />
							</div>
							<div className="brands-col-5 mr-5 mt-4">
								<img src="/static/images/partenaires/pnud.png" alt="" />
							</div>
							<div className="brands-col-5 mr-5">
								<img src="/static/images/partenaires/canada.png" alt="" />
							</div>
							<div className="brands-col-5">
								<img src="/static/images/partenaires/9.jpg" alt="" />
							</div>
						</div>
					</div>
				</div> */}

				<div className="container">
					<div className="card mb-5 ">
						<div className="card-body px-5">
							<div className="row mt-3" style={{ marginLeft: '60px' }}>
								<div className="brands-col-5 ml-2 mr-5">
									<img
										src="/static/images/partenaires/comores.png"
										alt=""
										style={{ width: '140px' }}
									/>
								</div>
								<div className="brands-col-5 mr-5">
									<img
										src="/static/images/partenaires/efoicom.jpg"
										alt=""
										style={{ width: '130px' }}
									/>
								</div>
								<div className="brands-col-5 mr-5">
									<img src="/static/images/partenaires/onu.png" alt="" />
								</div>
								<div className="brands-col-5 mr-5">
									<img src="/static/images/partenaires/pnud.svg" alt="" />
								</div>
								<div className="brands-col-5 mt-5 mr-5">
									<img
										src="/static/images/partenaires/canada.png"
										alt=""
										style={{ width: '300px' }}
									/>
								</div>
								<div className="brands-col-5">
									<img src="/static/images/partenaires/9.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Services;
