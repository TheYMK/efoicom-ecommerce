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
					<DialogContentText>Vous serez déconnecté après cette opération</DialogContentText>

					<label htmlFor="password">
						Nouveau mot de passe <span style={{ color: 'red' }}>*</span>
					</label>
					<input
						autoFocus
						id="password"
						className="form-control"
						type="password"
						placeholder="••••••"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<label htmlFor="confirmPassword" className="mt-2">
						Confirmer mot de passe <span style={{ color: 'red' }}>*</span>
					</label>
					<input
						id="confirmPassword"
						type="password"
						className="form-control"
						placeholder="••••••"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<button onClick={handleClose} className="btn btn-secondary">
						Annuler
					</button>
					<button onClick={handlePasswordSubmit} className="btn btn-primary">
						{loading ? 'En cours...' : 'Confirmer'}
					</button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default PasswordChangeDialog;
