import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { auth } from '../../../actions/firebase';
import { toast } from 'react-toastify';
import Layout from '../../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../components/header/Header';
import Link from 'next/link';
import Head from 'next/head';
import { DOMAIN, FB_APP_ID } from '../../../config';
import { withRouter } from 'next/router';
import { createOrUpdateUser } from '../../../actions/auth';

const RegisterCompletePage = ({ router }) => {
	const { lang } = useSelector((state) => ({ ...state }));

	const head = () => (
		<Head>
			<title>Bangwé La Massiwa | {lang === 'fr' ? 'Sécurisez votre compte' : 'Secure your account'}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta
				name="description"
				content="Bangwé La Massiwa est un marché national en ligne, où les gens se retrouvent pour fabriquer, vendre, acheter et collectionner des articles uniques."
			/>
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta property="og:title" content={`Soutenons les créateurs indépendants`} />
			<meta
				property="og:description"
				content="Bangwé La Massiwa est un marché national en ligne, où les gens se retrouvent pour fabriquer, vendre, acheter et collectionner des articles uniques."
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
			<meta property="og:site_name" content="Bangwé La Massiwa" />
			<meta property="og:image" content={`${DOMAIN}/static/images/seo.png`} />
			<meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seo.png`} />
			<meta property="og:image:type" content="image/png" />
			<meta property="fb:app_id" content={`${FB_APP_ID}`} />
		</Head>
	);

	const [ values, setValues ] = useState({
		first_name: '',
		last_name: '',
		email: '',
		phone_number: '',
		account_type: '',
		city: '',
		island: '',
		address: '',
		password: '',
		password_confirm: '',
		reference_zone: ''
	});

	const dispatch = useDispatch();

	const [ loading, setLoading ] = useState(false);

	const {
		first_name,
		last_name,
		email,
		phone_number,
		password,
		account_type,
		city,
		island,
		address,
		password_confirm,
		reference_zone
	} = values;

	useEffect(() => {
		// check if we at least have one field existing in the local storage. I'm assuming here that if one is there, others should also be there.
		if (window && window.localStorage.getItem('emailToRegister') !== null) {
			setValues({
				...values,
				first_name: window.localStorage.getItem('firstNameToRegister'),
				last_name: window.localStorage.getItem('lastNameToRegister'),
				email: window.localStorage.getItem('emailToRegister'),
				phone_number: window.localStorage.getItem('phoneNumberToRegister'),
				account_type: window.localStorage.getItem('accountTypeToRegister'),
				city: window.localStorage.getItem('cityToRegister'),
				island: window.localStorage.getItem('islandToRegister'),
				address: window.localStorage.getItem('addressToRegister'),
				reference_zone: window.localStorage.getItem('referenceZoneToRegister')
			});
		} else {
			Router.push('/auth/register');
		}
	}, []);

	/**
	 * This function first cleans up the local storage, then signs the user in firebase and save this user to the database.
	 * @param {*} e 
	 * @returns 
	 */
	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);

		// check if passwords match
		if (password !== password_confirm) {
			toast.error(lang === 'fr' ? 'Les mots de passe doivent être identiques !' : 'Passwords must be identical!');
			setLoading(false);
			return;
		}
		// check if fields are empty
		if (
			!first_name ||
			!last_name ||
			!email ||
			!phone_number ||
			!password ||
			!account_type ||
			!city ||
			!island ||
			!address
		) {
			toast.error(
				lang === 'fr'
					? "Oops! Nous n'avons pas pu recupérer vos informations. Ceci peut être dû à plusieurs facteurs. Veuillez réessayer."
					: 'Oops! We were unable to retrieve your information. This can be due to several factors. Try Again.'
			);

			setLoading(false);

			return;
		}

		if (account_type === 'referent' && !reference_zone) {
			toast.error(
				lang === 'fr'
					? "Oops! Nous n'avons pas pu recupérer vos informations. Ceci peut être dû à plusieurs facteurs. Veuillez réessayer."
					: 'Oops! We were unable to retrieve your information. This can be due to several factors. Try Again.'
			);

			setLoading(false);

			return;
		}

		if (password.length < 6) {
			toast.error(
				lang === 'fr'
					? 'Votre mot de passe doit avoir au minimum 6 caractères.'
					: 'Your password must be at least 6 characters long.'
			);
			setLoading(false);
			return;
		}

		try {
			// Signs the user
			const result = await auth.signInWithEmailLink(email, window.location.href);

			if (result.user.emailVerified) {
				// remove user info from local storage
				window.localStorage.removeItem('firstNameToRegister');
				window.localStorage.removeItem('lastNameToRegister');
				window.localStorage.removeItem('emailToRegister');
				window.localStorage.removeItem('phoneNumberToRegister');
				window.localStorage.removeItem('accountTypeToRegister');
				window.localStorage.removeItem('cityToRegister');
				window.localStorage.removeItem('islandToRegister');
				window.localStorage.removeItem('addressToRegister');
				window.localStorage.removeItem('referenceZoneToRegister');

				let user = auth.currentUser;
				await user.updatePassword(password);
				// get user id token
				const idTokenResult = await user.getIdTokenResult();

				// save to DB and redux store
				createOrUpdateUser(idTokenResult.token, values)
					.then((response) => {
						dispatch({
							type: 'LOGGED_IN_USER',
							payload: {
								name: response.data.name,
								email: response.data.email,
								token: idTokenResult.token,
								role: response.data.role,
								_id: response.data._id
							}
						});
						toast.success(
							lang === 'fr'
								? 'Karibu sur Bangwé La Massiwa. Nous vous souhaitons une agréable expérience sur notre plateforme.'
								: 'Karibu on Bangwé La Massiwa. We wish you a pleasant experience on our platform.'
						);
					})
					.catch((err) => {
						console.log(
							`----> Error occured during registration completion process (=> /auth/complete page): ${err}`
						);
						toast.error(
							lang === 'fr'
								? "Oops! une erreur s'est produite durant la création de votre compte. Veuillez réessayer! Contacter nous si le problème persiste."
								: 'Oops! an error occurred while creating your account. Try Again! Contact us if the problem persists.'
						);
					});

				// redirect
				Router.push('/');
			}
		} catch (err) {
			setLoading(false);
			console.log(`----> Error occured during registration completion process (=> /auth/complete page): ${err}`);
			toast.error(
				lang === 'fr'
					? "Oops! une erreur s'est produite durant la création de votre compte. Veuillez réessayer! Contacter nous si le problème persiste."
					: 'Oops! an error occurred while creating your account. Try Again! Contact us if the problem persists.'
			);
		}
	};

	return (
		<React.Fragment>
			{head()}
			<Layout>
				<header className="section-header">
					<Header />
				</header>

				<section className="section-content padding-y">
					<div className="card mx-auto" style={{ maxWidth: '520px', marginTop: '40px' }}>
						<article className="card-body">
							<header className="mb-4">
								<h4 className="card-title">
									{lang === 'fr' ? 'Sécuriser votre compte' : 'Secure your account'}
								</h4>
								<small>
									{lang === 'fr' ? (
										`Si les informations suivantes sont erronées, nous vous invitons à recommencer la
									procédure d'enregistrement en`
									) : (
										'If the following informations are incorrect, we invite you to start the registration procedure again by'
									)}{' '}
									<Link href="/auth/register">
										<a style={{ color: '#ff914d' }}>
											{lang === 'fr' ? 'cliquant ici' : 'clicking here'}
										</a>
									</Link>.
								</small>
							</header>
							<div className="mb-4">
								<p>
									{lang === 'fr' ? 'Nom et Prénom' : 'Full name'}:{' '}
									<strong>
										{first_name} {last_name}
									</strong>
								</p>
								<p>
									Email: <strong>{email}</strong>
								</p>
								<p>
									{lang === 'fr' ? 'Tél' : 'Phone number'}: <strong>{phone_number}</strong>
								</p>
								{account_type &&
								account_type === 'customer' && (
									<p>
										{lang === 'fr' ? 'Type de compte' : 'Account type'}:{' '}
										<strong>{lang === 'fr' ? 'Client' : 'Customer'}</strong>
									</p>
								)}
								{account_type &&
								account_type === 'referent' && (
									<p>
										{lang === 'fr' ? 'Type de compte' : 'Account type'}:{' '}
										<strong>{lang === 'fr' ? 'Référent' : 'Referent'}</strong>
									</p>
								)}
								<p>
									{lang === 'fr' ? 'Ville' : 'City'}: <strong>{city}</strong>
								</p>
								<p>
									{lang === 'fr' ? 'Île' : 'Island'}: <strong>{island}</strong>
								</p>
								<p>
									{lang === 'fr' ? 'Adresse' : 'Address'}: <strong>{address}</strong>
								</p>
							</div>
							<form>
								<div className="form-row">
									<div className="col form-group">
										<label htmlFor="password">
											{lang === 'fr' ? 'Mot de passe' : 'Password'}{' '}
											<span style={{ color: 'red' }}>*</span>
										</label>
										<input
											type="password"
											className="form-control"
											id="password"
											placeholder="••••••••••••"
											required
											value={password}
											onChange={(e) => setValues({ ...values, password: e.target.value })}
										/>
									</div>
									<div className="col form-group">
										<label htmlFor="password_confirm">
											{lang === 'fr' ? (
												'Confirmer votre mot de passe'
											) : (
												'Confirm your password'
											)}{' '}
											<span style={{ color: 'red' }}>*</span>
										</label>
										<input
											type="password"
											className="form-control"
											placeholder="••••••••••••"
											id="password_confirm"
											required
											value={password_confirm}
											onChange={(e) => setValues({ ...values, password_confirm: e.target.value })}
										/>
									</div>
								</div>
								<div className="form-group">
									<button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>
										{lang === 'fr' ? loading ? (
											'En cours...'
										) : (
											'Validation'
										) : loading ? (
											'Processing...'
										) : (
											'Validate'
										)}
									</button>
								</div>
							</form>
						</article>
					</div>
				</section>
			</Layout>
		</React.Fragment>
	);
};

export default withRouter(RegisterCompletePage);
