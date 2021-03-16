import React, { useEffect, useState } from 'react';
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

const ClientMessagesPage = () => {
	const { user } = useSelector((state) => ({ ...state }));
	const [ isApproved, setIsApproved ] = useState(false);

	useEffect(
		() => {
			if (user && user.token) {
				getCurrentUser(user.token)
					.then((res) => {
						setIsApproved(res.data.referent_account_approval);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		},
		[ user ]
	);

	return (
		<Layout>
			<ReferentProtected>
				<b className="screen-overlay" />
				<header className="section-header">
					<Header />
				</header>
				<PageTop title={'Mon profile référent'} />
				{isApproved ? <ClientMessages /> : <EvaluationSection pageLocation="client_messages" />}
			</ReferentProtected>
		</Layout>
	);
};

export default ClientMessagesPage;
