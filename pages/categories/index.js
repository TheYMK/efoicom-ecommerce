import React, { useEffect, useState } from 'react';
import { getCategories, getCategorySubs } from '../../actions/category';
import { getSubs } from '../../actions/sub';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/Layout';

const AllCategoriesPage = ({ allCategories, allSubs }) => {
	const showCategorySubs = (id) => {
		let subs = [];

		allSubs.forEach(function(sub) {
			if (sub.parent === id) subs.push(sub);
		});

		return subs.map((sub) => (
			<li key={sub._id}>
				<a href="">{sub.name}</a>
			</li>
		));
	};

	return (
		<React.Fragment>
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
												<a href="#">{category.name}</a>
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

export default AllCategoriesPage;
