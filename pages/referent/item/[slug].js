import React, { useState } from 'react';
import { getCategories, getCategorySubs } from '../../../actions/category';
import { getSingleItem, updateItem } from '../../../actions/item';
import Header from '../../../components/header/Header';
import Navbar from '../../../components/header/Navbar';
import Layout from '../../../components/Layout';
import { useSelector } from 'react-redux';
import FileUpload from '../../../components/FileUpload';
import ItemUpdateForm from '../../../components/referent/forms/ItemUpdateForm';
import { toast } from 'react-toastify';
import Router from 'next/router';
import ReferentProtected from '../../../components/auth/ReferentProtected';

const ReferentItemUpdatePage = ({ item, subCategoriesOptions, subCategoriesIds, params, categoriesFromDB }) => {
	const { user } = useSelector((state) => ({ ...state }));

	const [ values, setValues ] = useState({
		title: item.title,
		description: item.description,
		category: item.category,
		categories: categoriesFromDB,
		subs: item.subs,
		images: item.images,
		provider_name: item.provider_name,
		provider_phone_number: item.provider_phone_number,
		provider_address: item.provider_address,
		// availability: '',
		item_type: item.item_type
	});

	const [ loading, setLoading ] = useState(false);
	const [ subOptions, setSubOptions ] = useState(subCategoriesOptions);
	const [ arrayOfSubIds, setArrayOfSubIds ] = useState(subCategoriesIds);

	const {
		title,
		description,
		category,
		categories,
		subs,
		images,
		provider_name,
		provider_address,
		provider_phone_number,
		item_type
	} = values;

	// useEffect(() => {
	// 	if (user && user.token) {
	// 		loadCategories();
	// 	}
	// }, []);

	// const loadCategories = () => {
	// 	getCategories()
	// 		.then((res) => {
	// 			setValues({ ...values, categories: res.data });
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	const loadProduct = () => {
		getSingleItem(params.slug)
			.then((p) => {
				setValues({ ...values, ...p.data });
				getCategorySubs(p.data.category._id)
					.then((res) => {
						setSubOptions(res.data);
					})
					.catch((err) => {
						console.log(err);
					});
				let arr = [];
				p.data.subs.map((s) => {
					arr.push(s._id);
				});

				setArrayOfSubIds((prev) => arr);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleCategoryChange = (e) => {
		setValues({ ...values, category: e.target.value, subs: [] });
		getCategorySubs(e.target.value)
			.then((res) => {
				setSubOptions(res.data);
			})
			.catch((err) => {
				console.log(err);
			});

		if (item.category._id === e.target.value) {
			loadProduct();
		} else {
			setArrayOfSubIds([]);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		values.subs = arrayOfSubIds;
		// setValues({ ...values, subs: arrayOfSubIds });

		console.log(values);
		setLoading(true);

		if (
			!title ||
			!description ||
			!category ||
			images.length < 1 ||
			!provider_name ||
			!provider_phone_number ||
			!provider_address ||
			!item_type
		) {
			setLoading(false);
			toast.error('Vous devez remplir tous les champs');
			return;
		}

		if (user && user.token) {
			updateItem(user.token, params.slug, values)
				.then((res) => {
					setLoading(false);
					Router.push('/referent/all-products-services');
					toast.success(`L'article a bien été modifier`);
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
					toast.error(
						"Oops! Une erreur est survenue lors de la modification de l'article. Veuillez réessayer"
					);
					return;
				});
		}
	};

	return (
		<React.Fragment>
			<Layout>
				<ReferentProtected>
					<b className="screen-overlay" />
					<header className="section-header">
						<Header />
						<Navbar />
					</header>
					<section className="section-pagetop bg-light">
						<div className="container">
							<h2 className="title-page">Modification</h2>
						</div>
					</section>
					<section className="section-content bg-white padding-y">
						<div className="container">
							<div>
								<FileUpload
									values={values}
									setValues={setValues}
									loading={loading}
									setLoading={setLoading}
								/>
							</div>
							<ItemUpdateForm
								values={values}
								setValues={setValues}
								handleChange={handleChange}
								handleSubmit={handleSubmit}
								handleCategoryChange={handleCategoryChange}
								subOptions={subOptions}
								arrayOfSubIds={arrayOfSubIds}
								setArrayOfSubIds={setArrayOfSubIds}
							/>
						</div>
					</section>
				</ReferentProtected>
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getSingleItem(params.slug).then((res) => {
		return getCategorySubs(res.data.category._id).then((response) => {
			return getCategories().then((result) => {
				let arr = [];
				res.data.subs.map((sub) => {
					arr.push(sub._id);
				});
				return {
					props: {
						item: res.data,
						subCategoriesOptions: response.data,
						subCategoriesIds: arr,
						categoriesFromDB: result.data,
						params
					}
				};
			});
		});
	});
}

export default ReferentItemUpdatePage;
