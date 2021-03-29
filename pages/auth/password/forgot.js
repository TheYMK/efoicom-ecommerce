import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../../../components/header/Header';
import Layout from '../../../components/Layout';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { auth } from '../../../actions/firebase';
import Router from 'next/router';
import { FORGOT_PASSWORD_REDIRECT_URL } from '../../../config';

const ForgotPasswordPage = () => {
	const [ email, setEmail ] = useState('');
	const [ loading, setLoading ] = useState(false);

	const { user } = useSelector((state) => ({ ...state }));

	useEffect(
		() => {
			if (user && user.token) {
				Router.push('/');
			}
		},
		[ user ]
	);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const config = {
				url: FORGOT_PASSWORD_REDIRECT_URL,
				handleCodeInApp: true
			};
			const result = await auth.sendPasswordResetEmail(email, config);

			setEmail('');
			setLoading(false);

			toast.success(`Un email vous a été envoyer. Cliquer sur le lien pour reinitialiser votre mot de passe`);
		} catch (err) {
			setLoading(false);
			console.log(`Error occured during password reset process (=> /auth/password/forgot page): ${err}`);
			toast.error("Nous n'avons pas pu récupérer votre mot de passe. Veuillez réessayer!");
		}
	};

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
				<section className="section-content padding-y" style={{ minHeight: '84vh' }}>
					<div className="card mx-auto" style={{ maxWidth: '580px', marginTop: '100px' }}>
						<div className="card-body">
							<h4 className="card-title mb-4">Voulez-vous reinitialiser votre mot de passe ?</h4>
							<form>
								<div className="form-group">
									<input
										className="form-control"
										placeholder="Entrez votre adresse email ici"
										type="text"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										autoFocus
									/>
								</div>
								<div className="form-group">
									<button
										className="btn btn-primary btn-block"
										onClick={handleSubmit}
										disabled={!email}
									>
										{loading ? 'En cours....' : 'Reinitialiser votre mot de passe'}
									</button>
								</div>
							</form>
						</div>
					</div>
				</section>
			</Layout>
		</React.Fragment>
	);
};

export default ForgotPasswordPage;
