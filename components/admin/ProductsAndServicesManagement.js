import React, { useEffect, useState } from 'react';
import { getAllItems, removeItem } from '../../actions/item';
import AdminViewItemDialog from '../dialogs/AdminViewItemDialog';
import AdminMenu from './AdminMenu';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import NoData from '../../components/indicators/NoData';

const ProductsAndServicesManagement = () => {
	const { user } = useSelector((state) => ({ ...state }));

	const [ allProducts, setAllProducts ] = useState([]);
	const [ allServices, setAllServices ] = useState([]);
	const [ openViewItemDialog, setOpenViewItemDialog ] = useState(false);
	const [ currentItem, setCurrentItem ] = useState({});

	useEffect(() => {
		loadItems();
	}, []);

	const loadItems = () => {
		getAllItems().then((res) => {
			setAllProducts(res.data.allApprovedProducts);
			setAllServices(res.data.allApprovedServices);
		});
	};

	const showProducts = () => (
		<div className="table-responsive" style={{ height: '500px' }}>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Titre</th>
						<th>Categorie</th>
						<th>Sous-catégorie</th>
						<th>Référent</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{/* 1 */}
					{allProducts.map((product) => (
						<tr key={product._id}>
							<td>{product.title}</td>
							<td>
								<span className="badge rounded-pill bg-success">{product.category.name}</span>
							</td>
							<td>
								{product.subs.map((sub) => (
									<span key={sub._id} className="mr-2 badge rounded-pill bg-primary">
										{sub.name}
									</span>
								))}
							</td>
							<td>{product.referent_email}</td>
							<td>
								<div className="dropdown d-inline-block">
									<button data-toggle="dropdown" className="dropdown-toggle btn btn-secondary">
										Cliquer ici
									</button>
									<div className="dropdown-menu dropdown-menu-right">
										<button
											className="dropdown-item"
											onClick={(e) => handleOpenViewItemDialog(product)}
										>
											Voir l'article
										</button>
										<Link href={`/admin/item/${product.slug}`}>
											<a className="dropdown-item">Modifer</a>
										</Link>

										<button
											className="dropdown-item"
											onClick={(e) => handleRemoveItem(product.slug)}
										>
											Supprimer
										</button>
									</div>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);

	const showServices = () => (
		<div className="table-responsive" style={{ height: '500px' }}>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Titre</th>
						<th>Categorie</th>
						<th>Sous-catégorie</th>
						<th>Référent</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{/* 1 */}
					{allServices.map((service) => (
						<tr key={service._id}>
							<td>{service.title}</td>
							<td>
								<span className="badge rounded-pill bg-success">{service.category.name}</span>
							</td>
							<td>
								{service.subs.map((sub) => (
									<span key={sub._id} className="mr-2 badge rounded-pill bg-primary">
										{sub.name}
									</span>
								))}
							</td>
							<td>{service.referent_email}</td>
							<td>
								<div className="dropdown d-inline-block">
									<button data-toggle="dropdown" className="dropdown-toggle btn btn-secondary">
										Cliquer ici
									</button>
									<div className="dropdown-menu dropdown-menu-right">
										<button
											className="dropdown-item"
											onClick={(e) => handleOpenViewItemDialog(service)}
										>
											Voir l'article
										</button>
										<Link href={`/admin/item/${service.slug}`}>
											<a className="dropdown-item">Modifer</a>
										</Link>

										<button
											className="dropdown-item"
											onClick={(e) => handleRemoveItem(service.slug)}
										>
											Supprimer
										</button>
									</div>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);

	const handleOpenViewItemDialog = (item) => {
		setCurrentItem(item);
		setOpenViewItemDialog(true);
	};
	const handleCloseViewItemDialog = () => {
		setOpenViewItemDialog(false);
		setCurrentItem({});
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

	return (
		<React.Fragment>
			<AdminViewItemDialog open={openViewItemDialog} handleClose={handleCloseViewItemDialog} item={currentItem} />

			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<AdminMenu pageLocation="products_and_services" />
						</aside>
						<main className="col-md-9">
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">
										Tous les produits{' '}
										{allProducts !== null && allProducts.length === 0 ? <NoData /> : ''}
									</strong>
								</header>
								<div className="card-body">{showProducts()}</div>
							</article>
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">
										Tous les services{' '}
										{allServices !== null && allServices.length === 0 ? <NoData /> : ''}
									</strong>
								</header>
								<div className="card-body">{showServices()}</div>
							</article>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default ProductsAndServicesManagement;
