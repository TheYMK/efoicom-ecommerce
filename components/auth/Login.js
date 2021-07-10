import React, { useEffect, useState } from 'react';
import { auth, googleAuthProvider } from '../../actions/firebase';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { REGISTER_REDIRECT_URL } from '../../config';
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { createOrUpdateUser, getCurrentUser } from '../../actions/auth';

const Login = () => {
	const [ values, setValues ] = useState({
		email: '',
		password: ''
	});

	const { email, password } = values;
	const { user, lang } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();
	const [ loading, setLoading ] = useState(false);

	const router = useRouter();
	const { from } = router.query;

	useEffect(
		() => {
			// check to see if we already have a user logged in
			if (user && user.token) {
				// gets the current user information so that if there is no value 'from' coming from previous location, it will redirect the user back to the appropriate private page
				getCurrentUser(user.token).then((res) => {
					if (router.query.from) {
						Router.push(`/${from}`);
					} else {
						if (res.data.role === 'sysadmin') {
							Router.push('/admin/dashboard');
						} else if (res.data.role === 'referent') {
							Router.push('/referent/profile');
						} else {
							Router.push('/customer/profile');
						}
					}
				});
			}
		},
		[ user ]
	);

	/**
	 * This function checks for the previous location of the user. If the value 'from' was passed from the previous location,
	 * user will be redirected back to that location.
	 * Or based on the role, the user will be redirected to appropriate private page.
	 * @param {*} res 
	 */
	const roleBasedRedirect = (res) => {
		if (router.query.from) {
			Router.push(`/${from}`);
		} else {
			if (res.data.role === 'sysadmin') {
				Router.push('/admin/dashboard');
			} else if (res.data.role === 'referent') {
				Router.push('/referent/profile');
			} else {
				Router.push('/customer/profile');
			}
		}
	};

	/**
	 * This function signs a user in to firebase, then using the token of that user, updates the redux store with the current logged in users' info.
	 * Then redirects that user to the appropriate private page
	 * @param {*} e 
	 */
	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);

		try {
			const result = await auth.signInWithEmailAndPassword(email, password);
			const { user } = result;

			const idTokenResult = await user.getIdTokenResult();

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
							? `'Karibu sur Bangwé La Massiwa. Nous vous souhaitons une agréable expérience sur notre plateforme.'`
							: `Karibu on Bangwé La Massiwa. We wish you a pleasant experience on our platform.`
					);
					setLoading(false);
					roleBasedRedirect(response);
				})
				.catch((err) => {
					setLoading(false);
					console.log(`----> Error occured during login process (=> /auth/login page): ${err}`);
				});
		} catch (err) {
			setLoading(false);
			console.log(`----> Error occured during login process (=> /auth/login page): ${err}`);
			toast.error(
				lang === 'fr'
					? `Email ou mot de passe non valide. Verifiez encore une fois vos information. Si vous n'avez pas de compte, assurez vous d'en créer un avant de vous connecter.`
					: `Invalid email or password. Double check your information. If you don't have an account, be sure to create one before signing in.`
			);
		}
	};

	// const googleLogin = async () => {
	// 	setLoading(true);
	// 	setValues({ ...values, loginWithGoogle: true });

	// 	auth
	// 		.signInWithPopup(googleAuthProvider)
	// 		.then(async (result) => {
	// 			const { user } = result;
	// 			const idTokenResult = await user.getIdTokenResult();
	// 			createOrUpdateUser(idTokenResult.token, values)
	// 				.then((response) => {
	// 					dispatch({
	// 						type: 'LOGGED_IN_USER',
	// 						payload: {
	// 							name: response.data.name,
	// 							email: response.data.email,
	// 							token: idTokenResult.token,
	// 							role: response.data.role,
	// 							_id: response.data._id
	// 						}
	// 					});
	// 					toast.success(
	// 						'Bienvenue sur Massiwa Market cher utilisateur. Nous vous souhaitons une agréable expérience avec nous.'
	// 					);
	// 					setLoading(false);
	// 					roleBasedRedirect(response);
	// 				})
	// 				.catch((err) => {
	// 					setLoading(false);
	// 					console.log(`Error occured during login process (=> /auth/login page): ${err}`);
	// 				});
	// 		})
	// 		.catch((err) => {
	// 			setLoading(false);
	// 			console.log(`Error occured during login process (=> /auth/login page): ${err}`);
	// 			toast.error('Email ou mot de passe non valide');
	// 		});
	// };

	return (
		<React.Fragment>
			<div className="card mx-auto" style={{ maxWidth: '380px', marginTop: '100px' }}>
				<div className="card-body">
					<h4 className="card-title mb-4">{lang === 'fr' ? 'Se connecter' : 'Sign in'}</h4>
					<form>
						{/* <a href="#" className="btn btn-facebook btn-block mb-2">
							{' '}
							<i className="fab fa-facebook-f" /> &nbsp; Sign in with Facebook
						</a> */}
						{/* <button className="btn btn-google btn-block mb-4" onClick={googleLogin}>
							{' '}
							<i className="fab fa-google" /> &nbsp; Se connecter avec Google
						</button> */}
						<div className="form-group">
							<input
								className="form-control"
								placeholder="Email"
								type="text"
								value={email}
								onChange={(e) => setValues({ ...values, email: e.target.value })}
								autoFocus
							/>
						</div>
						<div className="form-group">
							<input
								className="form-control"
								placeholder={lang === 'fr' ? 'Mot de passe' : 'Password'}
								type="password"
								value={password}
								onChange={(e) => setValues({ ...values, password: e.target.value })}
							/>
						</div>

						<div className="form-group">
							<Link href="/auth/password/forgot">
								<a className="float-right">
									{lang === 'fr' ? 'Mot de passe oublié ?' : 'Forgot password ?'}
								</a>
							</Link>
						</div>
						<div className="form-group">
							<button className="btn btn-primary btn-block" onClick={handleSubmit}>
								{lang === 'fr' ? loading ? (
									'En cours...'
								) : (
									'Se Connecter'
								) : loading ? (
									'Processing...'
								) : (
									'Sign in'
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
			<p className="text-center mt-4">
				{lang === 'fr' ? `Vous n'avez pas de compte ?` : `You don't have an account yet ?`}{' '}
				<Link href="/auth/register">
					<a style={{ color: '#FF914D' }}>
						<i className="fas fa-hand-point-right" />{' '}
						{lang === 'fr' ? `Enregistrez-vous ici` : 'Register here'}
					</a>
				</Link>
			</p>
			<br />
			<br />
			<br />
		</React.Fragment>
	);
};

export default Login;
