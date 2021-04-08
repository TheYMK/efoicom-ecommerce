import React from 'react';

const Breadcrumb = ({ category_name, item_title }) => {
	return (
		<section className="py-3 bg-light">
			<div className="container">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<a href="/">Accueil</a>
					</li>
					<li className="breadcrumb-item">
						<a href="#">{category_name}</a>
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
