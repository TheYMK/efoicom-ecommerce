import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { toast } from 'react-toastify';

const EditSubDialog = ({
	openSub,
	handleSubClose,
	currentSub,
	setCurrentSub,
	handleSubUpdate,
	subLoading,
	setSubValues,
	subValues,
	categories
}) => {
	const { name, slug, parent } = currentSub;

	const handleSubmit = () => {
		if (!currentSub.name) {
			toast.success('Le nom ne peut pas être vide');
			return;
		}

		handleSubUpdate();
	};

	return (
		<div>
			<Dialog
				open={openSub}
				onClose={handleSubClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				maxWidth="sm"
				fullWidth={true}
			>
				<DialogTitle id="alert-dialog-title">Modifier la sous-catégorie</DialogTitle>

				<DialogContent>
					<div className="form-group">
						<label>Catégorie parente</label>
						<select
							name="category"
							className="form-control"
							value={parent}
							onChange={(e) => setCurrentSub({ ...currentSub, parent: e.target.value })}
						>
							<option value="">Veuillez selectionner une sous-catégorie</option>
							{categories.length > 0 &&
								categories.map((category) => (
									<option key={category._id} value={category._id}>
										{category.name}
									</option>
								))}
						</select>
					</div>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Nom de la sous-catégorie *"
						type="text"
						value={name}
						fullWidth
						onChange={(e) => setCurrentSub({ ...currentSub, name: e.target.value })}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleSubClose} color="primary">
						Annuler
					</Button>
					<Button onClick={handleSubmit} color="primary" autoFocus>
						{subLoading ? 'En cours...' : 'Modifier'}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default EditSubDialog;
