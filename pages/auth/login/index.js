import React from 'react';
import Head from 'next/head';
import { DOMAIN, FB_APP_ID } from '../../../config';
import { withRouter } from 'next/router';
import Login from '../../../components/auth/Login';
import Header from '../../../components/header/Header';
import Navbar from '../../../components/header/Navbar';
import Layout from '../../../components/Layout';

const LoginPage = ({ router }) => {
	const head = () => (
		<Head>
			<title>Bangwé La Massiwa | Se connecter</title>
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
				<header className="section-header">
					<Header />
				</header>
				<section className="section-content padding-y" style={{ minHeight: '84vh' }}>
					<Login />
				</section>
			</Layout>
		</React.Fragment>
	);
};

export default withRouter(LoginPage);
