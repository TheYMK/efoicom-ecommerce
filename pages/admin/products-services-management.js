import React from 'react';
import ProductsAndServicesManagement from '../../components/admin/ProductsAndServicesManagement';
import Header from '../../components/header/Header';
import Layout from '../../components/Layout';
import PageTop from '../../components/sections/PageTop';

const ProductsAndServicesManagementPage = () => {
	return (
		<Layout>
			<b class="screen-overlay" />
			<header className="section-header">
				<Header />
			</header>
			<PageTop title={'Tableau de bord administrateur'} />
			<ProductsAndServicesManagement />
		</Layout>
	);
};

export default ProductsAndServicesManagementPage;
