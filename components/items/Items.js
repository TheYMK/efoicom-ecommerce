import React from 'react';
import SingleProduct from './SingleProduct';

const Items = () => {
	return (
		<React.Fragment>
			<section className="padding-bottom-sm">
				<header className="section-heading heading-line">
					<h4 className="title-section text-uppercase">Articles recommandés</h4>
				</header>

				<div className="container">
					<div className="row row-sm">
						<SingleProduct imageSrc="/static/images/products/1.jpg" />
						<SingleProduct imageSrc="/static/images/products/2.jpg" />
						<SingleProduct imageSrc="/static/images/products/3.jpg" />
						<SingleProduct imageSrc="/static/images/products/3.jpg" />
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Items;
