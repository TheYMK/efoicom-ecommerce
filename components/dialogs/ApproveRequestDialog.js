import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ApproveRequestDialog = ({ open, handleClose }) => {
	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">Êtes-vous sûr de vouloir approuver ce référent?</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						En approuvant ce référent, ce dernier aura accès aux divers fonctionnalités du compte référent.
						Il pourra ainsi publier des produits et service. Il pourra aussi intéragir avec des clients.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Annuler
					</Button>
					<Button onClick={handleClose} color="primary" autoFocus>
						Confirmer
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ApproveRequestDialog;
