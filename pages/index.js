import React from 'react';
import Head from 'next/head';
import { DOMAIN, FB_APP_ID } from '../config';
import { withRouter } from 'next/router';
import Header from '../components/header/Header';
import Navbar from '../components/header/Navbar';
import Items from '../components/items/Items';
import Layout from '../components/Layout';
import Main from '../components/main/Main';
import Request from '../components/request/Request';
import Contact from '../components/contact/Contact';
import OurCategories from '../components/ourCategories/OurCategories';
import { getCategories } from '../actions/category';
import { getAllRecommendedItems } from '../actions/item';
import Blogs from '../components/blogs/Blogs';
import { getBlogsWithCategoriesAndTags } from '../actions/blog';
import Brands from '../components/brands/Brands';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = ({
	allCategories,
	allRecommendedProducts,
	allRecommendedServices,
	blogs,
	blogcategories,
	tags,
	totalBlogs,
	blogsLimit,
	blogsSkip,
	router
}) => {
	const { lang } = useSelector((state) => ({ ...state }));

	const head = () => (
		<Head>
			<title>{lang === 'fr' ? `Bangwé La Massiwa | Accueil` : `Bangwé La Massiwa | Home`}</title>
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

	return (
		<React.Fragment>
			{head()}
			<Layout>
				<b className="screen-overlay" />
				<header className="section-header">
					<Header />
					<Navbar />
				</header>
				<Main />
				<div className="container mt-0">
					<OurCategories allCategories={allCategories} />

					<Request />
					<Items items_type="products" items={allRecommendedProducts} />
					<Items items_type="services" items={allRecommendedServices} />
					<Blogs
						blogs={blogs}
						blogcategories={blogcategories}
						tags={tags}
						totalBlogs={totalBlogs}
						blogsLimit={blogsLimit}
						blogsSkip={blogsSkip}
					/>
					<Brands />
					{/* <FAQ /> */}
				</div>
				<Contact />
			</Layout>
		</React.Fragment>
	);
};

export async function getStaticProps({ params }) {
	let skip = 0;
	let limit = 4;

	return getCategories().then((res1) => {
		return getAllRecommendedItems().then((res2) => {
			return getBlogsWithCategoriesAndTags(skip, limit).then((res3) => {
				return {
					props: {
						allCategories: res1.data,
						allRecommendedProducts: res2.data.allRecommendedProducts,
						allRecommendedServices: res2.data.allRecommendedServices,
						blogs: res3.data.blogs,
						blogcategories: res3.data.blogcategories,
						tags: res3.data.tags,
						totalBlogs: res3.data.size,
						blogsLimit: limit,
						blogsSkip: skip
					},
					revalidate: 60 * 60
				};
			});
		});
	});
}

export default withRouter(HomePage);
