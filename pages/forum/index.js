import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/Layout';

const ForumPage = () => {
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
						<h2 className="title-page">Forum</h2>
					</div>
				</section>
				<section className="section-content bg-white padding-y">
					<div className="container" />
				</section>
			</Layout>
		</React.Fragment>
	);
};

export default ForumPage;
