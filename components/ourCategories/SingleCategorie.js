import React from 'react';

const SingleCategorie = ({ category }) => {
	return (
		<div className="col-md-3 col-sm-6 col-xs-12">
			<div className="categories-item">
				<a href="menu.html">
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
