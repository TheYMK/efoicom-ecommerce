import React from 'react';
import Head from 'next/head';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/Layout';
import VideoPlayer from '../../components/videoplayer/VideoPlayer';
import Link from 'next/link';

const HowToUploadItemsPage = ({ router }) => {
	const head = () => (
		<Head>
			<title>Bangwé La Massiwa | Aide</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta
				name="description"
				content="Bangwé La Massiwa est un marché national en ligne, où les gens se retrouvent pour fabriquer, vendre, acheter et collectionner des articles uniques."
			/>
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta property="og:title" content={`Soutenons les créateurs indépendants`} />
			<meta
				property="og:description"
				content="Bangwé La Massiwa est un marché national en ligne, où les gens se retrouvent pour fabriquer, vendre, acheter et collectionner des articles uniques."
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
			<meta property="og:site_name" content="Bangwé La Massiwa" />
			<meta property="og:image" content={`${DOMAIN}/static/images/seo.png`} />
			<meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seo.png`} />
			<meta property="og:image:type" content="image/png" />
			<meta property="fb:app_id" content={`${FB_APP_ID}`} />
		</Head>
	);

	return (
		<React.Fragment>
			{head()}
			<Layout>
				<b className="screen-overlay" />
				<header className="section-header">
					<Header />
					<Navbar />
				</header>
				<section className="section-pagetop bg-light">
					<div className="container">
						<h2 className="title-page">Vous souhaitez mettre en ligne un produit ou un service ?</h2>
					</div>
				</section>
				<section className="section-content bg-white padding-y">
					<div className="container pure-text">
						<div className="row">
							<div className="col-md-6">
								<VideoPlayer
									className="react-player"
									url={
										'https://www.youtube.com/watch?v=BNeIHX8oueU&ab_channel=GreenScreenchromakeynocopyright'
									}
									controls={true}
									w={'100%'}
									h={'400px'}
									light={true}
									pip={true}
									muted={false}
								/>
							</div>
							<div className="col-md-6">
								<h5 className="card-title">Qu’est-ce qu’un référent ?</h5>
								<p>
									Le référent est la personne qui sera chargée de mettre en ligne les produits ou
									services situés dans le lieu qu’il aura choisi (région, ville, quartier). Il est
									responsable de la mise en relation entre les clients et les fournisseurs de ces
									produits ou les prestataires de ces services.
								</p>
								<h5 className="card-title">Comment devenir référent ?</h5>
								<p>
									C’est très simple ! Si par exemple vous vivez à Moroni et souhaitez mettre en avant
									les services des entrepreneurs de votre ville, votre quartier ou votre région. Tout
									ce que vous avez à faire c’est de vous créer un compte de type référent sur la
									plateforme Bangwé la Massiwa. Ce compte sera soumis à une vérification de notre
									part. Après la vérification vous aurez accès aux fonctionnalités suivantes : <br />
									<br />- Mise en ligne des produits ou services se trouvant dans votre zone de
									référence.<br />
									- Prise de contact avec des potentiels clients intéréssés par vos produits ou
									services.
								</p>
								<Link href="/auth/register">
									<a className="btn btn-primary rounded-pill">Créer votre compte sans plus tarder</a>
								</Link>
							</div>
						</div>

						<br />
						<br />
					</div>
				</section>
			</Layout>
		</React.Fragment>
	);
};

export default withRouter(HowToUploadItemsPage);
