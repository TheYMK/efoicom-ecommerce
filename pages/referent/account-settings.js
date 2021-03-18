import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../../components/header/Header';
import Layout from '../../components/Layout';
import ReferentDashboard from '../../components/referent/ReferentDashboard';
import PageTop from '../../components/sections/PageTop';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../actions/auth';
import ReferentProtected from '../../components/auth/ReferentProtected';
import { toast } from 'react-toastify';
import ReferentMenu from '../../components/referent/ReferentMenu';
import ProductAndServiceSubmission from '../../components/referent/ProductAndServiceSubmission';
import EvaluationSection from '../../components/referent/EvaluationSection';
import ClientMessages from '../../components/referent/ClientMessages';
import ReferentAccountSettings from '../../components/referent/ReferentAccountSettings';

const ReferentAccountSettingsPage = () => {
	const { user } = useSelector((state) => ({ ...state }));
	const [ requestStatus, setRequestStatus ] = useState('');

	useEffect(
		() => {
			if (user && user.token) {
				getCurrentUser(user.token)
					.then((res) => {
						setRequestStatus(res.data.referent_account_approval);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		},
		[ user ]
	);

	const head = () => (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
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
					<PageTop title={'Mon profile référent'} />
					{requestStatus === 'approved' ? (
						<ReferentAccountSettings />
					) : (
						<EvaluationSection pageLocation="account_settings" />
					)}
				</ReferentProtected>
			</Layout>
		</React.Fragment>
	);
};

export default ReferentAccountSettingsPage;
