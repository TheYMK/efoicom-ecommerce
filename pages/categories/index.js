import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';
import { getCategories, getCategorySubs } from '../../actions/category';
import { getSubs } from '../../actions/sub';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

const AllCategoriesPage = ({ allCategories, allSubs, router }) => {
	const head = () => (
		<Head>
			<title>Bangwé La Massiwa | Catégories</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta
				name="description"
				content="Bangwé La Massiwa est un marché national en ligne, où les gens se retrouvent pour fabriquer, vendre, acheter et collectionner des articles uniques."
			/>
			<link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
			<meta property="og:title" content={`Soutenons les créateurs indépendants`} />
			<meta
				property="og:description"
				content="Bangwé La Massiwa est un marché national en ligne, où les gens se retrouvent pour fabriquer, vendre, acheter et collectionner des articles uniques."
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
			<meta property="og:site_name" content="Bangwé La Massiwa" />
			<meta property="og:image" content={`${DOMAIN}/static/images/seo.png`} />
			<meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seo.png`} />
			<meta property="og:image:type" content="image/png" />
			<meta property="fb:app_id" content={`${FB_APP_ID}`} />
		</Head>
	);
	const dispatch = useDispatch();

	const showCategorySubs = (id) => {
		let subs = [];

		allSubs.forEach(function(sub) {
			if (sub.parent === id) subs.push(sub);
		});

		return subs.map((sub) => (
			<li key={sub._id}>
				<a href="#" onClick={() => handleClickSub(sub)}>
					{sub.name}
				</a>
			</li>
		));
	};

	const handleClickCategory = (id) => {
		dispatch({
			type: 'SET_FILTER',
			payload: { byCategory: [ id ], bySub: '', byType: 'all' }
		});

		Router.push('/items');
	};

	const handleClickSub = (sub) => {
		dispatch({
			type: 'SET_FILTER',
			payload: { byCategory: [], bySub: sub, byType: 'all' }
		});

		Router.push('/items');
	};

	return (
		<React.Fragment>
			{head()}
			<Layout>
				<b className="screen-overlay" />
				<header className="section-header">
					<Header />
					<Navbar />
				</header>
				<section className="section-content padding-y">
					<div className="container">
						<nav className="row">
							{allCategories.map((category) => (
								<div className="col-md-3" key={category._id}>
									<div className="card card-category">
										<div className="img-wrap">
											<img src={category.images[0].url} />
										</div>
										<div className="card-body">
											<h4 className="card-title">
												<a href="#" onClick={() => handleClickCategory(category._id)}>
													{category.name}
												</a>
											</h4>
											<ul className="list-menu">{showCategorySubs(category._id)}</ul>
										</div>
									</div>
								</div>
							))}
						</nav>
					</div>
				</section>
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getCategories().then((res) => {
		return getSubs().then((res2) => {
			return {
				props: {
					allCategories: res.data,
					allSubs: res2.data
				}
			};
		});
	});
}

export default withRouter(AllCategoriesPage);
