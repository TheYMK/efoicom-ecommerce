import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { auth } from '../../../actions/firebase';
import { toast } from 'react-toastify';
import Layout from '../../../components/Layout';
import { useDispatch } from 'react-redux';
import Header from '../../../components/header/Header';
import Link from 'next/link';
import Head from 'next/head';
import { createOrUpdateUser } from '../../../actions/auth';

const RegisterCompletePage = () => {
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
			toast.error('Les mots de passe doivent être identiques!');
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
				"Oops! Nous n'avons pas pu recupérer vos informations. Ceci peut être dû à plusieurs facteurs. Veuillez réessayer."
			);

			setLoading(false);

			return;
		}

		if (account_type === 'referent' && !reference_zone) {
			toast.error(
				"Oops! Nous n'avons pas pu recupérer vos informations. Ceci peut être dû à plusieurs facteurs. Veuillez réessayer."
			);

			setLoading(false);

			return;
		}

		if (password.length < 6) {
			toast.error('Votre mot de passe doit avoir au minimum 6 caractères.');
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
							'Karibu sur Bangwé La Massiwa. Nous vous souhaitons une agréable expérience sur notre plateforme.'
						);
					})
					.catch((err) => {
						console.log(
							`----> Error occured during registration completion process (=> /auth/complete page): ${err}`
						);
						toast.error(
							"Oops! une erreur s'est produite durant la création de votre compte. Veuillez réessayer! Contacter nous si le problème persiste."
						);
					});

				// redirect
				Router.push('/');
			}
		} catch (err) {
			setLoading(false);
			console.log(`----> Error occured during registration completion process (=> /auth/complete page): ${err}`);
			toast.error(
				"Oops! une erreur s'est produite durant la création de votre compte. Veuillez réessayer! Contacter nous si le problème persiste."
			);
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

				<section className="section-content padding-y">
					<div className="card mx-auto" style={{ maxWidth: '520px', marginTop: '40px' }}>
						<article className="card-body">
							<header className="mb-4">
								<h4 className="card-title">Complétez votre compte</h4>
								<small>
									Si les informations suivantes sont erronées, nous vous invitons à recommencer la
									procédure d'enregistrement en{' '}
									<Link href="/auth/register">
										<a style={{ color: '#ff914d' }}>cliquant ici</a>
									</Link>.
								</small>
							</header>
							<div className="mb-4">
								<p>
									Nom et Prénom:{' '}
									<strong>
										{first_name} {last_name}
									</strong>
								</p>
								<p>
									Email: <strong>{email}</strong>
								</p>
								<p>
									Tél: <strong>{phone_number}</strong>
								</p>
								{account_type &&
								account_type === 'customer' && (
									<p>
										Type de compte: <strong>Client</strong>
									</p>
								)}
								{account_type &&
								account_type === 'referent' && (
									<p>
										Type de compte: <strong>Référent</strong>
									</p>
								)}
								<p>
									Ville: <strong>{city}</strong>
								</p>
								<p>
									Île: <strong>{island}</strong>
								</p>
								<p>
									Adresse: <strong>{address}</strong>
								</p>
							</div>
							<form>
								<div className="form-row">
									<div className="col form-group">
										<label htmlFor="password">
											Mot de passe <span style={{ color: 'red' }}>*</span>
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
											Confirmer votre mot de passe <span style={{ color: 'red' }}>*</span>
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
										{loading ? 'En cours...' : 'Validation'}
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

export default RegisterCompletePage;
