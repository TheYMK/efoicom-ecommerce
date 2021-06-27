import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const EditZoneDialog = ({ open, handleClose, currentZone, setCurrentZone, handleUpdateZone }) => {
	const { name, island } = currentZone;
	const [ loading, setLoading ] = useState(false);
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
				<DialogTitle id="alert-dialog-title">Modifier les informations</DialogTitle>
				<DialogContent>
					<div className="form-row">
						<div className="form-group col-md-4">
							<label htmlFor="nameD">
								Nom de la commune <span style={{ color: 'red' }}>*</span>
							</label>
							<input
								type="text"
								id="nameD"
								className="form-control"
								value={name}
								onChange={(e) => setCurrentZone({ ...currentZone, name: e.target.value })}
								placeholder="Donnez un nom à cette zone"
								required
							/>
						</div>
						<div className="form-group col-md-8">
							<label>
								Dans quelle île se trouve cette commune? <span style={{ color: 'red' }}>*</span>
							</label>
							<select
								name="island"
								className="form-control"
								value={island}
								onChange={(e) => setCurrentZone({ ...currentZone, island: e.target.value })}
							>
								<option value="ndzuwani">Ndzuwani</option>
								<option value="ngazidja">Ngazidja</option>
								<option value="mwali">Mwali</option>
							</select>
						</div>
					</div>
				</DialogContent>
				<DialogActions>
					<button onClick={handleClose} className="btn btn-secondary">
						Annuler
					</button>
					<button onClick={handleUpdateZone} className="btn btn-primary">
						Modifier
					</button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default EditZoneDialog;
