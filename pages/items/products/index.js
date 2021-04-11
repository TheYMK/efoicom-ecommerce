import React, { useState } from 'react';
import { getAllProductsByCount } from '../../../actions/item';
import Header from '../../../components/header/Header';
import Navbar from '../../../components/header/Navbar';
import Filters from '../../../components/items/Filters';
import ItemsDisplay from '../../../components/items/ItemsDisplay';
import Layout from '../../../components/Layout';

const AllProductsPage = ({ allProductsFromDB }) => {
	const [ values, setValues ] = useState({
		allProducts: allProductsFromDB
	});

	const { allProducts } = values;

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
						<div className="card mb-3">
							<div className="card-body">
								<ol className="breadcrumb float-left">
									<li className="breadcrumb-item">
										<a href="#">Accueil</a>
									</li>
									<li className="breadcrumb-item active">Tous les produits</li>
								</ol>
							</div>
						</div>
						<div className="row">
							{/* ASIDE */}
							<Filters />
							<ItemsDisplay items={allProducts} />
						</div>
					</div>
				</section>
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getAllProductsByCount(1000).then((res) => {
		return {
			props: {
				allProductsFromDB: res.data.allApprovedProducts
			}
		};
	});
}

export default AllProductsPage;
