import React from 'react';
import Link from 'next/link';

const SingleProduct = ({ imageSrc }) => {
	return (
		<div className="col-xl-3 col-lg-3 col-md-4 col-12">
			<div className="product-wrapper">
				<div className="product-container">
					<div className="product-top">
						<img src={imageSrc} />
					</div>
					<div className="product-bottom">
						<div className="product-left">
							<div className="product-details">
								<p style={{ fontSize: '13px', fontWeight: '700' }}>Gamme Ridoah</p>
							</div>
							<div className="product-buy">
								<Link href="/products">
									<a>
										<i className="material-icons">add_shopping_cart</i>
									</a>
								</Link>
							</div>
						</div>
					</div>
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
