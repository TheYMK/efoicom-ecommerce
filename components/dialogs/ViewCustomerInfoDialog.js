import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ViewCustomerInfoDialog = ({ open, handleClose, customer }) => {
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
					<p>À propos du client</p>
					<p style={{ color: 'black' }}>
						<strong>Nom et Prénoms:</strong> {customer.name} <br />
						<strong>Email:</strong> {customer.email} <br />
						<strong>Tel:</strong> {customer.phone_number} <br />
						<strong>Ville:</strong> {customer.city} ({customer.island}) <br />
						<strong>Adresse:</strong> {customer.address} <br />
					</p>
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

export default ViewCustomerInfoDialog;
