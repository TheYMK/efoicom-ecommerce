import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createBlogCategory, getBlogCategories, removeBlogCategory } from '../../actions/blogcategory';

const Category = ({ refresh, setRefresh }) => {
	const [ values, setValues ] = useState({
		name: '',
		blogcategories: [],
		loading: false,
		reload: false
	});

	const { name, blogcategories, reload, loading } = values;
	const { user } = useSelector((state) => ({ ...state }));

	useEffect(
		() => {
			loadBlogCategories();
		},
		[ reload ]
	);

	const loadBlogCategories = () => {
		getBlogCategories()
			.then((res) => {
				setValues({ ...values, blogcategories: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setValues({ ...values, loading: true });
		createBlogCategory({ name: name }, user.token)
			.then((res) => {
				setValues({ ...values, name: '', reload: !reload, loading: false });
				toast.success('Nouvelle catégorie crée');
				setRefresh(!refresh);
			})
			.catch((err) => {
				console.log(err);
				setValues({ ...values, loading: false });
				toast.error(`Oops! La categorie n'a pas pu être crée`);
			});
	};

	const handleChange = (e) => {
		setValues({ ...values, name: e.target.value });
	};

	const newCategoryForm = () => (
		<form className="" onSubmit={handleSubmit}>
			<div className="form-group">
				<label className="text-muted">Nom de la catégorie</label>
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
				<button className="btn btn-primary text-white rounded-pill" onClick={handleSubmit}>
					{loading ? 'En cours...' : 'Sauvegarder'}
				</button>
			</div>
		</form>
	);

	const deleteConfirm = (slug) => {
		let answer = window.confirm('Êtes-vous sûr de vouloir supprimer cette catégorie');

		if (answer) {
			deleteCategory(slug);
		}
	};

	const deleteCategory = (slug) => {
		removeBlogCategory(slug, user.token)
			.then((res) => {
				setValues({ ...values, name: '', reload: !reload });
				toast.success(`Catégorie supprimer`);
			})
			.catch((err) => {
				toast.success(`Echec de l'opération! Veuillez réessayer`);
			});
	};

	const showCategories = () => {
		return blogcategories.map((blogcategory, index) => {
			return (
				<button
					onDoubleClick={() => deleteConfirm(blogcategory.slug)}
					title="Double click to delete"
					key={index}
					className="tag bg-dark text-white mr-1 ml-1 mt-3"
				>
					{blogcategory.name}
				</button>
			);
		});
	};

	return (
		<div>
			{newCategoryForm()}
			<div>Liste: {showCategories()}</div>
		</div>
	);
};

export default Category;
