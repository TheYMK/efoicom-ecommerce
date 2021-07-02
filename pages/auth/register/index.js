import React from 'react';
import Head from 'next/head';
import { DOMAIN, FB_APP_ID } from '../../../config';
import { withRouter } from 'next/router';
import Register from '../../../components/auth/Register';
import Header from '../../../components/header/Header';
import Layout from '../../../components/Layout';
import VideoPlayer from '../../../components/videoplayer/VideoPlayer';

const RegisterPage = ({ router }) => {
	const head = () => (
		<Head>
			<title>Bangwé La Massiwa | S'enregistrer</title>
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
				<section className="section-content padding-y" style={{ overflow: 'hidden' }}>
					<div className="row">
						<div className="col-md-6">
							<div className="container mt-5">
								<h5>
									<i className="fas fa-question-circle" /> Comment s'enregistrer?
								</h5>
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
						</div>
						<div className="col-md-6">
							<Register />
						</div>
					</div>
				</section>
			</Layout>
		</React.Fragment>
	);
};

export default withRouter(RegisterPage);
