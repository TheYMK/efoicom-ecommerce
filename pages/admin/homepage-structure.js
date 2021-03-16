import React from 'react';
import HomePageStructure from '../../components/admin/HomePageStructure';
import AdminProtected from '../../components/auth/AdminProtected';
import Header from '../../components/header/Header';
import Layout from '../../components/Layout';
import PageTop from '../../components/sections/PageTop';

const HomePageStructurePage = () => {
	return (
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
	);
};

export default HomePageStructurePage;
