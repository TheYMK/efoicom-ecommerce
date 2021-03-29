import React from 'react';
import Head from 'next/head';
import AdminProtected from '../../../components/auth/AdminProtected';
import Header from '../../../components/header/Header';
import Layout from '../../../components/Layout';
import PageTop from '../../../components/sections/PageTop';
import CategoriesAndSubsManagement from '../../../components/admin/CategoriesAndSubsManagement';

const CategoriesAndSubsManagementPage = () => {
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
					<PageTop title={'Tableau de bord administrateur'} />
					<CategoriesAndSubsManagement />
				</AdminProtected>
			</Layout>
		</React.Fragment>
	);
};

export default CategoriesAndSubsManagementPage;
