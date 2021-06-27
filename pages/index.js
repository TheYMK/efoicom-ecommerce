import React from 'react';
import Head from 'next/head';
import Ad from '../components/ads/Ad';
import Deal from '../components/deal/Deal';
import Header from '../components/header/Header';
import Navbar from '../components/header/Navbar';
import Items from '../components/items/Items';
import Layout from '../components/Layout';
import Main from '../components/main/Main';
import Regions from '../components/regions/Regions';
import Request from '../components/request/Request';
import SectionOne from '../components/sections/SectionOne';
import SectionTwo from '../components/sections/SectionTwo';
import Contact from '../components/contact/Contact';
import OurCategories from '../components/ourCategories/OurCategories';
import { getCategories } from '../actions/category';
import { getAllRecommendedItems } from '../actions/item';
import Blogs from '../components/blogs/Blogs';
import { getBlogsWithCategoriesAndTags } from '../actions/blog';
import Brands from '../components/brands/Brands';

const HomePage = ({
	allCategories,
	allRecommendedProducts,
	allRecommendedServices,
	blogs,
	blogcategories,
	tags,
	totalBlogs,
	blogsLimit,
	blogsSkip
}) => {
	const head = () => (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
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
				</div>
				<Contact />
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
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
					}
				};
			});
		});
	});
}

export default HomePage;
