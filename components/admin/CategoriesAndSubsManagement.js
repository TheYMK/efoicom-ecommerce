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
import ConfirmDeleteDiaog from '../dialogs/ConfirmDeleteDialog';

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
	const [ openConfirmDialog, setOpenConfirmDialog ] = useState(false);

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
				`Tous les champs doivent être remplis. N'oubliez pas d'inclure une image représentant la catégorie.`
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
					toast.success(`La catégorie "${res.data.name}" a été ajoutée.`);
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
					toast.error(`Oops! La categorie n'a pas été créée. Veuillez réessayer.`);
				});
		}
	};

	const handleRemove = async (c) => {
		if (user && user.token) {
			setLoading(true);
			removeCategory(user.token, c.slug)
				.then((res) => {
					setLoading(false);
					toast.success(`La catégorie ${res.data.name} a bien été supprimée.`);
					setOpenConfirmDialog(false);
					setReload(!reload);
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
					toast.error(`Oops! La catégorie n'a pas été supprimée. Veuillez réessayer.`);
				});
		}
	};

	const handleOpenConfirmDialog = (category) => {
		setCurrentCategory(category);
		setOpenConfirmDialog(true);
	};

	const handleCloseConfirmDialog = () => {
		setCurrentCategory({
			name: '',
			slug: '',
			images: []
		});

		setOpenConfirmDialog(false);
	};

	const showCategories = () => {
		return categories.filter(searched(keyword)).map((category) => (
			<div className="alert alert-secondary" key={category._id}>
				{category.name}
				<span className="float-right">
					<button className="btn btn-sm btn-danger" onClick={(e) => handleOpenConfirmDialog(category)}>
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
					toast.success(`Modification effectuée.`);
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
					toast.error(`Oops! La catégorie n'a pas été modifiée. Veuillez réessayer.`);
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
					toast.success(`Modification effectuée.`);
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
					toast.error(`Oops! La catégorie n'a pas été modifiée. Veuillez réessayer.`);
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
					toast.success(`La sous-catégorie "${res.data.name}" a été ajoutée.`);
				})
				.catch((err) => {
					console.log(err);
					setSubValues({ ...subValues, subLoading: false });
					toast.error(`Oops! La sous-catégorie n'a pas été créée. Veuillez réessayer.`);
				});
		}
	};

	const handleSubRemove = (slug) => {
		let answer = window.confirm('Êtes-vous sûr de vouloir supprimer cette sous-catégorie?');
		if (answer) {
			if (user && user.token) {
				setSubValues({ ...subValues, subLoading: true });
				removeSub(user.token, slug)
					.then((res) => {
						setSubValues({ ...subValues, subLoading: false });
						toast.success(`La sous-catégorie ${res.data.name} a bien été supprimée.`);
						setReload(!reload);
					})
					.catch((err) => {
						console.log(err);
						setSubValues({ ...subValues, subLoading: false });
						toast.error(`Oops! La sous-categorie n'a pas été supprimée. Veuillez réessayer.`);
					});
			}
		}
	};

	const showSubs = () => {
		return subs.filter(searched(subValues.keyword)).map((sub) => (
			<div className="alert alert-secondary" key={sub._id}>
				{sub.name}
				<span className="float-right">
					<button className="btn btn-sm btn-danger" onClick={() => handleSubRemove(sub.slug)}>
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
			<ConfirmDeleteDiaog
				open={openConfirmDialog}
				handleClose={handleCloseConfirmDialog}
				element={currentCategory}
				action={handleRemove}
				text={`Êtes-vous sûr de vouloir supprimer cette catégorie?`}
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
								<header className="card-header pure-text">
									<strong className="d-inline-block mr-3">Ajouter une catégorie</strong>
									<br />
									<small>
										Les produits ou services qui seront mis en ligne sur la plateforme doivent être
										catégorisés pour les rendre plus facilement accessibles aux visiteurs.
									</small>
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
								<header className="card-header pure-text">
									<strong className="d-inline-block mr-3">Ajouter une sous-catégorie</strong>
									<br />
									<small>
										Chaque catégorie doit être accompagnée d'une ou plusieurs sous-catégorie(s).
										Ceci dans le but de faciliter les recherches de produits ou services.
									</small>
								</header>
								<div className="card-body">
									<div className="form-group">
										<label>
											Catégorie parente <small style={{ color: 'red' }}>*</small>
										</label>
										<select
											name="category"
											className="form-control"
											onChange={(e) =>
												setSubValues({ ...subValues, parentCategory: e.target.value })}
										>
											<option value="">Veuillez sélectionner une catégorie</option>
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
