import React from 'react';
import ReferentAccountManagement from '../../components/admin/ReferentAccountManagement';
import AdminProtected from '../../components/auth/AdminProtected';
import Header from '../../components/header/Header';
import Layout from '../../components/Layout';
import PageTop from '../../components/sections/PageTop';

const ReferentAccountManagementPage = () => {
	return (
		<Layout>
			<AdminProtected>
				<b className="screen-overlay" />
				<header className="section-header">
					<Header />
				</header>
				<PageTop title={'Tableau de bord administrateur'} />
				<ReferentAccountManagement />
			</AdminProtected>
		</Layout>
	);
};

export default ReferentAccountManagementPage;
