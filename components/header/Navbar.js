import React from 'react';

const Navbar = () => {
	return (
		<React.Fragment>
			<nav className="navbar navbar-main navbar-expand-lg border-bottom">
				<div className="container">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#main_nav"
						aria-controls="main_nav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="main_nav">
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
									{' '}
									<i className="fa fa-bars text-muted mr-2" /> Demo pages{' '}
								</a>
								<div className="dropdown-menu dropdown-large">
									<nav className="row">
										<div className="col-6">
											<a href="page-index-1.html">Home page 1</a>
											<a href="page-index-2.html">Home page 2</a>
											<a href="page-category.html">All category</a>
											<a href="page-listing-large.html">Listing list</a>
											<a href="page-listing-grid.html">Listing grid</a>
											<a href="page-shopping-cart.html">Shopping cart</a>
											<a href="page-detail-product.html">Product detail</a>
											<a href="page-content.html">Page content</a>
											<a href="page-user-login.html">Page login</a>
											<a href="page-user-register.html">Page register</a>
										</div>
										<div className="col-6">
											<a href="page-profile-main.html">Profile main</a>
											<a href="page-profile-orders.html">Profile orders</a>
											<a href="page-profile-seller.html">Profile seller</a>
											<a href="page-profile-wishlist.html">Profile wishlist</a>
											<a href="page-profile-setting.html">Profile setting</a>
											<a href="page-profile-address.html">Profile address</a>
											<a href="rtl-page-index-1.html">RTL home page</a>
											<a href="page-components.html" target="_blank">
												More components
											</a>
										</div>
									</nav>
								</div>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Ready to ship
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Trade shows
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Sell with us
								</a>
							</li>
						</ul>
						<ul className="navbar-nav ml-md-auto">
							<li className="nav-item">
								<a className="nav-link" href="#">
									Get the app
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="http://example.com"
									data-toggle="dropdown"
								>
									English
								</a>
								<div className="dropdown-menu dropdown-menu-right">
									<a className="dropdown-item" href="#">
										Russian
									</a>
									<a className="dropdown-item" href="#">
										French
									</a>
									<a className="dropdown-item" href="#">
										Spanish
									</a>
									<a className="dropdown-item" href="#">
										Chinese
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;
