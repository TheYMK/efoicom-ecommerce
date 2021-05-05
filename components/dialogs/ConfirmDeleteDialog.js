import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ConfirmDeleteDiaog = ({ open, handleClose, element, action, text }) => {
	const handleSubmit = () => {
		action(element);
	};

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
				{/* <DialogTitle id="alert-dialog-title">Êtes-vous sûr de vouloir recommander cet article?</DialogTitle> */}
				<DialogContent>
					<DialogContentText id="alert-dialog-description">{text}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<button onClick={handleClose} className="btn btn-secondary">
						Annuler
					</button>
					<button onClick={handleSubmit} className="btn btn-primary" autoFocus>
						Confirmer
					</button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ConfirmDeleteDiaog;
