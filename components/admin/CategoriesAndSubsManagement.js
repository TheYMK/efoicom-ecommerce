import React, { useEffect, useState } from 'react';
import { createCategory, getCategories, removeCategory, updateCategory } from '../../actions/category';
import AdminMenu from './AdminMenu';
import CategoryForm from './categories/CategoryForm';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import LocalSearch from '../searchforms/LocalSearch';
import EditCategoryDialog from '../dialogs/EditCategoryDialog';
import EditSubDialog from '../dialogs/EditSubDialog';
import SubCategoryForm from './subcategory/SubCategoryForm';
import TextField from '@material-ui/core/TextField';
import { createSubCategory, getSubs, removeSub, updateSub } from '../../actions/sub';
import FileUpload from '../FileUpload';

const CategoriesAndSubsManagement = () => {
	const [ values, setValues ] = useState({
		name: '',
		images: [],
		categories: [],
		keyword: ''
	});

	const [ subValues, setSubValues ] = useState({
		subName: '',
		subLoading: false,
		subs: [],
		keyword: '',
		parentCategory: ''
	});

	const [ currentCategory, setCurrentCategory ] = useState({
		name: '',
		slug: '',
		images: []
	});

	const [ currentSub, setCurrentSub ] = useState({
		name: '',
		slug: '',
		parent: ''
	});

	const [ loading, setLoading ] = useState(false);
	const { name, categories, keyword, images } = values;
	const { subName, subLoading, subs, parentCategory } = subValues;
	const { user } = useSelector((state) => ({ ...state }));
	const [ reload, setReload ] = useState(false);
	const [ open, setOpen ] = useState(false);
	const [ openSub, setOpenSub ] = useState(false);

	useEffect(
		() => {
			loadCategories();
			loadSubs();
		},
		[ reload ]
	);

	/**
	 * CATEGORIES
	 */

	const loadCategories = () => {
		getCategories()
			.then((res) => {
				setValues({ ...values, categories: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		if (!name || images.length < 1) {
			toast.error(
				`Tous les champs doivent être remplis. Noubliez pas d'inclure une image représentant la catégorie`
			);
			setLoading(false);
			return;
		}

		if (user && user.token) {
			createCategory(user.token, name, images)
				.then((res) => {
					setValues({ ...values, name: '', images: [] });
					setLoading(false);
					setReload(!reload);
					toast.success(`La catégorie "${res.data.name}" a été ajouter`);
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
					toast.error(`Oops! La categorie n'a pas été créer. Veuillez réessayer`);
				});
		}
	};

	const handleRemove = async (slug) => {
		let answer = window.confirm('Êtes-vous sûr de vouloir supprimer cette catégorie?');
		setLoading(true);
		if (answer) {
			if (user && user.token) {
				removeCategory(user.token, slug)
					.then((res) => {
						setLoading(false);
						toast.success(`La catégorie ${res.data.name} à bien été supprimer`);
						setReload(!reload);
					})
					.catch((err) => {
						console.log(err);
						setLoading(false);
						toast.error(`Oops! La categorie n'a pas été supprimer. Veuillez réessayer`);
					});
			}
		}
	};

	const showCategories = () => {
		return categories.filter(searched(keyword)).map((category) => (
			<div className="alert alert-secondary" key={category._id}>
				{category.name}
				<span className="float-right">
					<button className="btn btn-sm btn-primary" onClick={(e) => handleRemove(category.slug)}>
						<i className="fas fa-trash" />
					</button>
					<button
						className="btn btn-sm btn-secondary ml-3"
						onClick={() => handleOpenDialog(category.name, category.slug, category.images)}
					>
						<i className="fas fa-edit" />
					</button>
				</span>
			</div>
		));
	};

	const handleOpenDialog = (catName, catSlug, catImages) => {
		setCurrentCategory({ name: catName, slug: catSlug, images: catImages });
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setCurrentCategory({
			name: '',
			slug: ''
		});
	};

	const handleUpdate = (v) => {
		setLoading(true);

		if (user && user.token) {
			updateCategory(user.token, currentCategory.slug, currentCategory.name, v.images)
				.then((res) => {
					setLoading(false);
					setOpen(false);
					toast.success(`Modification effectuer`);
					setReload(!reload);
					setCurrentCategory({
						name: '',
						slug: '',
						images: []
					});
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
					toast.error(`Oops! La categorie n'a pas été modifier. Veuillez réessayer`);
				});
		}
	};

	/**
	 * SUB-CATEGORIES
	 */

	const loadSubs = () => {
		getSubs()
			.then((res) => {
				setSubValues({ ...subValues, subs: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSubOpen = (subCatName, subCatSlug, subCatParent) => {
		setCurrentSub({ name: subCatName, slug: subCatSlug, parent: subCatParent });
		setOpenSub(true);
	};

	const handleSubUpdate = () => {
		setSubValues({ ...subValues, subLoading: true });

		if (user && user.token) {
			updateSub(user.token, currentSub.slug, currentSub.name, currentSub.parent)
				.then((res) => {
					setSubValues({ ...subValues, subLoading: false });
					setOpenSub(false);
					toast.success(`Modification effectuer`);
					setReload(!reload);
					setCurrentSub({
						name: '',
						slug: '',
						parent: ''
					});
				})
				.catch((err) => {
					console.log(err);
					setSubValues({ ...subValues, subLoading: false });
					toast.error(`Oops! La categorie n'a pas été modifier. Veuillez réessayer`);
				});
		}
	};

	const handleSubSubmit = (e) => {
		e.preventDefault();

		setSubValues({ ...subValues, subLoading: true });
		if (user && user.token) {
			createSubCategory(user.token, { name: subName, parent: parentCategory })
				.then((res) => {
					setSubValues({ ...subValues, subLoading: false, subName: '' });
					setReload(!reload);
					toast.success(`La sous-catégorie "${res.data.name}" a été ajouter`);
				})
				.catch((err) => {
					console.log(err);
					setSubValues({ ...subValues, subLoading: false });
					toast.error(`Oops! La sous-catégorie n'a pas été créer. Veuillez réessayer`);
				});
		}
	};

	const handleSubRemove = (slug) => {
		let answer = window.confirm('Êtes-vous sûr de vouloir supprimer cette sous-catégorie?');
		setSubValues({ ...subValues, subLoading: true });
		if (answer) {
			if (user && user.token) {
				removeSub(user.token, slug)
					.then((res) => {
						setSubValues({ ...subValues, subLoading: false });
						toast.success(`La sous-catégorie ${res.data.name} à bien été supprimer`);
						setReload(!reload);
					})
					.catch((err) => {
						console.log(err);
						setSubValues({ ...subValues, subLoading: false });
						toast.error(`Oops! La sous-categorie n'a pas été supprimer. Veuillez réessayer`);
					});
			}
		}
	};

	const showSubs = () => {
		return subs.filter(searched(subValues.keyword)).map((sub) => (
			<div className="alert alert-secondary" key={sub._id}>
				{sub.name}
				<span className="float-right">
					<button className="btn btn-sm btn-primary" onClick={() => handleSubRemove(sub.slug)}>
						<i className="fas fa-trash" />
					</button>

					<button
						className="btn btn-sm btn-secondary ml-3"
						onClick={() => handleSubOpen(sub.name, sub.slug, sub.parent)}
					>
						<i className="fas fa-edit" />
					</button>
				</span>
			</div>
		));
	};

	const handleSubClose = () => {
		setOpenSub(false);
		setCurrentSub({
			name: '',
			slug: '',
			parent: ''
		});
	};

	const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

	return (
		<React.Fragment>
			<EditCategoryDialog
				open={open}
				handleClose={handleClose}
				currentCategory={currentCategory}
				setCurrentCategory={setCurrentCategory}
				handleUpdate={handleUpdate}
				loading={loading}
				setLoading={setLoading}
			/>
			<EditSubDialog
				openSub={openSub}
				handleSubClose={handleSubClose}
				currentSub={currentSub}
				setCurrentSub={setCurrentSub}
				handleSubUpdate={handleSubUpdate}
				subLoading={subLoading}
				setSubValues={setSubValues}
				subValues={subValues}
				categories={categories}
			/>
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<AdminMenu pageLocation="categories-subs" />
						</aside>
						<main className="col-md-9">
							{/* For categories */}
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">Ajouter une catégorie</strong>
								</header>
								<div className="card-body">
									<FileUpload
										values={values}
										setValues={setValues}
										loading={loading}
										setLoading={setLoading}
									/>
									<div className="mt-4">
										<CategoryForm
											values={values}
											setValues={setValues}
											loading={loading}
											handleSubmit={handleSubmit}
										/>
									</div>
									<div className="mt-5">
										<LocalSearch setValues={setValues} values={values} />
									</div>
									<div className="mt-3">{showCategories()}</div>
								</div>
							</article>
							{/* For subs */}
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">Ajouter une sous-catégorie</strong>
								</header>
								<div className="card-body">
									<div className="form-group">
										<label>Catégorie parente</label>
										<select
											name="category"
											className="form-control"
											onChange={(e) =>
												setSubValues({ ...subValues, parentCategory: e.target.value })}
										>
											<option value="">Veuillez selectionner une catégorie</option>
											{categories.length > 0 &&
												categories.map((category) => (
													<option key={category._id} value={category._id}>
														{category.name}
													</option>
												))}
										</select>
									</div>
									<SubCategoryForm
										subValues={subValues}
										setSubValues={setSubValues}
										handleSubSubmit={handleSubSubmit}
									/>
									<div className="mt-5">
										<LocalSearch setValues={setSubValues} values={subValues} />
									</div>
									<div className="mt-3">{showSubs()}</div>
								</div>
							</article>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default CategoriesAndSubsManagement;
