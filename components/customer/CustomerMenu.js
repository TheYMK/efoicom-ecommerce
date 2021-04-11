import React from 'react';
import Link from 'next/link';

const CustomerMenu = ({ pageLocation }) => {
	return (
		<React.Fragment>
			<nav className="list-group">
				<Link href="/customer/profile">
					<a className={`list-group-item ${pageLocation === 'dashboard' ? 'active' : ''}`}>Aperçu</a>
				</Link>
				<Link href="/customer/myfavorite">
					<a className={`list-group-item ${pageLocation === 'myfavorite' ? 'active' : ''}`}>Mes favoris</a>
				</Link>

				<Link href="#">
					<a className={`list-group-item ${pageLocation === 'client_messages' ? 'active' : ''}`}>Messages</a>
				</Link>
				<Link href="#">
					<a className={`list-group-item ${pageLocation === 'account_settings' ? 'active' : ''}`}>
						Paramètre du compte
					</a>
				</Link>
			</nav>
		</React.Fragment>
	);
};

export default CustomerMenu;
