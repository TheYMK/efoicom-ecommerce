import React from 'react';
import ReferentMenu from './ReferentMenu';

const EvaluationSection = ({ pageLocation }) => {
	return (
		<React.Fragment>
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<ReferentMenu pageLocation={pageLocation} />
						</aside>
						<main className="col-md-9">
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">
										Votre compte est en cours d'évaluation. Vous n'aurez pas accés aux
										fonctionnalités de votre compte durant cette période d'évaluation. Merci de bien
										vouloir patienter.
									</strong>
								</header>
							</article>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default EvaluationSection;
