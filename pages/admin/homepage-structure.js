import React from 'react';
import HomePageStructure from '../../components/admin/HomePageStructure';
import Header from '../../components/header/Header';
import Layout from '../../components/Layout';
import PageTop from '../../components/sections/PageTop';

const HomePageStructurePage = () => {
	return (
		<Layout>
			<b class="screen-overlay" />
			<header className="section-header">
				<Header />
			</header>
			<PageTop title={'Tableau de bord administrateur'} />
			<HomePageStructure />
		</Layout>
	);
};

export default HomePageStructurePage;
