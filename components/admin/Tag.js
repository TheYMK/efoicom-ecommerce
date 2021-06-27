import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createTag, getTags, removeTag } from '../../actions/tag';

const Tag = ({ refresh, setRefresh }) => {
	const [ values, setValues ] = useState({
		name: '',
		tags: [],
		loading: false,
		reload: false
	});

	const { name, tags, reload, loading } = values;
	const { user } = useSelector((state) => ({ ...state }));

	useEffect(
		() => {
			loadTags();
		},
		[ reload ]
	);

	const loadTags = () => {
		getTags()
			.then((res) => {
				setValues({ ...values, tags: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setValues({ ...values, loading: true });
		createTag({ name: name }, user.token)
			.then((res) => {
				setValues({ ...values, name: '', reload: !reload, loading: false });
				toast.success('Nouvelle étiquette créée.');
				setRefresh(!refresh);
			})
			.catch((err) => {
				console.log(err);
				setValues({ ...values, loading: false });
				toast.error(`Oops! L'étiquette n'a pas pu être créée.`);
			});
	};

	const handleChange = (e) => {
		setValues({ ...values, name: e.target.value });
	};

	const newTagForm = () => (
		<form className="" onSubmit={handleSubmit}>
			<div className="form-group">
				<label className="text-muted">Nom de l'étiquette</label>
				<input
					type="text"
					className="form-control"
					onChange={handleChange}
					value={name}
					required
					placeholder="Saisissez un nom..."
				/>
			</div>
			<div>
				<button className="btn btn-primary text-white" onClick={handleSubmit}>
					{loading ? 'En cours...' : 'Ajouter'}
				</button>
			</div>
		</form>
	);

	const deleteConfirm = (slug) => {
		let answer = window.confirm('Êtes-vous sûr de vouloir supprimer cette étiquette?');

		if (answer) {
			deleteTag(slug);
		}
	};

	const deleteTag = (slug) => {
		removeTag(slug, user.token)
			.then((res) => {
				setValues({ ...values, name: '', reload: !reload });
				toast.success(`Étiquette supprimée.`);
			})
			.catch((err) => {
				toast.success(`Échec de l'opération! Veuillez réessayer!`);
			});
	};

	const showTags = () => {
		return tags.map((tag, index) => {
			return (
				<button
					onDoubleClick={() => deleteConfirm(tag.slug)}
					title="Double-cliquer pour supprimer"
					key={index}
					className="tag bg-dark text-white mr-1 ml-1 mt-3"
				>
					{tag.name}
				</button>
			);
		});
	};

	return (
		<div>
			{newTagForm()}
			<div className="mt-3">Liste: {showTags()}</div>
		</div>
	);
};

export default Tag;
