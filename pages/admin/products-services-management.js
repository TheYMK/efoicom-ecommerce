import React from 'react';
import ProductsAndServicesManagement from '../../components/admin/ProductsAndServicesManagement';
import AdminProtected from '../../components/auth/AdminProtected';
import Header from '../../components/header/Header';
import Layout from '../../components/Layout';
import PageTop from '../../components/sections/PageTop';

const ProductsAndServicesManagementPage = () => {
	return (
		<Layout>
			<AdminProtected>
				<b className="screen-overlay" />
				<header className="section-header">
					<Header />
				</header>
				<PageTop title={'Tableau de bord administrateur'} />
				<ProductsAndServicesManagement />
			</AdminProtected>
		</Layout>
	);
};

export default ProductsAndServicesManagementPage;
