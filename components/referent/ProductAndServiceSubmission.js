import React, { useEffect, useState } from 'react';
import ReferentMenu from './ReferentMenu';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { createItem } from '../../actions/item';
import { getCategories, getCategorySubs } from '../../actions/category';
import ItemCreateForm from './forms/ItemCreateForm';
import { getAllZones } from '../../actions/zone';

const ProductAndServiceSubmission = () => {
	const { user } = useSelector((state) => ({ ...state }));

	const [ values, setValues ] = useState({
		title: '',
		description: '',
		category: '',
		categories: [],
		subs: [],
		images: [],
		provider_name: '',
		provider_phone_number: '',
		provider_address: '',
		// availability: '',
		item_type: ''
	});

	const {
		title,
		description,
		category,
		categories,
		subs,
		images,
		provider_name,
		provider_phone_number,
		provider_address,
		item_type
	} = values;

	const [ loading, setLoading ] = useState(false);
	const [ subOptions, setSubOptions ] = useState([]);
	const [ showSubs, setShowSubs ] = useState(false);

	useEffect(() => {
		loadCategories();
	}, []);

	const loadCategories = async () => {
		try {
			const c = await getCategories();
			return setValues({ ...values, categories: c.data });
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setLoading(true);

		if (
			!title ||
			!description ||
			!category ||
			subs.length < 1 ||
			images.length < 1 ||
			!provider_name ||
			!provider_phone_number ||
			!provider_address ||
			!item_type
		) {
			setLoading(false);
			toast.error('Vous devez remplir tous les champs!');
			return;
		}

		if (user && user.token) {
			try {
				createItem(user.token, values).then((res) => {
					setLoading(false);
					toast.success('Votre article a été soumis.');
					setTimeout(() => {
						window.location.reload();
					}, 2000);
				});
			} catch (err) {
				console.log(err);
				setLoading(false);
				toast.error('Oops! La soumission a echoué. Veuillez réessayer!');
			}
		}
	};
	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleCategoryChange = (e) => {
		setValues({ ...values, category: e.target.value, subs: [] });
		getCategorySubs(e.target.value)
			.then((res) => {
				setSubOptions(res.data);
				setShowSubs(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<section className="section-content padding-y">
			<div className="container">
				<div className="row">
					<aside className="col-md-3">
						<ReferentMenu pageLocation="submission" />
					</aside>
					<main className="col-md-9">
						<article className="card mb-4">
							<header className="card-header">
								<strong className="d-inline-block mr-3">Soumettre un produit ou un service</strong>
								<br />
								<small>
									Cette étape est très simple. Tout ce que vous avez à faire c'est de télécharger une
									ou plusieurs images de votre produit/service et le décrire. Cet article sera soumis
									à une évaluation. Il ne sera visible qu'une fois approuvé par l'équipe Bangwé La
									Massiwa.
								</small>
							</header>
							<div className="card-body mt-4">
								<div className="mt-3">
									<ItemCreateForm
										values={values}
										loading={loading}
										setLoading={setLoading}
										setValues={setValues}
										handleSubmit={handleSubmit}
										handleChange={handleChange}
										handleCategoryChange={handleCategoryChange}
										subOptions={subOptions}
										showSubs={showSubs}
									/>
								</div>
							</div>
						</article>
					</main>
				</div>
			</div>
		</section>
	);
};

export default ProductAndServiceSubmission;
