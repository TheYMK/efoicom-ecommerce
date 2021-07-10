import React from 'react';
import SingleCategorie from './SingleCategorie';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const OurCategories = ({ allCategories }) => {
	const { lang } = useSelector((state) => ({ ...state }));

	return (
		<React.Fragment>
			<section className="padding-bottom padding-y">
				<header className="section-heading heading-line">
					<h4 className="title-section text-uppercase">
						{lang === 'fr' ? 'Découvrez nos catégories' : 'Discover our categories'}
					</h4>
				</header>

				<section className="categories px-5">
					<div className="container text-center">
						<div className="row justify-content-center">
							{allCategories
								.slice(0, 4)
								.map((category) => <SingleCategorie key={category._id} category={category} />)}
						</div>
						<Link href="/categories">
							<a className="btn btn-primary mt-5 rounded-pill">
								{lang === 'fr' ? 'Voir la liste complète' : 'View all categories'}
							</a>
						</Link>
					</div>
				</section>
			</section>
		</React.Fragment>
	);
};

export default OurCategories;
