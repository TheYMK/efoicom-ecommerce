import React from 'react';

const Regions = () => {
	return (
		<React.Fragment>
			<section className="padding-bottom">
				<header className="section-heading heading-line">
					<h4 className="title-section text-uppercase">Chosissez une île</h4>
				</header>

				<ul className="row mt-4">
					<li className="col-md col-6">
						<a href="#" className="icontext">
							{' '}
							<img className="icon-flag-sm" src="/static/images/icons/flags/CN.png" />{' '}
							<span>Anjouan</span>{' '}
						</a>
					</li>
					<li className="col-md col-6">
						<a href="#" className="icontext">
							{' '}
							<img className="icon-flag-sm" src="/static/images/icons/flags/DE.png" /> <span>Mohéli</span>{' '}
						</a>
					</li>
					<li className="col-md col-6">
						<a href="#" className="icontext">
							{' '}
							<img className="icon-flag-sm" src="/static/images/icons/flags/AU.png" />{' '}
							<span>Ngazidja</span>{' '}
						</a>
					</li>
				</ul>
			</section>
		</React.Fragment>
	);
};

export default Regions;
