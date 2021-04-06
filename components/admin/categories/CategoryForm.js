import React from 'react';
import TextField from '@material-ui/core/TextField';

const CategoryForm = ({ values, setValues, handleSubmit, loading }) => {
	const { name } = values;
	return (
		<div>
			<form>
				<TextField
					id="category_name"
					label="Nom de la catégorie"
					fullWidth
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
