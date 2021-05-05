import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

function LocalSearch({ values, setValues }) {
	const { keyword } = values;

	const handleSearchChange = (e) => {
		e.preventDefault();
		setValues({ ...values, keyword: e.target.value.toLowerCase() });
	};

	return (
		<TextField
			type="search"
			id="category_name"
			label={<i className="fas fa-search"> Filtrer</i>}
			fullWidth
			placeholder="Chercher un terme..."
			value={keyword}
			onChange={handleSearchChange}
		/>
	);
}

export default LocalSearch;
