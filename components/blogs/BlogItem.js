import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogItem = ({ blog }) => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div className="col-md-3" data-aos="zoom-out">
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
