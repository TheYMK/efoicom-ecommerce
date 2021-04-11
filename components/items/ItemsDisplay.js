import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addItemToWishlist, getUserWishlistCount } from '../../actions/user';
import Link from 'next/link';

const ItemsDisplay = ({ items }) => {
	const { user } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();

	const handleAddItemToWishlist = (item_id) => {
		if (user && user.token) {
			addItemToWishlist(user.token, item_id)
				.then((res) => {
					toast.success('Article ajouté dans vos favoris');
					getUserWishlistCount(user.token)
						.then((response2) => {
							dispatch({
								type: 'SET_COUNT',
								payload: response2.data.count
							});
						})
						.catch((err) => {
							console.log(`----> Failed to get total count of items on user's wishlist: {Error: ${err}`);
						});
				})
				.catch((err) => {
					console.log(err);
					toast.error(`Oops! Echec de l'opération. Veuillez réessayer`);
				});
		} else {
			toast.error(`Oops! Vous devez être connecter pour pouvoir ajouté un article dans vos favoris`);
		}
	};

	const showItems = () => {
		return items.map((item, index) => (
			<article className="card card-product-list" key={item._id}>
				<div className="row no-gutters">
					<aside className="col-md-3">
						<a href="#" className="img-wrap">
							{item.isRecommended ? <span className="badge badge-success"> Recommandé </span> : ''}

							<img src={item.images[0].url} />
						</a>
					</aside>
					<div className="col-md-6">
						<div className="info-main">
							<a href="#" className="h5 title">
								{item.title}
							</a>
							<div className="rating-wrap mb-2">
								<ul className="rating-stars">
									<li style={{ width: '100%' }} className="stars-active">
										<i className="fa fa-star" /> <i className="fa fa-star" />
										<i className="fa fa-star" /> <i className="fa fa-star" />
										<i className="fa fa-star" />
									</li>
									<li>
										<i className="fa fa-star" /> <i className="fa fa-star" />
										<i className="fa fa-star" /> <i className="fa fa-star" />
										<i className="fa fa-star" />
									</li>
								</ul>
								<div className="label-rating">9/10</div>
							</div>
							<p className="mb-3">
								Categorie: <span className="tag bg-success text-white">{item.category.name}</span>
							</p>
							<p className="mb-3">
								Sous-Categorie:{' '}
								{item.subs.map((sub, i) => (
									<React.Fragment>
										<span className="tag bg-info text-white">{sub.name}</span>
									</React.Fragment>
								))}
							</p>
							<p>{item.description}</p>
						</div>
					</div>
					<aside className="col-sm-3">
						<div className="info-aside">
							{/* <div className="price-wrap">
								<span className="h5 price">$25.00-$40.00</span>
								<small className="text-muted">/per item</small>
							</div> */}
							{/* <small className="text-warning">Paid shipping</small> */}
							<p className="text-muted mt-3">
								Fournisseur: <strong>{item.provider_name}</strong>
							</p>
							<p className="text-muted mt-3">
								Tel: <strong>{item.provider_phone_number}</strong>
							</p>
							<p className="text-muted mt-3">
								Île: <strong>{item.provider_island && item.provider_island.toUpperCase()}</strong>
							</p>
							<p className="text-muted mt-3">
								Adresse: <strong>{item.provider_address}</strong>
							</p>

							<p className="mt-3">
								<Link href={`/item/${item.slug}`}>
									<a className="btn btn-sm btn-primary mr-2">
										{' '}
										<i className="fa fa-cart-plus" /> Voir l'article
									</a>
								</Link>

								<button
									className="btn btn-sm btn-danger"
									onClick={(e) => handleAddItemToWishlist(item._id)}
								>
									<i className="fa fa-heart" />
								</button>
							</p>
						</div>
					</aside>
				</div>
			</article>
		));
	};

	return (
		<main className="col-md-10">
			<header className="mb-3">
				<div className="form-inline">
					<strong className="mr-md-auto">{items.length} articles trouvés </strong>
				</div>
			</header>
			{showItems()}
			{/* <nav className="mb-4" aria-label="Page navigation sample">
				<ul className="pagination">
					<li className="page-item disabled">
						<a className="page-link" href="#">
							Previous
						</a>
					</li>
					<li className="page-item active">
						<a className="page-link" href="#">
							1
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							2
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							3
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							4
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							5
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							Next
						</a>
					</li>
				</ul>
			</nav>

			<div className="box text-center">
				<p>Did you find what you were looking for？</p>
				<a href="" className="btn btn-light">
					Yes
				</a>
				<a href="" className="btn btn-light">
					No
				</a>
			</div> */}
		</main>
	);
};

export default ItemsDisplay;
