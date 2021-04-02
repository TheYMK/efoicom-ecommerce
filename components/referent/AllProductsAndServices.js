import React, { useEffect, useState } from 'react';
import ReferentMenu from './ReferentMenu';
import { useSelector } from 'react-redux';
import { getAllItemsForReferent, removeItem } from '../../actions/item';
import SingleEditableItem from '../items/SingleEditableItem';
import { toast } from 'react-toastify';

const AllProductsAndServices = () => {
	const { user } = useSelector((state) => ({ ...state }));

	const [ allApprovedProducts, setAllApprovedProducts ] = useState([]);
	const [ allApprovedServices, setAllApprovedServices ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ products_size, setProductsSize ] = useState(0);
	const [ services_size, setServicesSize ] = useState(0);

	const [ productslimit, setProductslimit ] = useState(3);
	const [ productskip, setProductskip ] = useState(0);

	const [ serviceslimit, setServiceslimit ] = useState(3);
	const [ serviceskip, setServiceskip ] = useState(0);

	useEffect(() => {
		if (user && user.token) {
			loadProductsAndServices();
		}
	}, []);

	const loadProductsAndServices = () => {
		getAllItemsForReferent(user.token, productslimit, productskip, serviceslimit, serviceskip)
			.then((res) => {
				setAllApprovedProducts(res.data.allApprovedProducts);
				setAllApprovedServices(res.data.allApprovedServices);
				setProductsSize(res.data.products_size);
				setServicesSize(res.data.services_size);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const showProducts = () => {
		return allApprovedProducts.map((item) => (
			<SingleEditableItem key={item._id} item={item} handleRemoveItem={handleRemoveItem} />
		));
	};

	const showServices = () => {
		return allApprovedServices.map((item) => (
			<SingleEditableItem key={item._id} item={item} handleRemoveItem={handleRemoveItem} />
		));
	};

	const loadMoreProductsButton = () => {
		return (
			products_size > 0 &&
			products_size >= productslimit && (
				<button className="btn btn-secondary" onClick={loadMoreProducts}>
					{loading ? 'Chargement...' : 'Charger plus'}
				</button>
			)
		);
	};

	const handleRemoveItem = (slug) => {
		const result = window.confirm('Êtes-vous sûr de vouloir supprimer cet article?');

		if (result) {
			if (user && user.token) {
				removeItem(user.token, slug)
					.then((res) => {
						toast.success("L'article a été supprimer");
						setTimeout(() => {
							window.location.reload();
						}, 2000);
					})
					.catch((err) => {
						toast.error("L'article n'a pas pu être supprimer. Veuillez réessayer");
						console.log(err);
					});
			}
		}
	};

	const loadMoreProducts = () => {
		let toSkip = productskip + productslimit;
		setLoading(true);
		if (user && user.token) {
			getAllItemsForReferent(user.token, productslimit, toSkip, serviceslimit, serviceskip)
				.then((res) => {
					setAllApprovedProducts([ ...allApprovedProducts, ...res.data.allApprovedProducts ]);
					// setAllApprovedServices(res.data.allApprovedServices);
					setProductsSize(res.data.products_size);
					setProductskip(toSkip);
					setLoading(false);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	const loadMoreServicesButton = () => {
		return (
			services_size > 0 &&
			services_size >= serviceslimit && (
				<button className="btn btn-secondary" onClick={loadMoreServices}>
					{loading ? 'Chargement...' : 'Charger plus'}
				</button>
			)
		);
	};

	const loadMoreServices = () => {
		let toSkip = serviceskip + serviceslimit;
		setLoading(true);
		if (user && user.token) {
			getAllItemsForReferent(user.token, productslimit, productskip, serviceslimit, toSkip)
				.then((res) => {
					// setAllApprovedProducts([ ...allApprovedProducts, ...res.data.allApprovedProducts ]);
					setAllApprovedServices([ ...allApprovedServices, ...res.data.allApprovedServices ]);
					setServicesSize(res.data.services_size);
					setServiceskip(toSkip);
					setLoading(false);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<section className="section-content padding-y">
			<div className="container">
				<div className="row">
					<aside className="col-md-3">
						<ReferentMenu pageLocation="allproducts" />
					</aside>
					<main className="col-md-9">
						<article className="card mb-4">
							<header className="card-header">
								<strong className="d-inline-block mr-3">Tous vos produits</strong>
							</header>
							<div className="card-body">
								<div className="container">
									<div className="row">{showProducts()}</div>
									<div className="text-center">{loadMoreProductsButton()}</div>
								</div>
							</div>
						</article>
						<article className="card mb-4">
							<header className="card-header">
								<strong className="d-inline-block mr-3">Tous vos services</strong>
							</header>
							<div className="card-body">
								<div className="container">
									<div className="row">{showServices()}</div>
									<div className="text-center">{loadMoreServicesButton()}</div>
								</div>
							</div>
						</article>
					</main>
				</div>
			</div>
		</section>
	);
};

export default AllProductsAndServices;
