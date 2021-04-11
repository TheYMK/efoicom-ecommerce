import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../../actions/auth';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import CustomerMenu from './CustomerMenu';
import { getUserWishlist, getUserWishlistCount, removeFromWishlist } from '../../actions/user';
import FavoriteItem from '../items/FavoriteItem';
import { toast } from 'react-toastify';
import ReferentMenu from '../referent/ReferentMenu';

const MyFavorite = () => {
	const { user } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();
	// const [ currentUser, setCurrentUser ] = useState({});
	const [ wishlist, setWishlist ] = useState([]);

	useEffect(() => {
		if (user && user.token) {
			// loadUserInfo();
			loadWishlist();
		}
	}, []);

	// const loadUserInfo = () => {
	// 	getCurrentUser(user.token)
	// 		.then((res) => {
	// 			setCurrentUser(res.data);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	const loadWishlist = () => {
		getUserWishlist(user.token)
			.then((res) => {
				setWishlist(res.data.wishlist);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleRemoveItem = (item_id) => {
		if (user && user.token) {
			removeFromWishlist(user.token, item_id)
				.then((res) => {
					toast.success(`L'article a été retiré de vos favoris`);
					getUserWishlistCount(user.token)
						.then((response2) => {
							dispatch({
								type: 'SET_COUNT',
								payload: response2.data.count
							});
							loadWishlist();
						})
						.catch((err) => {
							console.log(`----> Failed to get total count of items on user's wishlist: {Error: ${err}`);
						});
				})
				.catch((err) => {
					console.log(err);
					toast.success(`Echec de l'opération. Veuillez réessayer`);
				});
		}
	};

	return (
		<React.Fragment>
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							{user && user.role === 'customer' && <CustomerMenu pageLocation="myfavorite" />}
							{user && user.role === 'referent' && <ReferentMenu pageLocation="myfavorite" />}
						</aside>
						<main className="col-md-9">
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">Mes Favoris</strong>
								</header>
								<div className="card-body">
									<div className="row">
										{wishlist.map((item, index) => (
											<FavoriteItem
												key={index}
												imageSrc={item.images[0].url}
												item={item}
												handleRemoveItem={handleRemoveItem}
											/>
										))}
									</div>
								</div>
							</article>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default MyFavorite;
