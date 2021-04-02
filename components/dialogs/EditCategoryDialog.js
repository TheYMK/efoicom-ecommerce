import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { toast } from 'react-toastify';
import FileUpload from '../FileUpload';

const EditCategoryDialog = ({
	open,
	handleClose,
	currentCategory,
	setCurrentCategory,
	handleUpdate,
	loading,
	setLoading
}) => {
	const { name, slug, images } = currentCategory;
	const [ values, setValues ] = useState({
		images: []
	});

	useEffect(
		() => {
			setValues({ ...values, images: images });
		},
		[ images ]
	);

	const handleSubmit = () => {
		if (!currentCategory.name) {
			toast.success('Le nom ne peut pas être vide');
			return;
		}

		handleUpdate(values);
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
				<DialogTitle id="alert-dialog-title">Modifier la catégorie </DialogTitle>

				<DialogContent>
					<div className="mt-4">
						<FileUpload values={values} setValues={setValues} loading={loading} setLoading={setLoading} />
					</div>

					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Nom de la catégorie *"
						type="text"
						value={name}
						fullWidth
						onChange={(e) => setCurrentCategory({ ...currentCategory, name: e.target.value })}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Annuler
					</Button>
					<Button onClick={handleSubmit} color="primary" autoFocus>
						{loading ? 'En cours...' : 'Modifier'}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default EditCategoryDialog;
