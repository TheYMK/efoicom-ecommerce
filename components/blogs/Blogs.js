import React, { useState } from 'react';
import { getBlogsWithCategoriesAndTags } from '../../actions/blog';
import BlogItem from './BlogItem';

const Blogs = ({ blogs, blogcategories, tags, totalBlogs, blogsLimit, blogsSkip }) => {
	const [ limit, setLimit ] = useState(blogsLimit);
	const [ skip, setSkip ] = useState(blogsSkip);
	const [ size, setSize ] = useState(totalBlogs);
	const [ loadedBlogs, setLoadedBlogs ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	const showAllBlogs = () => {
		return blogs.map((b, i) => <BlogItem blog={b} key={i} />);
	};

	const loadMoreButton = () => {
		return (
			size > 0 &&
			size >= limit && (
				<button className="btn btn-primary mt-4 rounded-pill" onClick={loadMore}>
					{loading ? 'Chargement...' : 'Charger plus'}
				</button>
			)
		);
	};

	const loadMore = () => {
		let toSkip = skip + limit;
		setLoading(true);
		getBlogsWithCategoriesAndTags(toSkip, limit).then((res) => {
			setLoadedBlogs([ ...loadedBlogs, ...res.data.blogs ]);
			setSize(res.data.size);
			setSkip(toSkip);
			setLoading(false);
		});
	};

	const showLoadedBlogs = () => {
		return loadedBlogs.map((b, i) => <BlogItem blog={b} key={i} />);
	};

	return (
		<React.Fragment>
			<section className="padding-bottom">
				<header className="section-heading heading-line">
					<h4 className="title-section text-uppercase">Actualités récentes</h4>
				</header>

				<div className="row">
					{showAllBlogs()}
					{showLoadedBlogs()}
				</div>

				<div className="text-center">{loadMoreButton()}</div>
			</section>
		</React.Fragment>
	);
};

export default Blogs;
