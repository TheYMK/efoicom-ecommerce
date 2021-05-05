import React from 'react';
import TextField from '@material-ui/core/TextField';

const SubCategoryForm = ({ subValues, setSubValues, handleSubSubmit }) => {
	const { subName, subLoading } = subValues;
	return (
		<div>
			<form>
				<label htmlFor="subcategory_name">
					Nom de la sous-catégorie <small style={{ color: 'red' }}>*</small>
				</label>
				<input
					id="subcategory_name"
					className="form-control"
					placeholder="T-shirt"
					value={subName}
					onChange={(e) => setSubValues({ ...subValues, subName: e.target.value })}
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
