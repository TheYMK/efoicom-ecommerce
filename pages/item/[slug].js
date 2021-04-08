import React from 'react';
import { getSingleItem } from '../../actions/item';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import SingleItemDetails from '../../components/items/SingleItemDetails';
import Layout from '../../components/Layout';

const SingleItemPage = ({ item, params }) => {
	return (
		<React.Fragment>
			<Layout>
				<b className="screen-overlay" />
				<header className="section-header">
					<Header />
					<Navbar />
				</header>
				<Breadcrumb category_name={item.category.name} item_title={item.title} />
				<SingleItemDetails item={item} />
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getSingleItem(params.slug).then((res) => {
		return {
			props: {
				item: res.data,
				params
			}
		};
	});
}

export default SingleItemPage;
