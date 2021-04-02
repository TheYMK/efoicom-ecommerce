import React from 'react';
import Link from 'next/link';

const SingleEditableItem = ({ item, handleRemoveItem }) => {
	const { title, images, description, provider_name, provider_phone_number, provider_address } = item;

	return (
		<div className="col-md-4">
			<div className="product-card product-card-profile">
				<div className="product-card-header product-card-header-image">
					<a href="#">
						<img className="img" src={images[0].url} />
					</a>
					<div className="colored-shadow" />
				</div>
				<div className="product-card-body ">
					<h6 className="product-card-category text-info">{title.substring(0, 50)}...</h6>

					<Link href={`/referent/item/${item.slug}`}>
						<a className="btn btn-primary">
							<i className="fas fa-edit" /> Modifier
						</a>
					</Link>

					<button className="btn btn-danger ml-2" onClick={(e) => handleRemoveItem(item.slug)}>
						<i className="fas fa-trash" /> Supprimer
					</button>
				</div>

				<div className="product-inside">
					<div className="product-icon">
						<i className="material-icons">info_outline</i>
					</div>
					<div className="product-contents">
						<p>
							<strong className="text-dark">Description:</strong> <br /> {description}
						</p>
						<p>
							<strong className="text-dark">Nom du fournisseur:</strong> <br /> {provider_name}
						</p>
						<p>
							<strong className="text-dark">Contact:</strong> <br /> {provider_phone_number}
						</p>
						<p>
							<strong className="text-dark">Adresse:</strong> <br /> {provider_address}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleEditableItem;
