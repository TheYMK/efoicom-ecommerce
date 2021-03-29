import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/header/Navbar';
import Layout from '../../components/Layout';

const index = () => {
	return (
		<React.Fragment>
			<Layout>
				<b className="screen-overlay" />
				<header className="section-header">
					<Header />
					<Navbar />
				</header>
				<section class="py-3 bg-light">
					<div class="container">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<a href="#">Accueil</a>
							</li>
							<li class="breadcrumb-item">
								<a href="#">Produits</a>
							</li>
							<li class="breadcrumb-item">
								<a href="#">Cosmétique</a>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								titre du produit
							</li>
						</ol>
					</div>
				</section>
				<section className="section-content bg-white padding-y">
					<div className="container">
						<div className="row">
							<aside className="col-md-6">
								<div className="card">
									<article className="gallery-wrap">
										<div className="img-big-wrap">
											<div>
												{' '}
												<a href="#">
													<img src="/static/images/products/2.jpg" />
												</a>
											</div>
										</div>
										<div className="thumbs-wrap">
											<a href="#" className="item-thumb">
												{' '}
												<img src="/static/images/products/1.jpg" />
											</a>
											<a href="#" className="item-thumb">
												{' '}
												<img src="/static/images/products/1.jpg" />
											</a>
											<a href="#" className="item-thumb">
												{' '}
												<img src="/static/images/products/1.jpg" />
											</a>
											<a href="#" className="item-thumb">
												{' '}
												<img src="/static/images/products/1.jpg" />
											</a>
										</div>
									</article>
								</div>
							</aside>
							<main className="col-md-6">
								<article className="product-info-aside">
									<h2 className="title mt-3">Gamme Ridoah </h2>

									<div className="rating-wrap my-3">
										<ul className="rating-stars">
											<li style={{ width: '80%' }} className="stars-active">
												<i className="fa fa-star" /> <i className="fa fa-star" />
												<i className="fa fa-star" /> <i className="fa fa-star" />
												<i className="fa fa-star" />
											</li>
											<li>
												<i className="fa fa-star" /> <i className="fa fa-star" />
												<i className="fa fa-star" /> <i className="fa fa-star" />
												<i className="fa fa-star" />
											</li>
										</ul>
									</div>

									<p>Maison Beaucor. Cosmetic made in Comoros</p>

									<div className="mb-3 mt-5">
										<strong>Information additionnelle:</strong>
									</div>
									<dl className="row">
										<dt className="col-sm-3">Fournisseur</dt>
										<dd className="col-sm-9">
											<a href="#">Maison Beaucor</a>
										</dd>

										<dt className="col-sm-3">Contact</dt>
										<dd className="col-sm-9">+269 4864659</dd>

										<dt className="col-sm-3">Adresse</dt>
										<dd className="col-sm-9">Moroni, Hamramba</dd>

										<dt className="col-sm-3">Disponibilité</dt>
										<dd className="col-sm-9">En Stock</dd>
									</dl>

									<div className="form-row  mt-4">
										<div className="form-group col-md">
											<a href="#" className="btn  btn-success  mr-3">
												<i className="fas fa-shopping-cart" />{' '}
												<span className="text">Contacter le réfèrent</span>
											</a>
											<a href="#" className="btn btn-light">
												<i className="fas fa-heart" />{' '}
												<span className="text">Ajouter à mes favoris</span>
											</a>
										</div>
									</div>
								</article>
							</main>
						</div>
					</div>
				</section>
			</Layout>
		</React.Fragment>
	);
};

export default index;
