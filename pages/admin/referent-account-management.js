import React from 'react';
import ReferentAccountManagement from '../../components/admin/ReferentAccountManagement';
import Header from '../../components/header/Header';
import Layout from '../../components/Layout';
import PageTop from '../../components/sections/PageTop';

const ReferentAccountManagementPage = () => {
	return (
		<Layout>
			<b class="screen-overlay" />
			<header className="section-header">
				<Header />
			</header>
			<PageTop title={'Tableau de bord administrateur'} />
			<ReferentAccountManagement />
		</Layout>
	);
};

export default ReferentAccountManagementPage;
