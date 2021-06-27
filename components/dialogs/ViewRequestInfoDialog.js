import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ViewRequestInfoDialog = ({ open, handleClose, request }) => {
	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				maxWidth="sm"
				fullWidth={true}
			>
				<DialogTitle id="alert-dialog-title">Détail du profil</DialogTitle>
				<DialogContent>
					<div className="row">
						<div className="col-md-6">
							<p>À propos du référent</p>
							<p style={{ color: 'black' }}>
								<strong>Nom et Prénom:</strong> {request.name} <br />
								<strong>Email:</strong> {request.email} <br />
								<strong>Tél:</strong> {request.phone_number} <br />
								<strong>Ville:</strong> {request.city} ({request.island}) <br />
								<strong>Adresse:</strong> {request.address} <br />
							</p>
						</div>
						<div className="col-md-6">
							<p>À propos de la commune</p>
							{request.reference_zone && (
								<p style={{ color: 'black' }}>
									<strong>Nom:</strong> {request.reference_zone.name} <br />
									<strong>Île:</strong> {request.reference_zone.island.toUpperCase()}
								</p>
							)}
						</div>
					</div>
				</DialogContent>
				<DialogActions>
					<button onClick={handleClose} className="btn btn-primary">
						Fermer
					</button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ViewRequestInfoDialog;
