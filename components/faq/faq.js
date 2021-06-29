import React from 'react';

const FAQ = () => {
	return (
		<section id="faq" className="faq padding-bottom">
			<div className="container">
				<div className="card" data-aos="fade-up" data-aos-delay="100">
					<div className="card-body">
						<ul className="faq-list">
							<li>
								<a data-toggle="collapse" className="" href="#faq1">
									Question #1 ? <i className="icofont-simple-up" />
								</a>
								<div id="faq1" className="collapse show" data-parent=".faq-list">
									<p>Réponse #1</p>
								</div>
							</li>

							<li>
								<a data-toggle="collapse" href="#faq2" className="collapsed">
									Question #2 ? <i className="icofont-simple-up" />
								</a>
								<div id="faq2" className="collapse" data-parent=".faq-list">
									<p>Réponse #2</p>
								</div>
							</li>

							<li>
								<a data-toggle="collapse" href="#faq3" className="collapsed">
									Question #3 ? <i className="icofont-simple-up" />
								</a>
								<div id="faq3" className="collapse" data-parent=".faq-list">
									<p>Réponse #3</p>
								</div>
							</li>

							<li>
								<a data-toggle="collapse" href="#faq4" className="collapsed">
									Question #4 ? <i className="icofont-simple-up" />
								</a>
								<div id="faq4" className="collapse" data-parent=".faq-list">
									<p>Réponse #4</p>
								</div>
							</li>

							<li>
								<a data-toggle="collapse" href="#faq5" className="collapsed">
									Question #5 ? <i className="icofont-simple-up" />
								</a>
								<div id="faq5" className="collapse" data-parent=".faq-list">
									<p>Réponse #5</p>
								</div>
							</li>

							<li>
								<a data-toggle="collapse" href="#faq6" className="collapsed">
									Question #6 ? <i className="icofont-simple-up" />
								</a>
								<div id="faq6" className="collapse" data-parent=".faq-list">
									<p>Réponse #6</p>
								</div>
							</li>
							<li>
								<a data-toggle="collapse" href="#faq7" className="collapsed">
									Question #7 ? <i className="icofont-simple-up" />
								</a>
								<div id="faq7" className="collapse" data-parent=".faq-list">
									<p>Réponse #7</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
