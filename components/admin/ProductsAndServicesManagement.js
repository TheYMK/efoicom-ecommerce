import React from 'react';
import AdminMenu from './AdminMenu';

const ProductsAndServicesManagement = () => {
	return (
		<React.Fragment>
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<AdminMenu pageLocation="products_and_services" />
						</aside>
						<main className="col-md-9">
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">Gestion des produits et services</strong>
								</header>
							</article>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default ProductsAndServicesManagement;
