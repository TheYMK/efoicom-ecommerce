import React from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';

const Breadcrumb = ({ category_name, category_id, item_title }) => {
	const handleClickCategory = (id) => {
		dispatch({
			type: 'SET_FILTER',
			payload: { byCategory: [ id ], bySub: '', byType: 'all' }
		});

		Router.push('/items');
	};
	return (
		<section className="py-3 bg-light">
			<div className="container">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<a href="/">Accueil</a>
					</li>
					<li className="breadcrumb-item">
						<a href="#" onClick={(e) => handleClickCategory(category_id)}>
							{category_name}
						</a>
					</li>
					<li className="breadcrumb-item active" aria-current="page">
						{item_title}
					</li>
				</ol>
			</div>
		</section>
	);
};

export default Breadcrumb;
