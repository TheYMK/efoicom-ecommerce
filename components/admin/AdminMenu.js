import React from 'react';
import Link from 'next/link';

const AdminMenu = ({ pageLocation }) => {
	return (
		<React.Fragment>
			<nav className="list-group">
				<Link href="/admin/dashboard">
					<a className={`list-group-item ${pageLocation === 'dashboard' ? 'active' : ''}`}>Aperçu général</a>
				</Link>
				<Link href="/admin/reference-zone-management">
					<a className={`list-group-item ${pageLocation === 'reference_zone' ? 'active' : ''}`}>
						Gérer les communes
					</a>
				</Link>
				<Link href="/admin/categories-subs">
					<a className={`list-group-item ${pageLocation === 'categories-subs' ? 'active' : ''}`}>
						Gérer les catégories & sous-catégories
					</a>
				</Link>
				<Link href="/admin/referent-account-management">
					<a className={`list-group-item ${pageLocation === 'referent' ? 'active' : ''}`}>
						Gérer les comptes référents
					</a>
				</Link>
				<Link href="/admin/client-account-management">
					<a className={`list-group-item ${pageLocation === 'client' ? 'active' : ''}`}>
						Gérer les comptes clients
					</a>
				</Link>

				<Link href="/admin/products-services-management">
					<a className={`list-group-item ${pageLocation === 'products_and_services' ? 'active' : ''}`}>
						Gérer les produits & services
					</a>
				</Link>
				<Link href="/admin/blog-management">
					<a className={`list-group-item ${pageLocation === 'blog_management' ? 'active' : ''}`}>
						Gérer les actualités
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
