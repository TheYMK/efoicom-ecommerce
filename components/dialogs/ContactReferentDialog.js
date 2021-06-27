import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ContactReferentDialog = ({
	open,
	handleClose,
	ref_name,
	ref_phone,
	ref_city,
	ref_island,
	ref_address,
	ref_zone,
	values,
	setValues,
	handleSubmitContactForm,
	loading,
	title,
	description
}) => {
	const { ref_email, usr_email, usr_phone, usr_name, subject, message } = values;

	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description" style={{ color: '#000' }}>
						{description}
					</DialogContentText>
					<DialogContentText id="alert-dialog-description">
						Nom et prénom: <strong style={{ color: '#000' }}>{ref_name}</strong>
						<br />
						Tél: <strong style={{ color: '#000' }}>{ref_phone}</strong>
						<br />
						Île <strong style={{ color: '#000' }}>{ref_island.toUpperCase()}</strong>
						<br />
						Ville: <strong style={{ color: '#000' }}>{ref_city}</strong>
						<br />
						Adresse: <strong style={{ color: '#000' }}>{ref_address}</strong>
						<br />
						Commune: <strong style={{ color: '#000' }}>{ref_zone}</strong>
					</DialogContentText>
					<form>
						<div className="row">
							<div className="col-md-12">
								<label htmlFor="referent_email">Email du référent</label>
								<input
									id="referent_email"
									type="email"
									className="form-control"
									placeholder={ref_email}
									disabled
								/>
							</div>
							<div className="col-md-6 mt-3">
								<label htmlFor="usr_email">Votre adresse email</label>
								<input
									id="usr_email"
									type="email"
									className="form-control"
									placeholder={usr_email}
									disabled
								/>
							</div>
							<div className="col-md-6 mt-3">
								<label htmlFor="usr_phone">Votre numéro de téléphone</label>
								<input
									id="usr_phone"
									type="text"
									className="form-control"
									placeholder={usr_phone}
									disabled
								/>
							</div>
							<div className="col-md-12 mt-3">
								<label htmlFor="usr_name">Votre nom et prénom</label>
								<input
									id="usr_name"
									type="text"
									className="form-control"
									placeholder={usr_name}
									disabled
								/>
							</div>
							<div className="col-md-12 mt-3">
								<label htmlFor="subject">Objet</label>
								<input
									id="subject"
									type="text"
									className="form-control"
									placeholder=""
									value={subject}
									onChange={(e) => setValues({ ...values, subject: e.target.value })}
								/>
							</div>
							<div className="col-md-12 mt-3">
								<label htmlFor="message">Votre message</label>
								<textarea
									className="form-control"
									id="message"
									rows="3"
									value={message}
									onChange={(e) => setValues({ ...values, message: e.target.value })}
								/>
							</div>
						</div>
					</form>
				</DialogContent>
				<DialogActions>
					<button onClick={handleClose} className="btn btn-secondary">
						Fermer
					</button>
					<button onClick={handleSubmitContactForm} className="btn btn-primary" autoFocus>
						{loading ? 'En cours...' : 'Envoyer'}
					</button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ContactReferentDialog;
