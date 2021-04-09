import React from 'react';
import { getRelatedItems, getSingleItem } from '../../actions/item';
import { getSingleReferentByEmail } from '../../actions/user';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import SingleItemDetails from '../../components/items/SingleItemDetails';
import Layout from '../../components/Layout';

const SingleItemPage = ({ item, params, relatedItems, referent_info }) => {
	return (
		<React.Fragment>
			<Layout>
				<b className="screen-overlay" />
				<header className="section-header">
					<Header />
					<Navbar />
				</header>
				<Breadcrumb category_name={item.category.name} item_title={item.title} />
				<SingleItemDetails item={item} relatedItems={relatedItems} referent_info={referent_info} />
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getSingleItem(params.slug).then((res) => {
		return getRelatedItems(res.data._id).then((res2) => {
			return getSingleReferentByEmail(res.data.referent_email).then((res3) => {
				return {
					props: {
						item: res.data,
						relatedItems: res2.data,
						referent_info: res3.data,
						params
					}
				};
			});
		});
	});
}

export default SingleItemPage;
