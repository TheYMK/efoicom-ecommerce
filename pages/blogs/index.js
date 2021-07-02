import React, { useState } from 'react';
import Head from 'next/head';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';
import { fetchBlogsByFilter, getBlogs } from '../../actions/blog';
import { getBlogCategories } from '../../actions/blogcategory';
import { getCategories } from '../../actions/category';
import BlogItem from '../../components/blogs/BlogItem';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/Layout';

const BlogsPage = ({ allBlogs, allCategories, router }) => {
	const head = () => (
		<Head>
			<title>Bangwé La Massiwa | Forum de discussion</title>
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

	const [ values, setValues ] = useState({
		blogs: allBlogs,
		blogcategories: allCategories
	});
	const [ selectedCategory, setSelectedCategory ] = useState('all');
	const [ current, setCurrent ] = useState('all');

	const { blogs, blogcategories } = values;

	const fetchBlogs = (arg) => {
		fetchBlogsByFilter(arg)
			.then((res) => {
				setValues({ ...values, blogs: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleBlogCategoryChange = (blogcategory) => {
		setCurrent(blogcategory);
		setSelectedCategory(blogcategory);
		fetchBlogs({ blogcategory: blogcategory });
	};

	const showAllBlogs = () => {
		return blogs.map((b, i) => <BlogItem blog={b} key={i} />);
	};

	const showCategories = () => (
		<article className="filter-group">
			<h6 className="title">Filtrer par catégories</h6>
			<div className="filter-content collapse show">
				<div className="inner">
					<label className="checkbox-btn mr-2">
						<input
							type="radio"
							name="blogcategory"
							value={'all'}
							checked={current === 'all'}
							onChange={() => handleBlogCategoryChange('all')}
						/>
						<span className="btn btn-light"> Toutes les categories </span>
					</label>
					{blogcategories.map((c, i) => (
						<label className="checkbox-btn mr-2" key={c._id}>
							<input
								type="radio"
								name="blogcategory"
								value={c._id}
								checked={current === c}
								onChange={() => handleBlogCategoryChange(c)}
							/>
							<span className="btn btn-light"> {c.name} </span>
						</label>
					))}
				</div>
			</div>
		</article>
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
				<section className="section-pagetop bg-light">
					<div className="container">
						<h2 className="title-page">Forum de discussion</h2>
					</div>
				</section>
				<div className="card">
					<div className="card-body d-flex">
						<div className="" role="group" aria-label="Filter by">
							{showCategories()}
						</div>
					</div>
				</div>
				<section className="section-content bg-white padding-y">
					<div className="container">
						<div className="row">{showAllBlogs()}</div>
					</div>
				</section>
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getBlogs().then((res1) => {
		return getBlogCategories().then((res2) => {
			return {
				props: {
					allBlogs: res1.data,
					allCategories: res2.data
				}
			};
		});
	});
}

export default withRouter(BlogsPage);
