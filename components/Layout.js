import React from 'react';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			{children}
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
