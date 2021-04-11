import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../../actions/auth';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import CustomerMenu from './CustomerMenu';

const CustomerDashboard = () => {
	const { user } = useSelector((state) => ({ ...state }));
	const [ currentUser, setCurrentUser ] = useState({});

	useEffect(() => {
		if (user && user.token) {
			loadUserInfo();
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

	return (
		<React.Fragment>
			<section className="section-content padding-y">
				<div className="container">
					<div className="row">
						<aside className="col-md-3">
							<CustomerMenu pageLocation="dashboard" />
						</aside>
						<main className="col-md-9">
							<article className="card mb-4">
								{/* <header className="card-header">
									<strong className="d-inline-block mr-3">Aperçu du compte</strong>
								</header> */}
								<div className="card-body">
									<figure className="icontext">
										<div className="text">
											<strong> {currentUser.name} (Client) </strong> <br />
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
												<h4 className="title">0</h4>
												<span>Article en attente d'approbation</span>
											</div>
										</figure>
										<figure className="card bg">
											<div className="p-3">
												<h4 className="title">0</h4>
												<span>Produit approuvé</span>
											</div>
										</figure>
										<figure className="card bg">
											<div className="p-3">
												<h4 className="title">0</h4>
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

export default CustomerDashboard;
