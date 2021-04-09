import React from 'react';

const RelatedItems = ({ item }) => {
	return (
		<article className="media mb-3">
			<a href="#">
				<img className="img-sm mr-3" src={item.images[0].url} />
			</a>
			<div className="media-body">
				<h6 className="mt-0">
					<a href="#">{item.title}</a>
				</h6>
				<p className="mb-2">{item.description.substring(0, 50)}...</p>
				{/* <button className="btn btn-primary">Voir</button> */}
			</div>
		</article>
	);
};

export default RelatedItems;
