import React from 'react';
import ReferentMenu from './ReferentMenu';

const ProductAndServiceSubmission = () => {
	return (
		<section className="section-content padding-y">
			<div className="container">
				<div className="row">
					<aside className="col-md-3">
						<ReferentMenu pageLocation="submission" />
					</aside>
					<main className="col-md-9">
						<article className="card mb-4">
							<header className="card-header">
								<strong className="d-inline-block mr-3">Product and Service submission</strong>
							</header>
						</article>
					</main>
				</div>
			</div>
		</section>
	);
};

export default ProductAndServiceSubmission;
