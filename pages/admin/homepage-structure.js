import React from 'react';
import Head from 'next/head';
import HomePageStructure from '../../components/admin/HomePageStructure';
import AdminProtected from '../../components/auth/AdminProtected';
import Header from '../../components/header/Header';
import Layout from '../../components/Layout';
import PageTop from '../../components/sections/PageTop';

const HomePageStructurePage = () => {
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
					<HomePageStructure />
				</AdminProtected>
			</Layout>
		</React.Fragment>
	);
};

export default HomePageStructurePage;
