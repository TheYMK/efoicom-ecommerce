import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleCategorie = ({ category }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const handleClick = (id) => {
		dispatch({
			type: 'SET_FILTER',
			payload: { byCategory: [ id ], bySub: '', byType: 'all' }
		});

		Router.push('/items');
	};
	return (
		<div className="col-md-3 col-sm-6 col-xs-6">
			<div className="categories-item" data-aos="fade-up">
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
