import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';
import { getRelatedBlogs, getSingleBlog } from '../../actions/blog';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/Layout';
import renderHTML from 'react-render-html';
import moment from 'moment';
import BlogItem from '../../components/blogs/BlogItem';
import DisqusThread from '../../components/disqus/DisqusThread';

const SingleBlogPage = ({ blog, params, router }) => {
	const head = () => (
		<Head>
			<title>Bangwé La Massiwa | {blog.title}</title>
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

	const [ relatedBlogs, setRelatedBlogs ] = useState([]);

	useEffect(() => {
		loadRelatedBlog();
	}, []);

	const loadRelatedBlog = async () => {
		try {
			const blogs = await getRelatedBlogs(blog);
			setRelatedBlogs(blogs.data);
		} catch (err) {
			console.log(err);
		}
	};

	const showRelatedBlogs = () => {
		return relatedBlogs.map((r, i) => <BlogItem blog={r} key={i} />);
	};

	// Disqus
	const showComments = () => {
		// console.log(blog.title);
		return (
			<div>
				<DisqusThread id={blog._id} title={blog.title} path={`/blog/${blog.slug}`} />
			</div>
		);
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
				{/* <Breadcrumb category_name={'cate1'} item_title={'publication 1'} /> */}
				<div className="container p-5">
					<section className="jumbotron" style={{ backgroundImage: `url("${blog.image}")` }}>
						<div className="container">
							<div className="text-center">
								<p>{blog.title}</p>
							</div>
						</div>
					</section>
					<div className="card">
						<div className="card-body" style={{ overflow: 'hidden' }}>
							<div className="text-center mb-5">
								<div>Categorie</div>
								{blog.blogcategories.map((category, index) => (
									<button className="tag bg-primary text-white" key={index}>
										{category.name}
									</button>
								))}
							</div>
							{renderHTML(blog.body)}
							<hr />
							<div className="container pt-5">{showComments()}</div>
						</div>
					</div>
				</div>

				<div className="container py-3">
					<hr />
					<h4 className="pt-5 pb-5 h2">Voir aussi</h4>
					<section className="blogs">
						<div className="row">{showRelatedBlogs()}</div>
					</section>
				</div>
			</Layout>
		</React.Fragment>
	);
};

export async function getServerSideProps({ params }) {
	return getSingleBlog(params.slug).then(async (res) => {
		return {
			props: {
				blog: res.data,
				params
			}
		};
	});
}
export default withRouter(SingleBlogPage);
