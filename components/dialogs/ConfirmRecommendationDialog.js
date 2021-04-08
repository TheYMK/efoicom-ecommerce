import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ConfirmRecommendationDialog = ({ open, handleClose, item, handleUpdateItemIsRecommended }) => {
	const handleSubmit = () => {
		handleUpdateItemIsRecommended(item);
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
					<DialogContentText id="alert-dialog-description">
						Êtes-vous sûr de vouloir recommander cet article?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Annuler
					</Button>
					<Button onClick={handleSubmit} color="primary" autoFocus>
						Confirmer
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ConfirmRecommendationDialog;
