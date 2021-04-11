import React from 'react';
import Head from 'next/head';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/Layout';
import PageTop from '../../components/sections/PageTop';
import CustomerProtected from '../../components/auth/CustomerProtected';
import CustomerDashboard from '../../components/customer/CustomerDashboard';

const CustomerProfilePage = () => {
	const message = `Bievenue dans votre profile client.`;
	const head = () => (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
		</Head>
	);
	return (
		<React.Fragment>
			{head()}
			<Layout>
				<CustomerProtected>
					<b className="screen-overlay" />
					<header className="section-header">
						<Header />
					</header>
					<PageTop title={'Mon profile client'} message={message} />

					<CustomerDashboard />
				</CustomerProtected>
			</Layout>
		</React.Fragment>
	);
};

export default CustomerProfilePage;
