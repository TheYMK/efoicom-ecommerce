import React from 'react';

const Regions = () => {
	return (
		<React.Fragment>
			<section className="padding-bottom">
				<header className="section-heading heading-line">
					<h4 className="title-section text-uppercase">Chosissez une île</h4>
				</header>

				<div className="container text-center mt-4">
					<div className="row">
						<div className="col-md-4">
							<button className="btn button-region btn-lg">Anjouan</button>
						</div>
						<div className="col-md-4">
							<button className="btn button-region btn-lg">Ngazidja</button>
						</div>
						<div className="col-md-4">
							<button className="btn button-region btn-lg">Mohéli</button>
						</div>
					</div>
				</div>

				{/* <ul className="row mt-4">
					<li className="col-md col-3">
						<a href="#" className="icontext">
							<span>Anjouan</span>
						</a>
					</li>
					<li className="col-md col-3">
						<a href="#" className="icontext">
							<span>Mohéli</span>
						</a>
					</li>
					<li className="col-md col-3">
						<a href="#" className="icontext">
							<span>Ngazidja</span>
						</a>
					</li>
				</ul> */}
			</section>
		</React.Fragment>
	);
};

export default Regions;
