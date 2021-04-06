import React, { useEffect, useState } from 'react';
import AdminMenu from './AdminMenu';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../../actions/auth';
import { updateAdminUserAccount, updateAdminPassword } from '../../actions/user';
import firebase from 'firebase';
import Router from 'next/router';

import { toast } from 'react-toastify';
import PasswordChangeDialog from '../dialogs/PasswordChangeDialog';

const AdminAccountSettings = () => {
	const [ values, setValues ] = useState({
		name: '',
		email: ''
	});
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ open, setOpen ] = useState(false);
	const dispatch = useDispatch();
	const [ loading, setLoading ] = useState(false);
	const { user } = useSelector((state) => ({ ...state }));

	const { name, email } = values;

	useEffect(() => {
		if (user && user.token) {
			loadUserInfo();
		}
	}, []);

	// Loads the current user informations
	const loadUserInfo = () => {
		getCurrentUser(user.token)
			.then((res) => {
				setValues({ ...values, name: res.data.name, email: res.data.email });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleAccountUpdate = (e) => {
		e.preventDefault();

		if (!name || !email) {
			return;
		}

		if (user && user.token) {
			setLoading(true);

			updateAdminUserAccount(user.token, name, email)
				.then((res) => {
					logout();
					toast.success(
						'Vos informations ont été modifier. Par securité, vous devez vous reconnecter à nouveau'
					);
					setLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
					toast.error(`Oops! les informations renseignés sont erronés ou existe déjà. Veuillez réessayer`);
				});
		}
	};

	const logout = () => {
		firebase.auth().signOut();

		dispatch({
			type: 'LOGOUT',
			payload: null
		});
		setTimeout(() => {
			Router.push('/auth/login');
		}, 2000);
	};

	const handleCloseDialog = () => {
		setOpen(false);
	};

	const handlePasswordChange = (e) => {
		e.preventDefault();

		setOpen(true);
	};

	const handlePasswordSubmit = () => {
		if (password.length < 6) {
			toast.error('Votre mot de passe doit avoir au minimum 6 caractères');
			return;
		}

		if (password !== confirmPassword) {
			toast.error('Les mots de passe doivent être identique');
			return;
		}

		if (user && user.token) {
			setLoading(true);
			updateAdminPassword(user.token, password)
				.then((res) => {
					logout();
					toast.success('Votre mot de passe a bien été mis à jour');
					setLoading(false);
					setOpen(false);

					setPassword('');
					setConfirmPassword('');
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
					toast.error(`Oops! Votre mot de passe n'a pas été modifier. Veuillez réessayer`);
				});
		}
	};

	return (
		<React.Fragment>
			<PasswordChangeDialog
				open={open}
				handleClose={handleCloseDialog}
				password={password}
				setPassword={setPassword}
				confirmPassword={confirmPassword}
				setConfirmPassword={setConfirmPassword}
				loading={loading}
				handlePasswordSubmit={handlePasswordSubmit}
			/>
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<AdminMenu pageLocation="account_settings" />
						</aside>
						<main className="col-md-9">
							<div className="card">
								<div className="card-body">
									<form className="row">
										<div className="col-md-9">
											<div className="form-row">
												<div className="col form-group">
													<label htmlFor="name">Nom & Prénom</label>
													<input
														id="name"
														type="text"
														className="form-control"
														value={name}
														onChange={(e) => setValues({ ...values, name: e.target.value })}
													/>
												</div>
												<div className="col form-group">
													<label htmlFor="email">Email</label>
													<input
														id="email"
														type="email"
														className="form-control"
														value={email}
														onChange={(e) =>
															setValues({ ...values, email: e.target.value })}
													/>
												</div>
											</div>

											<button
												className="btn btn-primary"
												onClick={handleAccountUpdate}
												disabled={!name || !email}
											>
												{loading ? 'En cours...' : 'Sauvegarder'}
											</button>
											<button className="btn btn-light ml-3" onClick={handlePasswordChange}>
												Changer votre mot de passe
											</button>

											<br />
											<br />
											<br />
											<br />
											<br />
											<br />
										</div>
									</form>
								</div>
							</div>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default AdminAccountSettings;
