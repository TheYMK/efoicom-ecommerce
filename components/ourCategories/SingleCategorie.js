import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

const SingleCategorie = ({ category }) => {
	const dispatch = useDispatch();

	const handleClick = (id) => {
		dispatch({
			type: 'SET_FILTER',
			payload: { byCategory: [ id ], bySub: '', byType: 'all' }
		});

		Router.push('/items');
	};
	return (
		<div className="col-md-3 col-sm-6 col-xs-12">
			<div className="categories-item">
				<a onClick={() => handleClick(category._id)}>
					<img
						src={category.images.length > 0 ? category.images[0].url : ''}
						alt={`Categorie ${category.name}`}
					/>
					<h4>{category.name}</h4>
				</a>
			</div>
		</div>
	);
};

export default SingleCategorie;
