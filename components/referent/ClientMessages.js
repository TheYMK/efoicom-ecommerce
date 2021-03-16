import React from 'react';
import ReferentMenu from './ReferentMenu';

const ClientMessages = () => {
	return (
		<section className="section-content padding-y">
			<div className="container">
				<div className="row">
					<aside className="col-md-3">
						<ReferentMenu pageLocation="client_messages" />
					</aside>
					<main className="col-md-9">
						<article className="card mb-4">
							<header className="card-header">
								<strong className="d-inline-block mr-3">Client Messages here</strong>
							</header>
						</article>
					</main>
				</div>
			</div>
		</section>
	);
};

export default ClientMessages;
