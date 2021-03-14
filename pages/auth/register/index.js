import React from 'react';
import Register from '../../../components/auth/Register';
import Header from '../../../components/header/Header';
import Layout from '../../../components/Layout';

const RegisterPage = () => {
	return (
		<Layout>
			<header className="section-header">
				<Header />
			</header>
			<section className="section-content padding-y">
				<Register />
			</section>
		</Layout>
	);
};

export default RegisterPage;
