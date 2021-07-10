import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { toast } from 'react-toastify';
import Search from './Search';

const Header = () => {
	const dispatch = useDispatch();
	const { user, wishlistCount, lang } = useSelector((state) => ({ ...state }));

	const logout = () => {
		firebase.auth().signOut();

		dispatch({
			type: 'LOGOUT',
			payload: null
		});

		if (lang === 'fr') {
			toast.success('Vous avez été déconnecté!');
		}

		if (lang === 'en') {
			toast.success('You have been signed out!');
		}

		if (lang === 'km') {
			toast.success('Vous avez été déconnecté!');
		}

		setTimeout(() => {
			Router.push('/auth/login');
		}, 2000);
	};

	return (
		<React.Fragment>
			<section className="header-main border-bottom">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-2 col-lg-3 col-md-12">
							<a href="/" className="brand-wrap">
								<img
									className="logo"
									style={{ width: '220px', objectFit: 'cover' }}
									src="/static/images/logo.png"
								/>
								{/* <span className="logo">Massiwa Market</span> */}
							</a>
						</div>
						<div className="col-xl-6 col-lg-5 col-md-6">
							<Search />
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="widgets-wrap float-md-right">
								{/* <div className="widget-header mr-5">
									<p>
										<i className="fa fa-phone" /> +269 3725168
									</p>
								</div> */}
								{/* <div className="widget-header mr-3">
									<a href="#" className="widget-view">
										<div className="icon-area">
											<i className="fa fa-bell" />
											<span className="notify">1</span>
										</div>
										<small className="text">Notification</small>
									</a>
								</div> */}
								{user &&
								user.role !== 'sysadmin' && (
									<div className="widget-header mr-3">
										<Link
											href={
												user.role === 'customer' ? (
													'/customer/myfavorite'
												) : (
													'/referent/myfavorite'
												)
											}
										>
											<a className="widget-view">
												<div className="icon-area">
													<i className="fa fa-heart" />
													<span className="notify">{wishlistCount}</span>
												</div>
												<small className="text">
													{lang === 'fr' && 'Mes favoris'}
													{lang === 'en' && 'My favorites'}
													{lang === 'km' && 'Mes favoris'}
												</small>
											</a>
										</Link>
									</div>
								)}

								{!user && (
									<div className="widget-header">
										<Link href="/auth/login">
											<a className="widget-view">
												<div className="icon-area">
													<i className="fa fa-sign-in-alt" />
												</div>
												<small className="text">
													{lang === 'fr' && 'Se connecter'}
													{lang === 'en' && 'Sign in'}
													{lang === 'km' && 'Se connecter'}
												</small>
											</a>
										</Link>
									</div>
								)}

								{user &&
								user.role === 'customer' && (
									<div className="widget-header">
										<Link href="/customer/profile">
											<a className="widget-view">
												<div className="icon-area">
													<i className="fa fa-user" />
												</div>
												<small className="text">
													{lang === 'fr' && 'Mon profil'}
													{lang === 'en' && 'My profile'}
													{lang === 'km' && 'Mon profil'}
												</small>
											</a>
										</Link>
									</div>
								)}
								{user &&
								user.role === 'referent' && (
									<div className="widget-header">
										<Link href="/referent/profile">
											<a className="widget-view">
												<div className="icon-area">
													<i className="fa fa-user" />
												</div>
												<small className="text">
													{lang === 'fr' && 'Mon profil'}
													{lang === 'en' && 'My profile'}
													{lang === 'km' && 'Mon profil'}
												</small>
											</a>
										</Link>
									</div>
								)}
								{user &&
								user.role === 'sysadmin' && (
									<div className="widget-header">
										<Link href="/admin/dashboard">
											<a className="widget-view">
												<div className="icon-area">
													<i className="fa fa-user" />
												</div>
												<small className="text">
													{lang === 'fr' && 'Mon profil'}
													{lang === 'en' && 'My profile'}
													{lang === 'km' && 'Mon profil'}
												</small>
											</a>
										</Link>
									</div>
								)}
								{user && (
									<div className="widget-header" onClick={logout}>
										<div className="widget-view">
											<div className="icon-area">
												<i className="fa fa-sign-out-alt" />
											</div>
											<small className="text">
												{lang === 'fr' && 'Déconnexion'}
												{lang === 'en' && 'Sign out'}
												{lang === 'km' && 'Déconnexion'}
											</small>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Header;
