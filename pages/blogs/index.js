import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/Layout';

const BlogsPage = () => {
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
						<h2 className="title-page">Actualités</h2>
					</div>
				</section>
				<div className="card">
					<div className="card-body d-flex">
						<div className="" role="group" aria-label="Filter by">
							<button type="button" className="btn btn-outline-primary active mr-2">
								Featured
							</button>
							<button type="button" className="btn btn-outline-primary mr-2">
								New Items
							</button>
							<button type="button" className="btn btn-outline-primary mr-2">
								On Sale
							</button>
							<button type="button" className="btn btn-outline-primary mr-2">
								On Sale
							</button>
							<button type="button" className="btn btn-outline-primary mr-2">
								On Sale
							</button>
							<button type="button" className="btn btn-outline-primary mr-2k">
								On Sale
							</button>
						</div>
					</div>
				</div>
				<section className="section-content bg-white padding-y">
					<div className="container">
						<div className="row">
							{/* 1 */}
							<div className="col-md-3">
								<div className="annoucement-card annoucement-card-profile">
									<div className="annoucement-card-header annoucement-card-header-image">
										<a href="#">
											<img className="img" src="/static/images/items/article1.jpg" />
										</a>
										<div className="colored-shadow" />
									</div>
									<div className="annoucement-card-body ">
										<h6 className="annoucement-card-category text-info">Annonce 1</h6>

										<p className="annoucement-card-description">
											Don't be scared of the truth because we need to restart the human foundation
											in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design
											but the back is...
										</p>
										<button className="btn btn-primary">Lire plus</button>
									</div>
								</div>
							</div>
							{/* 2 */}
							<div className="col-md-3">
								<div className="annoucement-card annoucement-card-profile">
									<div className="annoucement-card-header annoucement-card-header-image">
										<a href="#">
											<img className="img" src="/static/images/items/article2.jpg" />
										</a>
										<div className="colored-shadow" />
									</div>
									<div className="annoucement-card-body ">
										<h6 className="annoucement-card-category text-info">Annonce 2</h6>

										<p className="annoucement-card-description">
											Don't be scared of the truth because we need to restart the human foundation
											in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design
											but the back is...
										</p>
										<button className="btn btn-primary">Lire plus</button>
									</div>
								</div>
							</div>
							{/* 3 */}
							<div className="col-md-3">
								<div className="annoucement-card annoucement-card-profile">
									<div className="annoucement-card-header annoucement-card-header-image">
										<a href="#">
											<img className="img" src="/static/images/items/article1.jpg" />
										</a>
										<div className="colored-shadow" />
									</div>
									<div className="annoucement-card-body ">
										<h6 className="annoucement-card-category text-info">Annonce 3</h6>

										<p className="annoucement-card-description">
											Don't be scared of the truth because we need to restart the human foundation
											in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design
											but the back is...
										</p>
										<button className="btn btn-primary">Lire plus</button>
									</div>
								</div>
							</div>
							{/* 4 */}
							<div className="col-md-3">
								<div className="annoucement-card annoucement-card-profile">
									<div className="annoucement-card-header annoucement-card-header-image">
										<a href="#">
											<img className="img" src="/static/images/items/article2.jpg" />
										</a>
										<div className="colored-shadow" />
									</div>
									<div className="annoucement-card-body ">
										<h6 className="annoucement-card-category text-info">Annonce 4</h6>

										<p className="annoucement-card-description">
											Don't be scared of the truth because we need to restart the human foundation
											in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design
											but the back is...
										</p>
										<button className="btn btn-primary">Lire plus</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</React.Fragment>
	);
};

export default BlogsPage;
