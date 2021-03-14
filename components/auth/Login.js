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
	const { user } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();
	const [ loading, setLoading ] = useState(false);

	const router = useRouter();
	const { from } = router.query;

	useEffect(
		() => {
			if (user && user.token) {
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
						'Bienvenue sur Massiwa Market cher utilisateur. Nous vous souhaitons une agréable expérience avec nous.'
					);
					setLoading(false);
					roleBasedRedirect(response);
				})
				.catch((err) => {
					setLoading(false);
					console.log(`Error occured during login process (=> /auth/login page): ${err}`);
				});
		} catch (err) {
			setLoading(false);
			console.log(`Error occured during login process (=> /auth/login page): ${err}`);
			toast.error('Email ou mot de passe non valide');
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
					<h4 className="card-title mb-4">Connexion</h4>
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
								placeholder="Mot de passe"
								type="password"
								value={password}
								onChange={(e) => setValues({ ...values, password: e.target.value })}
							/>
						</div>

						<div className="form-group">
							<Link href="/auth/password/forgot">
								<a className="float-right">Mot de passe oublié?</a>
							</Link>
						</div>
						<div className="form-group">
							<button className="btn btn-primary btn-block" onClick={handleSubmit}>
								{loading ? 'En cours...' : 'Se Connecter'}
							</button>
						</div>
					</form>
				</div>
			</div>
			<p className="text-center mt-4">
				Vous n'avez pas de compte?{' '}
				<Link href="/auth/register">
					<a>Enregistrez vous</a>
				</Link>
			</p>
			<br />
			<br />
			<br />
		</React.Fragment>
	);
};

export default Login;
