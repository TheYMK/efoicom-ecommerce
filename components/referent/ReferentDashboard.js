import React, { useEffect, useState } from 'react';
import { getItemsCountsForReferent } from '../../actions/item';
import ReferentMenu from './ReferentMenu';
import { useSelector } from 'react-redux';

const ReferentDashboard = () => {
	const { user } = useSelector((state) => ({ ...state }));

	const [ totalOnHoldItems, setTotalOnHoldItems ] = useState(0);
	const [ totalApprovedProducts, setTotalApprovedProducts ] = useState(0);
	const [ totalApprovedServices, setTotalApprovedServices ] = useState(0);

	useEffect(() => {
		if (user && user.token) {
			loadCounts();
		}
	}, []);

	const loadCounts = () => {
		getItemsCountsForReferent(user.token)
			.then((res) => {
				setTotalOnHoldItems(res.data.totalOnHoldItems);
				setTotalApprovedProducts(res.data.totalApprovedProducts);
				setTotalApprovedServices(res.data.totalApprovedServices);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<React.Fragment>
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<ReferentMenu pageLocation="dashboard" />
						</aside>
						<main className="col-md-9">
							<article className="card mb-4">
								<header className="card-header">
									<strong className="d-inline-block mr-3">Aperçu du compte</strong>
								</header>
								<div className="card-body">
									<article className="card-group card-stat">
										<figure className="card bg">
											<div className="p-3">
												<h4 className="title">{totalOnHoldItems}</h4>
												<span>Article en attente d'approbation</span>
											</div>
										</figure>
										<figure className="card bg">
											<div className="p-3">
												<h4 className="title">{totalApprovedProducts}</h4>
												<span>Produit approuvé</span>
											</div>
										</figure>
										<figure className="card bg">
											<div className="p-3">
												<h4 className="title">{totalApprovedServices}</h4>
												<span>Service approuvé</span>
											</div>
										</figure>
									</article>
								</div>
							</article>
						</main>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default ReferentDashboard;
