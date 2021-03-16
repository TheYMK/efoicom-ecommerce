import React from 'react';
import ClientAccountManagement from '../../components/admin/ClientAccountManagement';
import AdminProtected from '../../components/auth/AdminProtected';
import Header from '../../components/header/Header';
import Layout from '../../components/Layout';
import PageTop from '../../components/sections/PageTop';

const ClientAccountManagementPage = () => {
	return (
		<Layout>
			<AdminProtected>
				<b className="screen-overlay" />
				<header className="section-header">
					<Header />
				</header>
				<PageTop title={'Tableau de bord administrateur'} />
				<ClientAccountManagement />
			</AdminProtected>
		</Layout>
	);
};

export default ClientAccountManagementPage;
