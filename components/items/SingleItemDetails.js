import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const SingleItemDetails = ({ item }) => {
	const {
		title,
		referent_email,
		description,
		category,
		subs,
		images,
		provider_name,
		provider_phone_number,
		provider_address,
		item_type,
		isRecommended
	} = item;
	const [ selectedImage, setSelectedImage ] = useState(images[0]);

	return (
		<React.Fragment>
			<section className="section-content bg-white padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-6">
							<div className="card">
								<article className="gallery-wrap">
									<div className="img-big-wrap">
										<div>
											{' '}
											<a>
												<img src={selectedImage.url} />
											</a>
										</div>
									</div>
									<div className="thumbs-wrap">
										{images.map((image, index) => (
											<a
												key={index}
												className="item-thumb"
												onClick={(e) => setSelectedImage(images[index])}
											>
												{' '}
												<img src={image.url} />
											</a>
										))}
										{/* <a href="#" className="item-thumb">
											{' '}
											<img src="images/items/15.jpg" />
										</a>
										<a href="#" className="item-thumb">
											{' '}
											<img src="images/items/15-1.jpg" />
										</a>
										<a href="#" className="item-thumb">
											{' '}
											<img src="images/items/15-2.jpg" />
										</a>
										<a href="#" className="item-thumb">
											{' '}
											<img src="images/items/15-1.jpg" />
										</a> */}
									</div>
								</article>
							</div>
						</aside>
						<main className="col-md-6">
							<article className="product-info-aside">
								<h2 className="title mt-3">{title}</h2>

								<div className="rating-wrap my-3">
									<ul className="rating-stars">
										<li style={{ width: '80%' }} className="stars-active">
											<i className="fa fa-star" />
											<i className="fa fa-star" />
											<i className="fa fa-star" />
											<i className="fa fa-star" />
											<i className="fa fa-star" />
										</li>
										<li>
											<i className="fa fa-star" />
											<i className="fa fa-star" />
											<i className="fa fa-star" />
											<i className="fa fa-star" />
											<i className="fa fa-star" />
										</li>
									</ul>
									<small className="label-rating text-muted">132 reviews</small>
								</div>

								{isRecommended && (
									<div className="mb-3">
										<i className="fas fa-clipboard-check text-success" /> Article recommandé
									</div>
								)}

								<p>{description}</p>

								<dl className="row">
									<dt className="col-sm-3">Fournisseur</dt>
									<dd className="col-sm-9">
										<a href="#">{provider_name}</a>
									</dd>

									<dt className="col-sm-3">Tel</dt>
									<dd className="col-sm-9">{provider_phone_number}</dd>

									<dt className="col-sm-3">Adresse</dt>
									<dd className="col-sm-9">{provider_address}</dd>

									<dt className="col-sm-3">Categorie</dt>
									<dd className="col-sm-9">
										<span className="badge bg-success text-white">{category.name}</span>
									</dd>

									<dt className="col-sm-3">Sous-catégorie</dt>
									<dd className="col-sm-9">
										{subs.map((sub) => (
											<span key={sub._id} className="badge bg-info text-white mr-2">
												{sub.name}
											</span>
										))}
									</dd>
								</dl>

								<div className="form-row  mt-4">
									<div className="form-group col-md">
										<a href="#" className="btn  btn-primary mt-2">
											<i className="fas fa-comments" />{' '}
											<span className="text">Contactez le référent</span>
										</a>

										<a href="#" className="btn btn-danger mt-2 ml-xl-2">
											<i className="fas fa-heart" />{' '}
											<span className="text">Ajouter aux favoris</span>
										</a>
									</div>
								</div>
							</article>
						</main>
					</div>
				</div>
			</section>

			{/* Section 2 */}
			<section className="section-name padding-y bg">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="cardcontent">
								<h5>Map here</h5>
							</div>
						</div>

						<aside className="col-md-4">
							<div className="cardcontent">
								<h5 className="title-description mb-4">Voir aussi</h5>

								<article className="media mb-3">
									<a href="#">
										<img className="img-sm mr-3" src="images/posts/3.jpg" />
									</a>
									<div className="media-body">
										<h6 className="mt-0">
											<a href="#">How to use this item</a>
										</h6>
										<p className="mb-2">
											{' '}
											Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
											ante sollicitudin{' '}
										</p>
									</div>
								</article>

								<article className="media mb-3">
									<a href="#">
										<img className="img-sm mr-3" src="images/posts/2.jpg" />
									</a>
									<div className="media-body">
										<h6 className="mt-0">
											<a href="#">New tips and tricks</a>
										</h6>
										<p className="mb-2">
											{' '}
											Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
											ante sollicitudin{' '}
										</p>
									</div>
								</article>

								<article className="media mb-3">
									<a href="#">
										<img className="img-sm mr-3" src="images/posts/1.jpg" />
									</a>
									<div className="media-body">
										<h6 className="mt-0">
											<a href="#">New tips and tricks</a>
										</h6>
										<p className="mb-2">
											{' '}
											Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
											ante sollicitudin{' '}
										</p>
									</div>
								</article>
							</div>
						</aside>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default SingleItemDetails;
