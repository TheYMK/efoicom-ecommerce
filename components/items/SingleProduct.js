import React from 'react';
import Link from 'next/link';

const SingleProduct = ({ imageSrc }) => {
	return (
		<div className="col-md-3">
			<div className="product-card product-card-profile">
				<div className="product-card-header product-card-header-image">
					<a href="#">
						<img className="img" src={imageSrc} />
					</a>
					<div className="colored-shadow" />
				</div>
				<div className="product-card-body ">
					<h6 className="product-card-category text-info">Annonce 1</h6>

					<button className="btn btn-primary">
						<i className="fas fa-cart-plus" />
					</button>
				</div>

				<div className="product-inside">
					<div className="product-icon">
						<i className="material-icons">info_outline</i>
					</div>
					<div className="product-contents">
						<p>
							<strong>Description:</strong>
						</p>
						<p>Cosmetic made in Comoros</p>
						<p>
							<strong>Contact: +269 4864659</strong>
						</p>
						<p>
							<strong>Adresse: Moroni, Hamramba</strong>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
