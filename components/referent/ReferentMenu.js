import React from 'react';
import Link from 'next/link';

const ReferentMenu = ({ pageLocation }) => {
	return (
		<React.Fragment>
			<nav className="list-group">
				<Link href="/referent/profile">
					<a className={`list-group-item ${pageLocation === 'dashboard' ? 'active' : ''}`}>Aperçu</a>
				</Link>
				<Link href="/referent/product-service-submission">
					<a className={`list-group-item ${pageLocation === 'submission' ? 'active' : ''}`}>
						Soumettre un produit ou service
					</a>
				</Link>
				<Link href="/referent/all-products-services">
					<a className={`list-group-item ${pageLocation === 'allproducts' ? 'active' : ''}`}>
						Tous vos produits et services
					</a>
				</Link>
				<Link href="/referent/myfavorite">
					<a className={`list-group-item ${pageLocation === 'myfavorite' ? 'active' : ''}`}>Mes favoris</a>
				</Link>
				{/* <Link href="/referent/client-messages">
					<a className={`list-group-item ${pageLocation === 'client_messages' ? 'active' : ''}`}>Messages</a>
				</Link>
				<Link href="/referent/account-settings">
					<a className={`list-group-item ${pageLocation === 'account_settings' ? 'active' : ''}`}>
						Paramètre du compte
					</a>
				</Link> */}
			</nav>
		</React.Fragment>
	);
};

export default ReferentMenu;
