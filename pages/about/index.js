import React from "react";
import Head from "next/head";
import { DOMAIN, FB_APP_ID } from "../../config";
import { withRouter } from "next/router";
import Header from "../../components/header/Header";
import Navbar from "../../components/header/Navbar";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";

const AboutPage = ({ router }) => {
    const { lang } = useSelector((state) => ({ ...state }));

    const head = () => (
        <Head>
            <title>
                Bangwé La Massiwa |{" "}
                {lang === "fr"
                    ? "À propos de Bangwé La Massiwa"
                    : "About Bangwé La Massiwa"}
            </title>
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
            <Layout>
                <b className="screen-overlay" />
                <header className="section-header">
                    <Header />
                    <Navbar />
                </header>
                <section className="section-pagetop bg-light">
                    <div className="container">
                        <h2 className="title-page">
                            {lang === "fr"
                                ? "À propos de Bangwé La Massiwa"
                                : "About Bangwé La Massiwa"}
                        </h2>
                    </div>
                </section>
                <section className="section-content bg-white padding-y">
                    <div className="container pure-text px-5">
                        <div className="row">
                            <div className="col-md-12">
                                <h5>
                                    {lang === "fr"
                                        ? `Qui nous sommes et ce que nous faisons`
                                        : "Who We Are and What We Do"}
                                </h5>

                                <p className="mt-4">
                                    {lang === "fr"
                                        ? `Bangwé La Massiwa a pour objectif de créer un lien social et économique entre les femmes des communautés les plus vulnérables et les femmes entrepreneures. Cette plateforme solidaire permet aux femmes rurales, artisanales et productrices de continuer à vendre, et d'organiser la vente de leurs produits grâce à une visibilité et la facilitation des échanges pour l'écoulement des produits. Grâce à une approche par village, quartier ou marché, Bangwé La Massiwa souhaite dynamiser le commerce de proximité et apporter une solution durable face aux chocs.
                                    Elle permet de répertorier, de créer ou de rejoindre des groupes de consommateurs (groupement d'achat, association de producteurs, consommateurs tels que les femmes entrepreneurs, restaurants,). Le but étant de mutualiser les achats locaux, et d'entrer en relation plus facilement avec des producteurs.`
                                        : `Bangwé La Massiwa aims to create a social and economic link between women from the most vulnerable communities and women entrepreneurs. This platform allows rural, artisanal and producer women to continue selling, and to organize the sale of their products thanks to visibility and the facilitation of trade for the sale of products. Thanks to an approach by village, district or market, Bangwé La Massiwa wishes to boost local commerce.
                                    It makes it possible to identify, create or join consumer groups (purchasing group, producers' association, consumers such as women entrepreneurs, restaurants, etc.). The goal is to establish relationships more easily with producers.`}
                                </p>
                            </div>

                            <div className="col-md-6 mt-5">
                                <h5>
                                    {lang === "fr"
                                        ? `Nos clients avant tout`
                                        : "Customers First"}
                                </h5>
                                <p className="mt-4">
                                    {lang === "fr"
                                        ? `Notre plateforme existe pour aider les entreprises à vendre plus. Nous prenons chaque décision et mesurons chaque résultat en fonction de la façon dont il sert nos clients.`
                                        : `Our platform exists to help businesses sell more. We make every decision and measure every outcome based on how well it serves our customers.`}
                                </p>
                            </div>
                            <div className="col-md-6 mt-5">
                                <h5>
                                    {lang === "fr"
                                        ? `Une équipe en mission pour vous servir`
                                        : "A team on a mission to serve you"}
                                </h5>
                                <p className="mt-4">
                                    {lang === "fr"
                                        ? `Bangwé La Massiwa est composé d'individus incroyables, mais ce n'est que grâce au travail d'équipe que nous atteignons la grandeur. Nous nous engageons à aider nos clients en travaillant ensemble avec autant d'humilité que d'ambition.`
                                        : `Bangwé La Massiwa is made up of amazing individuals, but it’s only through teamwork that we achieve greatness. We’re committed to helping our customers by working together with equal parts humility and ambition.`}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </React.Fragment>
    );
};

export default withRouter(AboutPage);
