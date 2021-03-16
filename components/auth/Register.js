import React, { useState, useEffect } from 'react';
import { auth } from '../../actions/firebase';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { REGISTER_REDIRECT_URL } from '../../config';
import Link from 'next/link';

const Register = () => {
	const [ values, setValues ] = useState({
		first_name: '',
		last_name: '',
		email: '',
		phone_number: '',
		account_type: '',
		city: '',
		island: '',
		address: ''
	});

	const { user } = useSelector((state) => ({ ...state }));

	const [ loading, setLoading ] = useState(false);

	const [ termsAndConditionsAccepted, setTermsAndConditionsAccepted ] = useState(false);

	const { first_name, last_name, email, phone_number, account_type, city, island, address } = values;

	useEffect(
		() => {
			if (user && user.token) {
				Router.push('/');
			}
		},
		[ user ]
	);

	const handleTermsAndConditionsCheck = (e) => {
		setTermsAndConditionsAccepted(e.target.checked);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			first_name === '' ||
			last_name === '' ||
			email === '' ||
			phone_number === '' ||
			account_type === '' ||
			city === '' ||
			island === '' ||
			address === ''
		) {
			toast.error('Veuillez remplir tous les champs avant de vous enregistrer');
			return;
		}

		setLoading(true);

		try {
			const config = {
				url: REGISTER_REDIRECT_URL,
				handleCodeInApp: true
			};

			await auth.sendSignInLinkToEmail(email, config);

			toast.success(
				`Un email de confirmation vous a été envoyer. Clickez sur le lien pour completer votre enregistrement.`
			);

			// save user info to local storage
			window.localStorage.setItem('firstNameToRegister', first_name);
			window.localStorage.setItem('lastNameToRegister', last_name);
			window.localStorage.setItem('emailToRegister', email);
			window.localStorage.setItem('phoneNumberToRegister', phone_number);
			window.localStorage.setItem('accountTypeToRegister', account_type);
			window.localStorage.setItem('cityToRegister', city);
			window.localStorage.setItem('islandToRegister', island);
			window.localStorage.setItem('addressToRegister', address);

			setValues({
				first_name: '',
				last_name: '',
				email: '',
				phone_number: '',
				account_type: '',
				city: '',
				island: '',
				address: ''
			});
			setLoading(false);
		} catch (err) {
			setLoading(false);
			console.log(`Error occured during registration process (=> /auth/register page): ${err}`);
			toast.error("Oops une erreur s'est produite durant la création de votre compte. Veuillez réessayer!");
		}
	};

	return (
		<React.Fragment>
			<div className="card mx-auto" style={{ maxWidth: '520px', marginTop: '40px' }}>
				<article className="card-body">
					<header className="mb-4">
						<h4 className="card-title">S'enregistrer</h4>
					</header>
					<form>
						<div className="form-row">
							<div className="col form-group">
								<label htmlFor="first_name">
									Prenom <span style={{ color: 'red' }}>*</span>
								</label>
								<input
									type="text"
									className="form-control"
									id="first_name"
									placeholder="John"
									required
									value={first_name}
									onChange={(e) => setValues({ ...values, first_name: e.target.value })}
								/>
							</div>
							<div className="col form-group">
								<label htmlFor="last_name">
									Nom <span style={{ color: 'red' }}>*</span>
								</label>
								<input
									type="text"
									className="form-control"
									placeholder="Doe"
									id="last_name"
									required
									value={last_name}
									onChange={(e) => setValues({ ...values, last_name: e.target.value })}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="col form-group">
								<label htmlFor="email">
									Email <span style={{ color: 'red' }}>*</span>
								</label>
								<input
									type="email"
									className="form-control"
									id="email"
									placeholder="johndoe@xxxx.xx"
									required
									value={email}
									onChange={(e) => setValues({ ...values, email: e.target.value })}
								/>
								{/* <small className="form-text text-muted">
								We'll never share your email with anyone else.
							</small> */}
							</div>
							<div className="col form-group">
								<label htmlFor="phone_number">
									Phone Number <span style={{ color: 'red' }}>*</span>
								</label>
								<input
									type="tel"
									className="form-control"
									id="phone_number"
									required
									placeholder="3725168"
									value={phone_number}
									onChange={(e) => setValues({ ...values, phone_number: e.target.value })}
								/>
							</div>
						</div>

						<div className="form-group">
							<label>
								Quel type de compte souhaitez-vous créer? <small style={{ color: 'red' }}>*</small>
							</label>{' '}
							<br />
							<label className="custom-control custom-radio custom-control-inline">
								<input
									className="custom-control-input"
									type="radio"
									name="account_type"
									required
									value="customer"
									onChange={(e) => setValues({ ...values, account_type: e.target.value })}
								/>
								<span className="custom-control-label"> Client </span>
							</label>
							<label className="custom-control custom-radio custom-control-inline">
								<input
									className="custom-control-input"
									type="radio"
									name="account_type"
									required
									value="referent"
									onChange={(e) => setValues({ ...values, account_type: e.target.value })}
								/>
								<span className="custom-control-label"> Référent </span>
							</label>
							<br />
							<small className="mt-4 mb-4">
								<i className="fas fa-exclamation-triangle" style={{ color: '#f63b3b' }} /> Les comptes
								référent sont soumis à une évaluation. Durant cette période d'evaluation vous ne serez
								pas encore en mesure d'acceder aux fonctionnalités de votre compte.
							</small>
						</div>

						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="city">
									Ville <small style={{ color: 'red' }}>*</small>
								</label>
								<input
									type="text"
									className="form-control"
									id="city"
									placeholder="Mutsamudu"
									required
									value={city}
									onChange={(e) => setValues({ ...values, city: e.target.value })}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="island">
									île <small style={{ color: 'red' }}>*</small>
								</label>
								<select
									id="island"
									className="form-control"
									required
									value={island}
									onChange={(e) => setValues({ ...values, island: e.target.value })}
								>
									<option value=""> Veuillez choisir une île...</option>
									<option>Anjouan</option>
									<option>Ngazidja</option>
									<option>Mohéli</option>
								</select>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-12">
								<label htmlFor="address">
									Adresse <small style={{ color: 'red' }}>*</small>
								</label>
								<input
									className="form-control"
									type="text"
									id="address"
									required
									value={address}
									onChange={(e) => setValues({ ...values, address: e.target.value })}
								/>
							</div>
						</div>
						<div className="form-group">
							<button
								type="submit"
								className="btn btn-primary btn-block"
								disabled={!termsAndConditionsAccepted}
								onClick={handleSubmit}
							>
								{loading ? 'En cours...' : "S'enregistrer"}
							</button>
							{termsAndConditionsAccepted === false ? (
								<small>Vous devez cocher la case ci-dessous pour pouvoir vous enregister</small>
							) : (
								''
							)}
						</div>
						<div className="form-group">
							<label className="custom-control custom-checkbox">
								{' '}
								<input
									type="checkbox"
									className="custom-control-input"
									onChange={handleTermsAndConditionsCheck}
								/>
								<div className="custom-control-label">
									{' '}
									J'accepte les <a href="#">termes et conditions</a>{' '}
									<small style={{ color: 'red' }}>*</small>{' '}
								</div>{' '}
							</label>
						</div>
					</form>
				</article>
			</div>
			<p className="text-center mt-4">
				Avez-vous déjà un compte?{' '}
				<Link href="/auth/login">
					<a>Connectez-vous</a>
				</Link>
			</p>
			<br />
			<br />
		</React.Fragment>
	);
};

export default Register;
