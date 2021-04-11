import React, { useEffect, useState } from 'react';
import RelatedItems from './RelatedItems';
import { useSelector, useDispatch } from 'react-redux';
import ContactReferentDialog from '../dialogs/ContactReferentDialog';
import { getCurrentUser } from '../../actions/auth';
import { toast } from 'react-toastify';
import Router from 'next/router';
import StarRating from 'react-star-ratings';
import { contactReferent } from '../../actions/form';
import { addItemToWishlist, getUserWishlistCount } from '../../actions/user';
import RatingDialog from '../dialogs/RatingDialog';
import { showAverage } from '../../actions/rating';
import { Divider } from '@material-ui/core';

const SingleItemDetails = ({ item, relatedItems, referent_info, onStarClick, handleSubmitRating, vals, setVals }) => {
	const {
		title,
		referent_email,
		description,
		category,
		subs,
		images,
		provider_name,
		provider_phone_number,
		provider_address,
		item_type,
		provider_island,
		isRecommended
	} = item;

	const { star, comment } = vals;

	const [ loading, setLoading ] = useState(false);
	const [ selectedImage, setSelectedImage ] = useState(images[0]);
	const [ openContactForm, setOpenContactForm ] = useState(false);
	const { user } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();
	const [ values, setValues ] = useState({
		ref_email: referent_info.email,
		usr_email: '',
		usr_phone: '',
		usr_name: '',
		subject: '',
		message: ''
	});

	const handleOpenContactForm = (e) => {
		if (user && user.token) {
			getCurrentUser(user.token)
				.then((res) => {
					setValues({
						...values,
						usr_email: res.data.email,
						usr_phone: res.data.phone_number,
						usr_name: res.data.name
					});
					setOpenContactForm(true);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			toast.error(
				'Vous devez avoir un compte et être connecter avant de pouvoir rentrer en contact avec un référent'
			);
			setInterval(() => {
				Router.push('/auth/login');
			}, 3000);
		}
	};

	const handleCloseContactForm = () => {
		setOpenContactForm(false);
	};

	const handleSubmitContactForm = () => {
		// console.table(values);
		setLoading(true);
		contactReferent(values)
			.then((res) => {
				toast.success(
					'Votre message à bien été envoyé. Le référent de cet article vous contactera dans les plus brefs délai'
				);
				setOpenContactForm(false);
				setLoading(false);
			})
			.catch((err) => {
				toast.error(`Oops! Echec de l'envoi. Veuillez réessayer`);
				setLoading(false);
			});
	};

	const handleAddItemToWishlist = () => {
		if (user && user.token) {
			addItemToWishlist(user.token, item._id)
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

	return (
		<React.Fragment>
			<ContactReferentDialog
				open={openContactForm}
				handleClose={handleCloseContactForm}
				ref_name={referent_info.name}
				ref_phone={referent_info.phone_number}
				ref_city={referent_info.city}
				ref_island={referent_info.island}
				ref_address={referent_info.address}
				values={values}
				setValues={setValues}
				loading={loading}
				handleSubmitContactForm={handleSubmitContactForm}
			/>
			<section className="section-content bg-white padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-6">
							<div className="card">
								<article className="gallery-wrap">
									<div className="img-big-wrap">
										<div>
											{' '}
											<a>
												<img src={selectedImage.url} />
											</a>
										</div>
									</div>
									<div className="thumbs-wrap">
										{images.map((image, index) => (
											<a
												key={index}
												className="item-thumb"
												onClick={(e) => setSelectedImage(images[index])}
											>
												{' '}
												<img src={image.url} />
											</a>
										))}
										{/* <a href="#" className="item-thumb">
											{' '}
											<img src="images/items/15.jpg" />
										</a>
										<a href="#" className="item-thumb">
											{' '}
											<img src="images/items/15-1.jpg" />
										</a>
										<a href="#" className="item-thumb">
											{' '}
											<img src="images/items/15-2.jpg" />
										</a>
										<a href="#" className="item-thumb">
											{' '}
											<img src="images/items/15-1.jpg" />
										</a> */}
									</div>
								</article>
							</div>
						</aside>
						<main className="col-md-6">
							<article className="product-info-aside">
								<h2 className="title mt-3">{title}</h2>
								<div className="rating-wrap my-3">
									{item && item.ratings && item.ratings.length > 0 ? (
										showAverage(item)
									) : (
										<div className="rating-wrap mb-2">
											<ul className="rating-stars">
												{/* <li style={{ width: '100%' }} className="stars-active">
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
												</li> */}
												<li>
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
												</li>
											</ul>
											<div className="label-rating">(0)</div>
										</div>
									)}

									<div className="mt-2">
										<RatingDialog handleSubmitRating={handleSubmitRating} slug={item.slug}>
											<div>
												<StarRating
													name={item._id}
													numberOfStars={5}
													rating={star}
													changeRating={onStarClick}
													isSelectable={true}
													starRatedColor="orange"
													starDimension="40px"
												/>
												<form className="mt-3">
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															value={comment}
															placeholder="Comment..."
															onChange={(e) =>
																setVals({ ...vals, comment: e.target.value })}
														/>
													</div>
												</form>
											</div>
										</RatingDialog>
									</div>
								</div>

								{isRecommended && (
									<div className="mb-3">
										<i className="fas fa-clipboard-check text-success" /> Article recommandé
									</div>
								)}

								<p>{description}</p>

								<dl className="row">
									<dt className="col-sm-3">Fournisseur</dt>
									<dd className="col-sm-9">
										<a href="#">{provider_name}</a>
									</dd>

									<dt className="col-sm-3">Tel</dt>
									<dd className="col-sm-9">{provider_phone_number}</dd>

									<dt className="col-sm-3">Île</dt>
									<dd className="col-sm-9">{provider_island && provider_island.toUpperCase()}</dd>

									<dt className="col-sm-3">Adresse</dt>
									<dd className="col-sm-9">{provider_address}</dd>

									<dt className="col-sm-3">Categorie</dt>
									<dd className="col-sm-9">
										<span className="tag bg-success text-white">{category.name}</span>
									</dd>

									<dt className="col-sm-3">Sous-catégorie</dt>
									<dd className="col-sm-9">
										{subs.map((sub) => (
											<span key={sub._id} className="tag bg-info text-white mr-2">
												{sub.name}
											</span>
										))}
									</dd>
								</dl>

								<div className="form-row  mt-4">
									<div className="form-group col-md">
										<button className="btn  btn-primary mt-2" onClick={handleOpenContactForm}>
											<i className="fas fa-comments" />
											<span className="text">Contactez le référent</span>
										</button>

										<button
											className="btn btn-danger mt-2 ml-xl-2"
											onClick={handleAddItemToWishlist}
										>
											<i className="fas fa-heart" />{' '}
											<span className="text">Ajouter aux favoris</span>
										</button>
									</div>
								</div>
							</article>
						</main>
					</div>
				</div>
			</section>

			{/* Section 2 */}
			<section className="section-name padding-y bg">
				<div className="container">
					<div className="row">
						<div className="col-md-8 mt-2">
							<div className="card">
								<div className="card-body">
									<div className="card-title">
										<h5>Map here</h5>
										{JSON.stringify(referent_info)}
									</div>
									<div />
								</div>
							</div>
						</div>

						<aside className="col-md-4 mt-2">
							<div className="card">
								<div className="card-body">
									<div className="card-title">
										<h5 className="title-description mb-4">Voir aussi</h5>
									</div>

									{relatedItems.length > 0 ? (
										relatedItems.map((item) => <RelatedItems key={item._id} item={item} />)
									) : (
										<p>Aucun article</p>
									)}
								</div>
							</div>
						</aside>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default SingleItemDetails;
