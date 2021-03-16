import React from 'react';
import AdminDashboard from '../../components/admin/AdminDashboard';
import AdminProtected from '../../components/auth/AdminProtected';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/Layout';
import PageTop from '../../components/sections/PageTop';

const AdminDashboardPage = () => {
	return (
		<Layout>
			<AdminProtected>
				<b className="screen-overlay" />
				<header className="section-header">
					<Header />
				</header>
				<PageTop title={'Tableau de bord administrateur'} />
				<AdminDashboard />
			</AdminProtected>
		</Layout>
	);
};

export default AdminDashboardPage;
