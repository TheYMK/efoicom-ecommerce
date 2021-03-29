import React from 'react';
import ReferentMenu from './ReferentMenu';

const ReferentAccountSettings = () => {
	return (
		<section className="section-content padding-y">
			<div className="container">
				<div className="row">
					<aside className="col-md-3">
						<ReferentMenu pageLocation="account_settings" />
					</aside>
					<main className="col-md-9">
						<article className="card mb-4">
							<header className="card-header">
								<strong className="d-inline-block mr-3">Account Settings here</strong>
							</header>
						</article>
					</main>
				</div>
			</div>
		</section>
	);
};

export default ReferentAccountSettings;
