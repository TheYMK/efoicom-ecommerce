import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { toast } from 'react-toastify';

const Search = () => {
	const dispatch = useDispatch();
	const { search, lang } = useSelector((state) => ({ ...state }));
	const { text, island_choice } = search;

	const handleChange = (e) => {
		dispatch({
			type: 'SEARCH_QUERY',
			payload: { [e.target.name]: e.target.value }
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text !== '') {
			Router.push(`/items?${text}`);
		} else {
			if (lang === 'fr') {
				toast.info(`N'oubliez pas de renseigner un terme à rechercher`);
			}
			if (lang === 'en') {
				toast.info(`Do not forget to type your search term`);
			}
			if (lang === 'km') {
				toast.info(`N'oubliez pas de renseigner un terme à rechercher`);
			}
		}
	};

	return (
		<form className="search-header">
			<div className="input-group w-100">
				<select
					className="custom-select border-right"
					name="island_choice"
					value={island_choice}
					onChange={handleChange}
				>
					<option value="all">
						{lang === 'fr' && 'Toutes les îles'}
						{lang === 'en' && 'All islands'}
						{lang === 'km' && 'Toutes les îles'}
					</option>
					<option value="ndzuwani">Ndzuwani</option>
					<option value="ngazidja">Ngazidja</option>
					<option value="mwali">Mwali</option>
				</select>
				<input
					type="text"
					className="form-control"
					name="text"
					placeholder={lang === 'fr' ? 'Recherche...' : 'Search...'}
					value={text}
					onChange={handleChange}
				/>
				<div className="input-group-append">
					<button className="btn btn-primary" type="submit" onClick={handleSubmit}>
						<i className="fa fa-search" />
						<span className="search-text">
							{lang === 'fr' && ' Rechercher'}
							{lang === 'en' && ' Search'}
							{lang === 'km' && ' Rechercher'}
						</span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default Search;
