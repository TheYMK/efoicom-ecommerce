import React from 'react';
import Ad from '../components/ads/Ad';
import Deal from '../components/deal/Deal';
import Header from '../components/header/Header';
import Navbar from '../components/header/Navbar';
import Items from '../components/items/Items';
import Layout from '../components/Layout';
import Main from '../components/main/Main';
import Regions from '../components/regions/Regions';
import Request from '../components/request/Request';
import SectionOne from '../components/sections/SectionOne';
import SectionTwo from '../components/sections/SectionTwo';
import Services from '../components/services/Services';
import Subscribe from '../components/subscribe/Subscribe';

const HomePage = () => {
	return (
		<Layout>
			<b className="screen-overlay" />
			<header className="section-header">
				<Header />
				<Navbar />
			</header>
			<div className="container">
				<Main />
				<Deal />
				<SectionOne />
				<SectionTwo />
				<Request />
				<Items />
				<Services />
				<Regions />
				<Ad />
			</div>

			<Subscribe />
		</Layout>
	);
};

export default HomePage;
