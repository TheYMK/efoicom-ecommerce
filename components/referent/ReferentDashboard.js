import React, { useEffect, useState } from 'react';
import { getItemsCountsForReferent } from '../../actions/item';
import ReferentMenu from './ReferentMenu';
import { getCurrentUser } from '../../actions/auth';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const ReferentDashboard = () => {
	const { user } = useSelector((state) => ({ ...state }));
	const [ currentUser, setCurrentUser ] = useState({});
	const [ totalOnHoldItems, setTotalOnHoldItems ] = useState(0);
	const [ totalApprovedProducts, setTotalApprovedProducts ] = useState(0);
	const [ totalApprovedServices, setTotalApprovedServices ] = useState(0);

	useEffect(() => {
		if (user && user.token) {
			loadUserInfo();
			loadCounts();
		}
	}, []);

	const loadUserInfo = () => {
		getCurrentUser(user.token)
			.then((res) => {
				setCurrentUser(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

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
								{/* <header className="card-header">
									<strong className="d-inline-block mr-3">Aperçu du compte</strong>
								</header> */}
								<div className="card-body">
									<figure className="icontext">
										<div className="text">
											<strong> {currentUser.name} (Référent) </strong> <br />
											<p className="mb-2"> {currentUser.email} </p>
											<Link href="/admin/account-settings">
												<a className="btn btn-light btn-sm">Modifier les informations</a>
											</Link>
										</div>
									</figure>
									<hr />
									<article className="card-group card-stat">
										<figure className="card bg">
											<div className="p-3">
												<h4 className="title">{totalOnHoldItems}</h4>
												<span>Articles en attente d'approbation</span>
											</div>
										</figure>
										<figure className="card bg">
											<div className="p-3">
												<h4 className="title">{totalApprovedProducts}</h4>
												<span>Produits approuvés</span>
											</div>
										</figure>
										<figure className="card bg">
											<div className="p-3">
												<h4 className="title">{totalApprovedServices}</h4>
												<span>Services approuvés</span>
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
