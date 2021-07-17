import React from "react";
import Head from "next/head";
import { DOMAIN, FB_APP_ID } from "../../config";
import { withRouter } from "next/router";
import Header from "../../components/header/Header";
import Navbar from "../../components/header/Navbar";
import Layout from "../../components/Layout";
import PageTop from "../../components/sections/PageTop";
import CustomerProtected from "../../components/auth/CustomerProtected";
import CustomerDashboard from "../../components/customer/CustomerDashboard";
import MyFavorite from "../../components/customer/MyFavorite";
import ReferentProtected from "../../components/auth/ReferentProtected";

const MyFavoritePage = ({ router }) => {
    const message = `Bienvenue sur votre tableau de bord référent. Vous souhaitez mettre en ligne vos produits/services ou ceux d'autres entrepreneurs de votre commune? C'est ici que tout commence. Soumettez vos articles sans plus attendre.`;

    const head = () => (
        <Head>
            <title>Bangwé La Massiwa | Mes favoris</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
            />
            <meta
                name="description"
                content="Bangwé La Massiwa est un marché national en ligne, où les gens se retrouvent pour fabriquer, vendre, acheter et collectionner des articles uniques."
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta
                property="og:title"
                content={`Soutenons les créateurs indépendants`}
            />
            <meta
                property="og:description"
                content="Bangwé La Massiwa est un marché national en ligne, où les gens se retrouvent pour fabriquer, vendre, acheter et collectionner des articles uniques."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content="Bangwé La Massiwa" />
            <meta
                property="og:image"
                content={`${DOMAIN}/static/images/seo.png`}
            />
            <meta
                property="og:image:secure_url"
                content={`${DOMAIN}/static/images/seo.png`}
            />
            <meta property="og:image:type" content="image/png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <ReferentProtected>
                    <b className="screen-overlay" />
                    <header className="section-header">
                        <Header />
                    </header>
                    <PageTop title={"Mon profile référent"} message={message} />

                    <MyFavorite />
                </ReferentProtected>
            </Layout>
        </React.Fragment>
    );
};

export default withRouter(MyFavoritePage);
