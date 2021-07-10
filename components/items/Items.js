import React from 'react';
import SingleItem from './SingleItem';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

const Items = ({ items_type, items }) => {
	const dispatch = useDispatch();
	const { lang } = useSelector((state) => ({ ...state }));

	const handleClickProducts = () => {
		dispatch({
			type: 'SET_FILTER',
			payload: { byCategory: [], bySub: '', byType: 'product', byzone: 'allzones' }
		});

		Router.push('/items');
	};

	const handleClickServices = () => {
		dispatch({
			type: 'SET_FILTER',
			payload: { byCategory: [], bySub: '', byType: 'service', byzone: 'allzones' }
		});

		Router.push('/items');
	};
	return (
		<React.Fragment>
			<section className="padding-bottom-sm">
				<header className="section-heading heading-line">
					{lang === 'fr' && (
						<h4 className="title-section text-uppercase">
							{items_type === 'products' ? 'Produits' : 'Services'} recommandés
						</h4>
					)}
					{lang === 'en' && (
						<h4 className="title-section text-uppercase">
							Recommended {items_type === 'products' ? 'products' : 'services'}
						</h4>
					)}
					{lang === 'km' && (
						<h4 className="title-section text-uppercase">
							{items_type === 'products' ? 'Produits' : 'Services'} recommandés
						</h4>
					)}
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
							{lang === 'fr' ? 'Tous les produits' : 'All products'}
						</button>
					) : (
						<button className="btn btn-primary mt-4 rounded-pill" onClick={handleClickServices}>
							{lang === 'fr' ? 'Tous les services' : 'All services'}
						</button>
					)}
				</div>
			</section>
		</React.Fragment>
	);
};

export default Items;
