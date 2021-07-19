import React from 'react';
import Head from 'next/head';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/Layout';
import VideoPlayer from '../../components/videoplayer/VideoPlayer';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const HowToBecomeReferentPage = ({ router }) => {
	const { lang } = useSelector((state) => ({ ...state }));

	const head = () => (
		<Head>
			<title>Bangwé La Massiwa | {lang === 'fr' ? 'Aide' : 'Help'}</title>
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
						<h2 className="title-page">
							{lang === 'fr' ? 'Vous souhaitez devenir un référent ?' : 'Would you like to be a referent ?'}
						</h2>
					</div>
				</section>
				<section className="section-content bg-white padding-y">
					<div className="container pure-text">
						<div className="row">
							{/* <div className="col-md-6">
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
							</div> */}
							<div className="col-md-12">
								<h5 className="card-title">{lang === 'fr' ? `Qu’est-ce qu’un référent ?` : 'What is a referent ?'}</h5>
								<p>
									{lang === 'fr' ? (
										`Le référent est la personne qui sera chargée de mettre en ligne les produits ou services situés dans
									la commune qu’il aura choisi. Il est responsable de la mise en relation entre les clients et les
									fournisseurs de ces produits ou les prestataires de ces services.`
									) : (
										'A referent is the person who will be responsible for putting online products or services located in the region or municipality of their choice. He is responsible for putting customers in touch with the suppliers of these products or the providers of these services.'
									)}
								</p>
								<h5 className="card-title">
									{lang === 'fr' ? 'Comment devenir référent ?' : 'How to become a referent ?'}
								</h5>
								<p>
									{lang === 'fr' ? (
										`C’est très simple! Vous vivez par exemple à Moroni et souhaitez mettre en avant les services des
									entrepreneurs de votre commune. Tout ce que vous avez à faire c’est de vous créer un compte de type
									référent sur la plateforme Bangwé la Massiwa. Ce compte sera soumis à une vérification de notre part.
									Après la vérification vous aurez accès aux fonctionnalités suivantes :`
									) : (
										'It is very simple! For example, you live in Moroni and want to put online products or services of entrepreneurs in your region. All you have to do is create a referent type account on the Bangwé la Massiwa platform. This account will be subject to verification by our team. After verification you will be granted access to the following features:'
									)}{' '}
									<br />
									<br />-{' '}
									{lang === 'fr' ? (
										`Mise en ligne des produits ou services se trouvant dans votre commune.`
									) : (
										'Uploading products and services.'
									)}
									<br />
									-{' '}
									{lang === 'fr' ? (
										`Prise de contact avec des potentiels clients intéréssés par vos produits ou services`
									) : (
										'Making contact with potential customers interested in your products or services'
									)}.
								</p>
								<Link href="/auth/register">
									<a className="btn btn-primary rounded-pill">
										{lang === 'fr' ? (
											`Créer votre compte sans plus tarder`
										) : (
											'Create your account without further delay'
										)}
									</a>
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

export default withRouter(HowToBecomeReferentPage);
