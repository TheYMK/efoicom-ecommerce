import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import moment from 'moment';

const ReferentProfileOverview = ({ referent, open, handleClose, handleDeleteUser, loading }) => {
	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				maxWidth="md"
				fullWidth={true}
			>
				<DialogTitle id="alert-dialog-title">Profile de {referent.name}</DialogTitle>
				<DialogContent>
					<div className="row">
						<div className="col-md-6">
							<DialogContentText id="alert-dialog-description">
								<span style={{ color: '#f63b3b', fontWeight: '800' }}>À propos de ce référent</span>
							</DialogContentText>
							<DialogContentText id="alert-dialog-description">
								<span style={{ color: '#000' }}>
									<strong>Email:</strong> {referent.email}
								</span>
							</DialogContentText>
							<DialogContentText id="alert-dialog-description">
								<span style={{ color: '#000' }}>
									<strong>Tel:</strong> {referent.phone_number}
								</span>
							</DialogContentText>
							<DialogContentText id="alert-dialog-description">
								<span style={{ color: '#000' }}>
									<strong>Île:</strong> {referent.island}
								</span>
							</DialogContentText>
							<DialogContentText id="alert-dialog-description">
								<span style={{ color: '#000' }}>
									<strong>Ville:</strong> {referent.city}
								</span>
							</DialogContentText>
							<DialogContentText id="alert-dialog-description">
								<span style={{ color: '#000' }}>
									<strong>Adresse:</strong> {referent.address}
								</span>
							</DialogContentText>
							<DialogContentText id="alert-dialog-description">
								<span style={{ color: '#000' }}>
									<strong>Zone de référence:</strong> {referent.reference_zone}
								</span>
							</DialogContentText>
						</div>
						<div className="col-md-6">
							<DialogContentText id="alert-dialog-description">
								<span style={{ color: '#f63b3b', fontWeight: '800' }}>Activités du compte</span>
							</DialogContentText>

							<DialogContentText id="alert-dialog-description">
								<span style={{ color: '#000' }}>
									<strong>Status:</strong>{' '}
									{referent.referent_account_approval === 'approved' ? (
										<span style={{ color: 'green' }}>Actif</span>
									) : (
										<span style={{ color: 'red' }}>Inactif</span>
									)}
								</span>
							</DialogContentText>
							<div>
								<div className="row">
									<div className="col-sm-6 mt-3">
										<div className="card">
											<div className="card-body">
												<h5 className="card-title">Produits en ligne</h5>
												<p
													className="card-text"
													style={{ fontSize: '30px', fontWeight: '600' }}
												>
													0
												</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6 mt-3">
										<div className="card">
											<div className="card-body">
												<h5 className="card-title">Services en ligne</h5>
												<p
													className="card-text"
													style={{ fontSize: '30px', fontWeight: '600' }}
												>
													0
												</p>
											</div>
										</div>
									</div>
								</div>
								<button
									onClick={handleClose}
									className="btn btn-danger mt-5"
									onClick={() => handleDeleteUser(referent._id)}
								>
									{loading ? 'En cours...' : 'Supprimer ce compte'}
								</button>
							</div>
						</div>
					</div>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Fermer
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ReferentProfileOverview;
