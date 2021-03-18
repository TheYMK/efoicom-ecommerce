import React from 'react';
import Head from 'next/head';
import Register from '../../../components/auth/Register';
import Header from '../../../components/header/Header';
import Layout from '../../../components/Layout';

const RegisterPage = () => {
	const head = () => (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
		</Head>
	);
	return (
		<React.Fragment>
			{head()}
			<Layout>
				<header className="section-header">
					<Header />
				</header>
				<section className="section-content padding-y">
					<Register />
				</section>
			</Layout>
		</React.Fragment>
	);
};

export default RegisterPage;
