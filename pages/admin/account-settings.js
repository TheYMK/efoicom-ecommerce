import React from 'react';
import AdminAccountSettings from '../../components/admin/AdminAccountSettings';
import Header from '../../components/header/Header';
import Layout from '../../components/Layout';
import PageTop from '../../components/sections/PageTop';

const AdminAccountSettingsPage = () => {
	return (
		<Layout>
			<b class="screen-overlay" />
			<header className="section-header">
				<Header />
			</header>
			<PageTop title={'Tableau de bord administrateur'} />
			<AdminAccountSettings />
		</Layout>
	);
};

export default AdminAccountSettingsPage;
