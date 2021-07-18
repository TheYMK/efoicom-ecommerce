import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToWishlist, getUserWishlistCount } from '../../actions/user';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleItem = ({ imageSrc, item }) => {
	const { title, description, provider_name, provider_phone_number, provider_address } = item;
	const { user, lang } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const handleAddItemToWishlist = () => {
		if (user && user.token) {
			addItemToWishlist(user.token, item._id)
				.then((res) => {
					if (lang === 'fr') {
						toast.success('Article ajouté dans vos favoris.');
					}
					if (lang === 'en') {
						toast.success('Item added to your favorites.');
					}

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
					if (lang === 'fr') {
						toast.success(`Oops! Echec de l'opération. Veuillez réessayer !`);
					}
					if (lang === 'en') {
						toast.success('Oops ! Something wrong happened. Please try again !');
					}
				});
		} else {
			if (lang === 'fr') {
				toast.success(`Oops! Vous devez être connecter pour pouvoir ajouté un article dans vos favoris.`);
			}
			if (lang === 'en') {
				toast.success('Oops ! You must be connected first before adding an item to your favorites.');
			}
		}
	};

	return (
		<div className="col-md-3" data-aos="zoom-in">
			<div className="product-card product-card-profile">
				<div className="product-card-header product-card-header-image">
					<Link href={`/item/${item.slug}`}>
						<a>
							<img className="img" src={imageSrc} />
						</a>
					</Link>
					<div className="colored-shadow" />
				</div>
				<div className="product-card-body ">
					<h6 className="product-card-category text-info">{title}</h6>
					<p className="text-muted mt-3">
						<i className="fa fa-map-marker-alt" />{' '}
						{item.reference_zone &&
							item.reference_zone.name.charAt(0).toUpperCase() + item.reference_zone.name.slice(1)}{' '}
						(
						{item.reference_zone && item.reference_zone.island.toUpperCase()}
						)
					</p>
					<Link href={`/item/${item.slug}`}>
						<a className="btn btn-primary rounded-pill">
							<i className="fas fa-cart-plus" /> {lang === 'fr' ? `Voir l'article` : 'View item'}
						</a>
					</Link>

					<button className="btn btn-danger rounded-pill ml-3" onClick={handleAddItemToWishlist}>
						<i className="fas fa-heart" />
					</button>
				</div>

				<div className="product-inside">
					<div className="product-icon">
						<i className="material-icons">info_outline</i>
					</div>
					<div className="product-contents">
						<p>
							<strong className="text-dark">Description:</strong> <br /> {description && description.substring(0, 300)}
							...
						</p>
						<p>
							<strong className="text-dark">{lang === 'fr' ? 'Nom du fournisseur:' : 'Provider name:'}</strong> <br />{' '}
							{provider_name}
						</p>
						<p>
							<strong className="text-dark">Contact:</strong> <br /> {provider_phone_number}
						</p>
						<p>
							<strong className="text-dark">{lang === 'fr' ? 'Adresse:' : 'Address:'}</strong> <br /> {provider_address}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleItem;
