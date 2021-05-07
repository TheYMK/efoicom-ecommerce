import React, { useState } from 'react';
import { fetchBlogsByFilter, getBlogs } from '../../actions/blog';
import { getBlogCategories } from '../../actions/blogcategory';
import { getCategories } from '../../actions/category';
import BlogItem from '../../components/blogs/BlogItem';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/Layout';

const BlogsPage = ({ allBlogs, allCategories }) => {
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
			<h6 className="title">Filtrer par categories</h6>
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

export default BlogsPage;
