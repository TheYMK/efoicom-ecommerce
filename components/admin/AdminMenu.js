import React from 'react';
import Link from 'next/link';

const AdminMenu = ({ pageLocation }) => {
	return (
		<React.Fragment>
			<nav className="list-group">
				<Link href="/admin/dashboard">
					<a className={`list-group-item ${pageLocation === 'dashboard' ? 'active' : ''}`}>Aperçu</a>
				</Link>
				<Link href="/admin/referent-account-management">
					<a className={`list-group-item ${pageLocation === 'referent' ? 'active' : ''}`}>
						Gestion comptes référents
					</a>
				</Link>
				<Link href="/admin/client-account-management">
					<a className={`list-group-item ${pageLocation === 'client' ? 'active' : ''}`}>
						Gestion comptes clients
					</a>
				</Link>
				<Link href="/admin/categories-subs">
					<a className={`list-group-item ${pageLocation === 'categories-subs' ? 'active' : ''}`}>
						Catégories et Sous-Catégories
					</a>
				</Link>
				<Link href="/admin/products-services-management">
					<a className={`list-group-item ${pageLocation === 'products_and_services' ? 'active' : ''}`}>
						Gestion produits & services
					</a>
				</Link>
				<Link href="/admin/homepage-structure">
					<a className={`list-group-item ${pageLocation === 'home_page_structure' ? 'active' : ''}`}>
						Structure de la page d'accueil
					</a>
				</Link>

				<Link href="/admin/account-settings">
					<a className={`list-group-item ${pageLocation === 'account_settings' ? 'active' : ''}`}>
						Paramètre du compte
					</a>
				</Link>
			</nav>
		</React.Fragment>
	);
};

export default AdminMenu;
