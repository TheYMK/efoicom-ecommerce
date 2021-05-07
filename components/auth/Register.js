import React, { useState, useEffect } from 'react';
import { auth } from '../../actions/firebase';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { REGISTER_REDIRECT_URL } from '../../config';
import Link from 'next/link';
import PhoneInput from 'react-phone-number-input';
import { getAllZones } from '../../actions/zone';

const Register = () => {
	const [ values, setValues ] = useState({
		first_name: '',
		last_name: '',
		email: '',
		phone_number: '',
		account_type: '',
		reference_zone: '',
		city: '',
		island: '',
		address: '',
		allZones: []
	});

	// Get currently logged in user from redux
	const { user } = useSelector((state) => ({ ...state }));

	const [ loading, setLoading ] = useState(false);

	const [ termsAndConditionsAccepted, setTermsAndConditionsAccepted ] = useState(false);

	const {
		first_name,
		last_name,
		email,
		phone_number,
		account_type,
		city,
		island,
		address,
		reference_zone,
		allZones
	} = values;

	useEffect(
		() => {
			if (user && user.token) {
				Router.push('/');
			}
		},
		[ user ]
	);

	useEffect(() => {
		loadZones();
	}, []);

	const loadZones = () => {
		getAllZones()
			.then((res) => {
				setValues({ ...values, allZones: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	/**
	 * This function set the termsAndConditionsAccepted state to true. Which, once true, will enable the button to register.
	 * @param {*} e 
	 */
	const handleTermsAndConditionsCheck = (e) => {
		setTermsAndConditionsAccepted(e.target.checked);
	};

	/**
	 * This function saves the values to the local storage and then sends a sign in link to the user email.
	 * @param {*} e 
	 * @returns 
	 */
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (account_type === '') {
			toast.error('Veuillez remplir tous les champs avant de vous enregistrer.');
			return;
		}

		// checking to make sure all fields are not empty
		if (account_type === 'customer') {
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
				toast.error('Veuillez remplir tous les champs avant de vous enregistrer.');
				return;
			}
		}
		// checking to make sure all fields are not empty
		if (account_type === 'referent') {
			if (
				first_name === '' ||
				last_name === '' ||
				email === '' ||
				phone_number === '' ||
				account_type === '' ||
				city === '' ||
				island === '' ||
				address === '' ||
				reference_zone === ''
			) {
				toast.error('Veuillez remplir tous les champs avant de vous enregistrer.');
				return;
			}
		}
		if (termsAndConditionsAccepted === false) {
			toast.error(
				'Vous devez lire et accepter les termes et conditions de la plateforme avant de vous enregistrer.'
			);
			return;
		}

		setLoading(true);

		try {
			// firebase config
			const config = {
				url: REGISTER_REDIRECT_URL,
				handleCodeInApp: true
			};

			await auth.sendSignInLinkToEmail(email, config);

			toast.success(
				`Un email de confirmation vous a été envoyer. Cliquez sur le lien pour completer votre enregistrement.`
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
			window.localStorage.setItem('referenceZoneToRegister', reference_zone);

			// clean up the state
			setValues({
				first_name: '',
				last_name: '',
				email: '',
				phone_number: '',
				account_type: '',
				city: '',
				island: '',
				address: '',
				reference_zone: ''
			});
			setLoading(false);
		} catch (err) {
			console.log(`----> Error occured during registration process (=> /auth/register page): ${err}`);
			toast.error(
				"Oops! Une erreur s'est produite lors de la création de votre compte. Assurez vous de remplir tous les champs obligatoires. Veuillez réessayer! Si le problème persiste, Contactez nous."
			);
			setLoading(false);
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
							<div className="col-md-6 form-group">
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
							<div className="col-md-6 form-group">
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
							<div className="col-md-6 form-group">
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
							<div className="col-md-6 form-group">
								<label htmlFor="phone_number">
									Phone Number <span style={{ color: 'red' }}>*</span>
								</label>
								<PhoneInput
									placeholder="3725168"
									value={phone_number}
									required
									name="phone_number"
									className="form-control"
									onChange={(e) => setValues({ ...values, phone_number: e })}
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
								<span className="custom-control-label"> Compte client </span>
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
								<span className="custom-control-label"> Compte référent </span>
							</label>
							<br />
							<small className="mt-4 mb-4">
								<i className="fas fa-exclamation-triangle" style={{ color: '#f63b3b' }} /> Les comptes
								référent sont soumis à une évaluation. Durant cette période d'évaluation vous ne serez
								pas encore en mesure d'accéder aux fonctionnalités de votre compte.
							</small>
						</div>

						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="city">
									Votre Ville <small style={{ color: 'red' }}>*</small>
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
									Votre île <small style={{ color: 'red' }}>*</small>
								</label>
								<select
									id="island"
									className="form-control"
									required
									value={island}
									onChange={(e) => setValues({ ...values, island: e.target.value })}
								>
									<option value=""> Veuillez choisir une île...</option>
									<option value="ndzuwani">Ndzuwani</option>
									<option value="ngazidja">Ngazidja</option>
									<option value="mwali">Mwali</option>
								</select>
							</div>
						</div>

						{account_type === 'referent' && (
							<div className="form-group">
								<label htmlFor="reference_zone">
									Quelle commune souhaitez-vous être le référent?{' '}
									<small style={{ color: 'red' }}>*</small>
								</label>
								<select
									id="reference_zone"
									className="form-control"
									required
									value={reference_zone}
									onChange={(e) => setValues({ ...values, reference_zone: e.target.value })}
								>
									<option value=""> Veuillez choisir une zone...</option>
									{allZones.map((zone, index) => (
										<option value={zone._id} key={index}>
											{zone.name} ({zone.island.toUpperCase()})
										</option>
									))}
								</select>
							</div>
						)}

						<div className="form-row">
							<div className="form-group col-md-12">
								<label htmlFor="address">
									Votre adresse complète <small style={{ color: 'red' }}>*</small>
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
