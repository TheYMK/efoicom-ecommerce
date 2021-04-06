import React from 'react';
import Head from 'next/head';
import AdminDashboard from '../../components/admin/AdminDashboard';
import AdminProtected from '../../components/auth/AdminProtected';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/Layout';
import PageTop from '../../components/sections/PageTop';

const AdminDashboardPage = () => {
	const message = `Bievenue dans votre tableau de bord. En tant qu'administrateur, vous êtes la tour de contrôle de la plateforme. Vous contrôlez ses utilisateurs et son contenue.`;
	const head = () => (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
		</Head>
	);
	return (
		<React.Fragment>
			{head()}
			<Layout>
				<AdminProtected>
					<b className="screen-overlay" />
					<header className="section-header">
						<Header />
					</header>
					<PageTop title={'Tableau de bord administrateur'} message={message} />

					<AdminDashboard />
				</AdminProtected>
			</Layout>
		</React.Fragment>
	);
};

export default AdminDashboardPage;
