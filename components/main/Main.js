import React from 'react';

const Main = () => {
	return (
		<React.Fragment>
			<section className="section-intro">
				<div className="">
					<div id="carousel1_indicator" className="slider-home-banner carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#carousel1_indicator" data-slide-to="0" className="active" />
							{/* <li data-target="#carousel1_indicator" data-slide-to="1" /> */}
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img src="/static/images/banners/karibu.webp" alt="First slide" />
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
			</section>
		</React.Fragment>
	);
};

export default Main;
