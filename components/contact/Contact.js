import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { emailContactForm } from '../../actions/form';

const Contact = () => {
	const [ values, setValues ] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const [ loading, setLoading ] = useState(false);

	const { name, email, subject, message } = values;

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await emailContactForm(values);
			setValues({ ...values, name: '', email: '', subject: '', message: '' });
			setLoading(false);
			toast.success('Votre message a bien été envoyé! Nous vous contacterons le plus rapidement possible :)');
		} catch (err) {
			toast.error(`Oops! Echec de l'opération. Veuillez réessayer :(`);
			setLoading(false);
		}
	};

	return (
		<React.Fragment>
			<section className="section-subscribe padding-y-lg" id="contact">
				<div className="container">
					<h3 className="mb-5 text-white">Avez-vous des questions? Contactez-nous</h3>

					<div className="row justify-content-md-center">
						<div className="col-lg-4" data-aos="zoom-in">
							<div className="info">
								{/* <div className="address">
									<i className="icofont-google-map" />
									<h4>Adresse:</h4>
									<p>Moroni, Hamramba</p>
								</div> */}

								<div className="email">
									<i className="icofont-envelope" />
									<h4>Email:</h4>
									<p>contact@bangwelamassiwa.com</p>
								</div>

								<div className="phone">
									<i className="icofont-phone" />
									<h4>Numéro de téléphone:</h4>
									<p>+269 349 55 55</p>
								</div>
							</div>
						</div>

						<div className="col-lg-8 mt-5 mt-lg-0" data-aos="zoom-in">
							<form onSubmit={handleSubmit}>
								<div className="form-row">
									<div className="col-md-6 form-group">
										<input
											type="text"
											name="name"
											className="form-control"
											id="name"
											placeholder="Votre nom..."
											value={name}
											data-rule="minlen:4"
											data-msg="Please enter at least 4 chars"
											onChange={(e) => setValues({ ...values, name: e.target.value })}
										/>
									</div>
									<div className="col-md-6 form-group">
										<input
											type="email"
											className="form-control"
											name="email"
											id="email"
											placeholder="Votre email..."
											data-rule="email"
											value={email}
											data-msg="Please enter a valid email"
											onChange={(e) => setValues({ ...values, email: e.target.value })}
										/>
									</div>
								</div>
								<div className="form-group">
									<input
										type="text"
										className="form-control"
										name="subject"
										id="subject"
										placeholder="Objet du message..."
										data-rule="minlen:4"
										value={subject}
										data-msg="Please enter at least 8 chars of subject"
										onChange={(e) => setValues({ ...values, subject: e.target.value })}
									/>
								</div>
								<div className="form-group">
									<textarea
										className="form-control"
										name="message"
										rows="5"
										data-rule="required"
										data-msg="Please write something for us"
										placeholder="Votre message..."
										value={message}
										onChange={(e) => setValues({ ...values, message: e.target.value })}
									/>
								</div>

								<div className="text-center">
									<button className="btn btn-primary rounded-pill" type="submit">
										{loading ? 'En cours...' : 'Envoyer un message'}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Contact;
