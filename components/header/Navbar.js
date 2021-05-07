import React from 'react';
import Link from 'next/link';
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
							<li className="nav-item">
								<a href="/" className="nav-link">
									Accueil
								</a>
							</li>
							<li className="nav-item">
								<Link href="/items">
									<a className="nav-link">Catalogue</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/find-referent">
									<a className="nav-link">Trouver un référent</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/blogs">
									<a className="nav-link">Forum</a>
								</Link>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
									{' '}
									<i className="fa fa-question-circle text-muted mr-2" /> Aide{' '}
								</a>
								<div className="dropdown-menu dropdown-large">
									<div className="">
										<Link href="/help/how-to-become-referent">
											<a>Comment devenir référent?</a>
										</Link>
										<Link href="/help/how-to-upload-items">
											<a>Comment mettre en ligne un produit ou un service?</a>
										</Link>
									</div>
								</div>
							</li>
						</ul>
						<ul className="navbar-nav ml-md-auto">
							<li className="nav-item">
								<a
									className="nav-link text-success"
									href="https://api.whatsapp.com/send?phone=2693725168"
									target="blank"
								>
									<i className="fab fa-whatsapp" /> +269 3725168 (Whatsapp)
								</a>
							</li>

							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="http://example.com"
									data-toggle="dropdown"
								>
									&#127467;&#127479; Français
								</a>

								<div className="dropdown-menu dropdown-menu-right">
									<a className="dropdown-item" href="#">
										&#127472;&#127474; Shikomori
									</a>
									<a className="dropdown-item" href="#">
										&#x1f1ec;&#x1f1e7; English
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
