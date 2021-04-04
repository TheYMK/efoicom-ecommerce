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
import Annoucements from '../components/annoucements/Annoucements';
import OurCategories from '../components/ourCategories/OurCategories';
import { getCategories } from '../actions/category';

const HomePage = ({ allCategories }) => {
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
				<Main />
				<div className="container mt-0">
					<OurCategories allCategories={allCategories} />
					<Deal />
					{/* <SectionOne />
					<SectionTwo /> */}
					<Request />
					<Items />
					<Annoucements />
					<Services />
					{/* <Regions /> */}
					{/* <Ad /> */}
				</div>

				<Subscribe />
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getCategories().then((res) => {
		return {
			props: {
				allCategories: res.data
			}
		};
	});
}

export default HomePage;
