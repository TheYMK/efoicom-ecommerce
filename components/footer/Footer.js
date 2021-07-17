import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Footer = () => {
    const { lang } = useSelector((state) => ({ ...state }));

    return (
        <React.Fragment>
            <footer className="section-footer bg-secondary">
                <div className="container">
                    <section className="footer-top padding-y-lg text-white">
                        <div className="row">
                            <aside className="col-md col-6">
                                <h6 className="title text-white">
                                    {lang === "fr"
                                        ? "Services à la clientèle"
                                        : "Customer services"}
                                </h6>
                                <ul className="list-unstyled">
                                    <li>
                                        {" "}
                                        <Link href="/faq">
                                            <a>F.A.Q</a>
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="/#contact">
                                            {lang === "fr"
                                                ? "Nous contacter"
                                                : "Contact us"}
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                            <aside className="col-md col-6">
                                <h6 className="title text-white">
                                    {lang === "fr"
                                        ? "Qui sommes-nous ?"
                                        : "Who are we ?"}
                                </h6>
                                <ul className="list-unstyled">
                                    <li>
                                        {" "}
                                        <Link href="/about">
                                            <a>
                                                {lang === "fr"
                                                    ? "À propos de Bangwé La Massiwa"
                                                    : "About Bangwé La Massiwa"}
                                            </a>
                                        </Link>
                                    </li>
                                    {/* <li>
										{' '}
										<a href="#">Plan du site</a>
									</li> */}
                                </ul>
                            </aside>
                            <aside className="col-md col-6">
                                <h6 className="title text-white">
                                    {lang === "fr"
                                        ? "Vendre sur Bangwé La Massiwa"
                                        : "Sell on Bangwé La Massiwa"}
                                </h6>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link href="/help/how-to-become-referent">
                                            <a>
                                                {lang === "fr"
                                                    ? "Devenir référent"
                                                    : "Become a referent"}
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/find-referent">
                                            <a>
                                                {lang === "fr"
                                                    ? "Trouver un référent"
                                                    : "Find a referent"}
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </aside>
                            {/* <aside className="col-md col-6">
								<h6 className="title text-white">Trouver ce que</h6>
								<ul className="list-unstyled">
									<li>
										{' '}
										<a href="#">Toutes les catégories </a>
									</li>
								</ul>
							</aside> */}
                            <aside className="col-md">
                                <h6 className="title text-white">Socials</h6>
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            href="https://www.facebook.com/Efoicom-Entreprendre-au-Feminin-Ocean-Indien-Comores-1640111439617410"
                                            target="blank"
                                        >
                                            <i className="fab fa-facebook" />{" "}
                                            Facebook{" "}
                                        </a>
                                    </li>
                                    {/* <li>
										<a href="#">
											{' '}
											<i className="fab fa-twitter" /> Twitter{' '}
										</a>
									</li>
									<li>
										<a href="#">
											{' '}
											<i className="fab fa-instagram" /> Instagram{' '}
										</a>
									</li>
									<li>
										<a href="#">
											{' '}
											<i className="fab fa-youtube" /> Youtube{' '}
										</a>
									</li> */}
                                </ul>
                            </aside>
                        </div>
                    </section>

                    <section className="footer-bottom text-center">
                        <p className="text-white">
                            <a href="/privacy-policy" style={{ color: "#fff" }}>
                                {lang === "fr"
                                    ? "Politique de confidentialité"
                                    : "Privacy policy"}
                            </a>{" "}
                            -{" "}
                            <a
                                href="/terms-and-conditions"
                                style={{ color: "#fff" }}
                            >
                                {lang === "fr"
                                    ? "Mentions légales"
                                    : "Terms and Conditions"}
                            </a>
                        </p>
                        <p className="text-muted">
                            {" "}
                            COPYRIGHT &copy; 2021 BANGWÉ LA MASSIWA,{" "}
                            {lang === "fr"
                                ? "TOUS DROITS RESERVÉS"
                                : "ALL RIGHTS RESERVED"}{" "}
                        </p>
                        <p>
                            <span className="text-muted">
                                {lang === "en"
                                    ? "Developed by"
                                    : "Développé par"}
                            </span>{" "}
                            <a
                                href="https://kaymkassai.tech"
                                target="blank"
                                style={{ color: "#fff" }}
                            >
                                Kaym Kassai
                            </a>
                        </p>
                    </section>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
