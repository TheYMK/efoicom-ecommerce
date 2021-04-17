import React from 'react';
import Link from 'next/link';

const BlogItem = ({ blog }) => {
	return (
		<div className="col-md-3">
			<div className="annoucement-card annoucement-card-profile">
				<div className="annoucement-card-header annoucement-card-header-image">
					<a href="#">
						<img className="img" src={blog.image} />
					</a>
					<div className="colored-shadow" />
				</div>
				<div className="annoucement-card-body ">
					<h6 className="annoucement-card-category text-info">{blog.title}</h6>

					{/* <p className="annoucement-card-description">{blog.excerpt}</p> */}
					<Link href={`/blog/${blog.slug}`}>
						<a className="btn btn-primary">Lire l'article</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogItem;
