import React from 'react';
import Login from '../../../components/auth/Login';
import Header from '../../../components/header/Header';
import Navbar from '../../../components/header/Navbar';
import Layout from '../../../components/Layout';

const LoginPage = () => {
	return (
		<Layout>
			<header className="section-header">
				<Header />
			</header>
			<section className="section-content padding-y" style={{ minHeight: '84vh' }}>
				<Login />
			</section>
		</Layout>
	);
};

export default LoginPage;
