import React from 'react';
import SingleItem from './SingleItem';

const Items = ({ items_type, items }) => {
	return (
		<React.Fragment>
			<section className="padding-bottom-sm">
				<header className="section-heading heading-line">
					<h4 className="title-section text-uppercase">
						{items_type === 'products' ? 'Produits' : 'Services'} recommandés
					</h4>
				</header>

				<div className="container">
					<div className="row row-sm">
						{items.map((item, index) => (
							<SingleItem key={item._id} imageSrc={item.images[0].url} item={item} />
						))}
					</div>
				</div>
				<div className="text-center">
					{items_type === 'products' ? (
						<button className="btn btn-primary mt-4 rounded-pill">Tous les produits</button>
					) : (
						<button className="btn btn-primary mt-4 rounded-pill">Tous les services</button>
					)}
				</div>
			</section>
		</React.Fragment>
	);
};

export default Items;
