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
		if (!currentCategory.name || values.images.length < 1) {
			toast.success(
				`Tous les champs doivent être remplis. Noubliez pas d'inclure une image représentant la catégorie`
			);
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
				<DialogTitle id="alert-dialog-title">Modifier les informations </DialogTitle>

				<DialogContent>
					<div className="mt-4">
						<FileUpload values={values} setValues={setValues} loading={loading} setLoading={setLoading} />
					</div>
					<form>
						<label htmlFor="name">
							Nom de la catégorie <small style={{ color: 'red' }}>*</small>
						</label>
						<input
							autoFocus
							id="name"
							type="text"
							value={name}
							className="form-control"
							required
							onChange={(e) => setCurrentCategory({ ...currentCategory, name: e.target.value })}
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<button onClick={handleClose} className="btn btn-secondary">
						Annuler
					</button>
					<button onClick={handleSubmit} className="btn btn-primary" autoFocus>
						{loading ? 'En cours...' : 'Modifier'}
					</button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default EditCategoryDialog;
