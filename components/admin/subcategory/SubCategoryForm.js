import React from 'react';
import TextField from '@material-ui/core/TextField';

const SubCategoryForm = ({ subValues, setSubValues, handleSubSubmit }) => {
	const { subName, subLoading } = subValues;
	return (
		<div>
			<form>
				<TextField
					id="subcategory_name"
					label="Nom de la sous-catégorie"
					fullWidth
					placeholder="T-shirt"
					value={subName}
					onChange={(e) => setSubValues({ ...subValues, subName: e.target.value })}
					autoFocus
					required
				/>
				<button className="btn btn-primary mt-3" disabled={!subName} onClick={handleSubSubmit}>
					{subLoading ? 'En cours...' : 'Ajouter'}
				</button>
			</form>
		</div>
	);
};

export default SubCategoryForm;
