import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';
import Header from '../../components/header/Header';
import Layout from '../../components/Layout';
import ReferentDashboard from '../../components/referent/ReferentDashboard';
import PageTop from '../../components/sections/PageTop';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../actions/auth';
import ReferentProtected from '../../components/auth/ReferentProtected';
import { toast } from 'react-toastify';
import ReferentMenu from '../../components/referent/ReferentMenu';
import EvaluationSection from '../../components/referent/EvaluationSection';

const ReferentProfilePage = ({ router }) => {
	const { user } = useSelector((state) => ({ ...state }));
	const [ requestStatus, setRequestStatus ] = useState('');
	const message = `Bienvenue sur votre tableau de bord référent. Vous souhaitez mettre en ligne vos produits/services ou ceux d'autres entrepreneurs de votre commune? C'est ici que tout commence. Soumettez vos articles sans plus attendre.`;

	useEffect(
		() => {
			if (user && user.token) {
				getCurrentUser(user.token)
					.then((res) => {
						setRequestStatus(res.data.referent_account_approval);
					})
					.catch((err) => {
						console.log(`----> Failed to get current user: {Error: ${err}`);
					});
			}
		},
		[ user ]
	);

	const head = () => (
		<Head>
			<title>Bangwé La Massiwa | Mon profile référent</title>
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
				<ReferentProtected>
					<b className="screen-overlay" />
					<header className="section-header">
						<Header />
					</header>
					<PageTop title={'Mon profil référent'} message={message} />
					{requestStatus === 'approved' ? (
						<ReferentDashboard />
					) : (
						<EvaluationSection pageLocation="dashboard" />
					)}
				</ReferentProtected>
			</Layout>
		</React.Fragment>
	);
};

export default withRouter(ReferentProfilePage);
