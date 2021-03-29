import React from 'react';
import ReferentMenu from './ReferentMenu';

const ReferentDashboard = () => {
	return (
		<React.Fragment>
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<ReferentMenu pageLocation="dashboard" />
						</aside>
						<main className="col-md-9">
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">referent dashboard</strong>
								</header>
							</article>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default ReferentDashboard;
