import React from 'react';
import FAQ from '../../components/faq/faq';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/Layout';

const FaqPage = () => {
	return (
		<React.Fragment>
			<Layout>
				<b className="screen-overlay" />
				<header className="section-header">
					<Header />
					<Navbar />
				</header>
				<section className="section-pagetop bg-light">
					<div className="container">
						<h2 className="title-page">Foire aux questions</h2>
					</div>
				</section>
				<section className="section-content bg-white padding-y">
					<FAQ />
				</section>
			</Layout>
		</React.Fragment>
	);
};

export default FaqPage;
