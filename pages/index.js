import React from 'react';
import Head from 'next/head';
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
	const head = () => (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
		</Head>
	);

	return (
		<React.Fragment>
			{head()}
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
					{/* <Services /> */}
					<Regions />
					<Ad />
				</div>

				<Subscribe />
			</Layout>
		</React.Fragment>
	);
};

export default HomePage;
