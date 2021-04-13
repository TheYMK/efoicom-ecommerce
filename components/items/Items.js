import React from 'react';
import SingleItem from './SingleItem';
import Link from 'next/link';

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
						<Link href="/items">
							<a className="btn btn-primary mt-4 rounded-pill">Tous les produits</a>
						</Link>
					) : (
						<Link href="/items">
							<a className="btn btn-primary mt-4 rounded-pill">Tous les services</a>
						</Link>
					)}
				</div>
			</section>
		</React.Fragment>
	);
};

export default Items;
