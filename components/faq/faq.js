import React from 'react';
import { useSelector } from 'react-redux';

const FAQ = () => {
	const { lang } = useSelector((state) => ({ ...state }));

	return (
		<section id="faq" className="faq padding-bottom">
			<div className="container">
				<div className="card" data-aos="fade-up" data-aos-delay="100">
					<div className="card-body">
						<ul className="faq-list">
							<li>
								<a data-toggle="collapse" className="" href="#faq1">
									{lang === 'fr' ? (
										`Quelle est l'utilité de Bangwé La Massiwa ?`
									) : (
										'What is the use of Bangwé La Massiwa?'
									)}{' '}
									<i className="icofont-simple-up" />
								</a>
								<div id="faq1" className="collapse show" data-parent=".faq-list">
									<p>
										{lang === 'fr' ? (
											`Si vous êtes un vendeur, Bangwé La Massiwa est une plateforme qui peut être utilisée pour promouvoir votre business. Si vous êtes un client, c'est l'endroit idéal pour découvrir d'incroyable produits et services autour de vous et entrer facilement en contact avec les fournisseurs de ces produits et services.`
										) : (
											`If you're a seller, Bangwé La Massiwa is a platform that can be used to promote your business. If you're a customer, this is the place to discover amazing products and services around you and easily get in touch with providers of those products and services.`
										)}
									</p>
								</div>
							</li>

							<li>
								<a data-toggle="collapse" href="#faq2" className="collapsed">
									{lang === 'fr' ? (
										'Pourquoi devrais-je vendre sur Bangwé La Massiwa ?'
									) : (
										'Why should I sell on Bangwé La Massiwa?'
									)}{' '}
									<i className="icofont-simple-up" />
								</a>
								<div id="faq2" className="collapse" data-parent=".faq-list">
									<p>
										{lang === 'fr' ? (
											`Voici quelques raisons : la possibilité de présenter vos produits ou vos services à des centaines de millions de clients potentiels, ainsi que la possibilité de commencer à vendre rapidement avant même de créer un site Web commercial ou un magasin physique.`
										) : (
											'Here are just a couple of reasons: the opportunity to put your product in front of hundreds of millions of potential customers, plus the ability to start selling fast before you even set up a business website or physical store.'
										)}
									</p>
								</div>
							</li>

							<li>
								<a data-toggle="collapse" href="#faq3" className="collapsed">
									{lang === 'fr' ? (
										`Quels types de produits ou services ne peuvent pas être répertoriés sur Bangwé La Massiwa ?`
									) : (
										'What type of products or services cannot be listed on Bangwé La Massiwa?'
									)}{' '}
									<i className="icofont-simple-up" />
								</a>
								<div id="faq3" className="collapse" data-parent=".faq-list">
									<p>
										{lang === 'fr' ? (
											`Certains produits ou services peuvent ne pas être répertoriés pour des raisons de conformité aux restrictions légales ou réglementaires (par exemple, les médicaments sur ordonnance) ou à la politique de Bangwé La Massiwa (par exemple, les photos de scènes de crime). Chaque produit et service téléchargé sur cette plateforme est soumis à une évaluation par notre équipe.`
										) : (
											'Some products or services may not be listed as a matter of compliance with legal or regulatory restrictions (for example, prescription drugs) or Bangwé La Massiwa policy (for example, crime scene photos). Each product and service uploaded on this platform is subject to evaluation by our team.'
										)}
									</p>
								</div>
							</li>

							<li>
								<a data-toggle="collapse" href="#faq4" className="collapsed">
									{lang === 'fr' ? 'Comment suis-je payé ?' : 'How do I get paid?'}{' '}
									<i className="icofont-simple-up" />
								</a>
								<div id="faq4" className="collapse" data-parent=".faq-list">
									<p>
										{lang === 'fr' ? (
											`Pour le moment, nous n'acceptons pas les paiements en ligne sur notre plateforme. Notre plateforme est là dans le seul but de faciliter la communication entre vous et les clients potentiels.`
										) : (
											'At the moment, we do not accept online payments on our platform. Our platform is there with the only goal to facilitate communication between you and potential customers.'
										)}
									</p>
								</div>
							</li>

							<li>
								<a data-toggle="collapse" href="#faq5" className="collapsed">
									{lang === 'fr' ? (
										`Comment mettre en ligne un produit ou un service ?`
									) : (
										`How do upload a product or a service?`
									)}{' '}
									<i className="icofont-simple-up" />
								</a>
								<div id="faq5" className="collapse" data-parent=".faq-list">
									<p>
										{lang === 'fr' ? (
											`Il existe deux manières de mettre en ligne un produit ou un service sur notre plateforme. Vous pouvez soit créer un compte référent par vous-même et soumettre votre produit ou service. Ou utilisez notre plateforme pour trouver et contacter un référent existant situé dans votre commune qui peut vous aider dans l'ensemble de ce processus.`
										) : (
											'There are two ways to upload a product or service to our platform. You can either create a referent account by yourself and submit your product or service. Or use our platform to find and contact an existing referent located in your area who can help you with this entire process.'
										)}
									</p>
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
