import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
	const { lang } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();

	const [ currentLang, setCurrentLang ] = useState(lang);

	const changeLanguage = (langOption) => {
		dispatch({
			type: 'SET_LANG',
			payload: langOption
		});
		setCurrentLang(langOption);
	};

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
									{currentLang === 'fr' && 'Accueil'}
									{currentLang === 'en' && 'Home'}
									{currentLang === 'km' && 'Accueil'}
								</a>
							</li>
							<li className="nav-item">
								<Link href="/items">
									<a className="nav-link">
										{currentLang === 'fr' && 'Catalogue'}
										{currentLang === 'en' && 'Catalog'}
										{currentLang === 'km' && 'Catalogue'}
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/find-referent">
									<a className="nav-link">
										{currentLang === 'fr' && 'Trouver un référent'}
										{currentLang === 'en' && 'Find a referent'}
										{currentLang === 'km' && 'Trouver un référent'}
									</a>
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
									<i className="fa fa-question-circle text-muted mr-2" />{' '}
									{currentLang === 'fr' && 'Aide'}
									{currentLang === 'en' && 'Help'}
									{currentLang === 'km' && 'Help'}
								</a>
								<div className="dropdown-menu dropdown-large">
									<div className="">
										<Link href="/help/how-to-become-referent">
											<a>
												{currentLang === 'fr' && 'Comment devenir référent ?'}
												{currentLang === 'en' && 'How to become a referent ?'}
												{currentLang === 'km' && 'Comment devenir référent ?'}
											</a>
										</Link>
										{/* <Link href="/help/how-to-upload-items">
											<a>
												{currentLang === 'fr' &&
													'Comment mettre en ligne un produit ou un service ?'}
												{currentLang === 'en' && 'How to upload a product or a service ?'}
												{currentLang === 'km' &&
													'Comment mettre en ligne un produit ou un service ?'}
											</a>
										</Link> */}
									</div>
								</div>
							</li>
						</ul>
						<ul className="navbar-nav ml-md-auto">
							<li className="nav-item">
								<a
									className="nav-link text-success"
									href="https://api.whatsapp.com/send?phone=2693495555"
									target="blank"
								>
									<i className="fab fa-whatsapp" /> +269 3495555 (WhatsApp)
								</a>
							</li>

							<li className="nav-item dropdown">
								{currentLang === 'fr' && (
									<a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
										&#127467;&#127479; Français
									</a>
								)}

								{currentLang === 'km' && (
									<a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
										&#127472;&#127474; Shikomori
									</a>
								)}

								{currentLang === 'en' && (
									<a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
										&#x1f1ec;&#x1f1e7; English
									</a>
								)}

								<div className="dropdown-menu dropdown-menu-right">
									<a className="dropdown-item" href="#" onClick={() => changeLanguage('fr')}>
										&#127467;&#127479; Français {currentLang === 'fr' && '✓'}
									</a>
									<a className="dropdown-item" href="#" onClick={() => changeLanguage('en')}>
										&#x1f1ec;&#x1f1e7; English {currentLang === 'en' && '✓'}
									</a>
									{/* <a className="dropdown-item" href="#" onClick={() => changeLanguage('km')}>
										&#127472;&#127474; Shikomori {currentLang === 'km' && '✓'}
									</a> */}
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
