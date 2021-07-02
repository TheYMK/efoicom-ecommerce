import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';
import { getRelatedItems, getSingleItem, itemStarRating } from '../../actions/item';
import { getSingleReferentByEmail } from '../../actions/user';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import SingleItemDetails from '../../components/items/SingleItemDetails';
import Layout from '../../components/Layout';
import { useSelector } from 'react-redux';

const SingleItemPage = ({ itemFromDB, params, relatedItems, referent_info, router }) => {
	const [ vals, setVals ] = useState({
		item: itemFromDB,
		star: 0,
		comment: '',
		itemID: ''
	});

	const { user } = useSelector((state) => ({ ...state }));

	const { item, star, comment, itemID } = vals;

	useEffect(
		() => {
			if (item.ratings && user) {
				let existingRatingObject = item.ratings.find(
					(rating) => rating.postedBy.toString() === user._id.toString()
				);

				if (existingRatingObject !== undefined) {
					setVals({ ...vals, star: existingRatingObject.star, comment: existingRatingObject.comment });
				}
			}
		},
		[ user ]
	);

	const head = () => (
		<Head>
			<title>Bangwé La Massiwa | {itemFromDB.title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
			<meta name="description" content={`${itemFromDB.description}`} />
			<link rel="canonical" href={`${DOMAIN}/item/${itemFromDB.slug}`} />
			<meta property="og:title" content={`${itemFromDB.title}`} />
			<meta property="og:description" content={`${itemFromDB.description}`} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${DOMAIN}/item/${itemFromDB.slug}`} />
			<meta property="og:site_name" content="Bangwé La Massiwa" />
			<meta property="og:image" content={`${DOMAIN}/static/images/seo.png`} />
			<meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seo.png`} />
			<meta property="og:image:type" content="image/png" />
			<meta property="fb:app_id" content={`${FB_APP_ID}`} />
		</Head>
	);

	const onStarClick = (newRating, id) => {
		setVals({ ...vals, star: newRating, itemID: id });
	};

	const loadSingleItem = () => {
		getSingleItem(params.slug)
			.then((res) => {
				setVals = { ...vals, item: res.data };
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSubmitRating = () => {
		itemStarRating(user.token, itemID, { star, comment })
			.then((res) => {
				loadSingleItem();
			})
			.catch((err) => {
				console.log(err);
			});
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
				<Breadcrumb
					category_name={item.category.name}
					category_id={item.category._id}
					item_title={item.title}
				/>
				<SingleItemDetails
					item={item}
					relatedItems={relatedItems}
					referent_info={referent_info}
					onStarClick={onStarClick}
					handleSubmitRating={handleSubmitRating}
					vals={vals}
					setVals={setVals}
				/>
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
						itemFromDB: res.data,
						relatedItems: res2.data,
						referent_info: res3.data,
						params
					}
				};
			});
		});
	});
}

export default withRouter(SingleItemPage);
