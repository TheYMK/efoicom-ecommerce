import React from 'react';
import Link from 'next/link';

const FavoriteItem = ({ imageSrc, item, handleRemoveItem }) => {
	const { title, description, provider_name, provider_phone_number, provider_address } = item;

	return (
		<div className="col-md-4">
			<div className="product-card product-card-profile">
				<div className="product-card-header product-card-header-image">
					<Link href={`/item/${item.slug}`}>
						<a>
							<img className="img" src={imageSrc} />
						</a>
					</Link>

					<div className="colored-shadow" />
				</div>
				<div className="product-card-body ">
					<h6 className="product-card-category text-info">{title}</h6>
					{/* <p className="text-muted mt-3">
						<i className="fa fa-map-marker-alt" /> {item.reference_zone && item.reference_zone.name}
					</p> */}
					<Link href={`/item/${item.slug}`}>
						<a className="btn btn-primary">
							<i className="fas fa-cart-plus" /> Voir l'article
						</a>
					</Link>

					<button className="btn btn-danger ml-3" onClick={(e) => handleRemoveItem(item._id)}>
						<i className="fas fa-trash" /> Retirer
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

export default FavoriteItem;
