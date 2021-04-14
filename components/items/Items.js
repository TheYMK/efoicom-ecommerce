import React from 'react';
import SingleItem from './SingleItem';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

const Items = ({ items_type, items }) => {
	const dispatch = useDispatch();

	const handleClickProducts = () => {
		dispatch({
			type: 'SET_FILTER',
			payload: { byCategory: [], bySub: '', byType: 'product' }
		});

		Router.push('/items');
	};

	const handleClickServices = () => {
		dispatch({
			type: 'SET_FILTER',
			payload: { byCategory: [], bySub: '', byType: 'service' }
		});

		Router.push('/items');
	};
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
				{/* <div className="text-center">
					<Link href="/items">
						<a className="btn btn-primary mt-4 rounded-pill">Tous les articles</a>
					</Link>
				</div> */}
				<div className="text-center">
					{items_type === 'products' ? (
						<button className="btn btn-primary mt-4 rounded-pill" onClick={handleClickProducts}>
							Tous les produits
						</button>
					) : (
						<button className="btn btn-primary mt-4 rounded-pill" onClick={handleClickServices}>
							Tous les services
						</button>
					)}
				</div>
			</section>
		</React.Fragment>
	);
};

export default Items;
