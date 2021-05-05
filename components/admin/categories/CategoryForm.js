import React from 'react';
import TextField from '@material-ui/core/TextField';

const CategoryForm = ({ values, setValues, handleSubmit, loading }) => {
	const { name } = values;
	return (
		<div>
			<form>
				<label htmlFor="category_name">
					Nom de la catégorie <small style={{ color: 'red' }}>*</small>
				</label>
				<input
					id="category_name"
					className="form-control"
					placeholder="Vêtements"
					value={name}
					onChange={(e) => setValues({ ...values, name: e.target.value })}
					autoFocus
					required
				/>
				<button className="btn btn-primary mt-3" disabled={!name} onClick={handleSubmit}>
					{loading ? 'En cours...' : 'Ajouter'}
				</button>
			</form>
		</div>
	);
};

export default CategoryForm;
