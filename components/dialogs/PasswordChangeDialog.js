import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const PasswordChangeDialog = ({
	open,
	handleClose,
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	loading,
	handlePasswordSubmit
}) => {
	return (
		<div>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Changer votre mot de passe</DialogTitle>
				<DialogContent>
					<DialogContentText>Vous serez deconnecter après cette opération</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="password"
						label="Nouveau mot de passe"
						type="password"
						value={password}
						fullWidth
						onChange={(e) => setPassword(e.target.value)}
					/>
					<TextField
						margin="dense"
						id="confirmPassword"
						label="Confirmer votre mot de passe"
						type="password"
						fullWidth
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Annuler
					</Button>
					<Button onClick={handlePasswordSubmit} color="primary">
						{loading ? 'En cours...' : 'Confirmer'}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default PasswordChangeDialog;
