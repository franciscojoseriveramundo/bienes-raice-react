import React from "react";
import {Link} from 'react-router-dom';
import Whatsapp from '../images/whatsapp-symbol.svg';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import Twitter from '../images/twitter.svg';
import Youtube from '../images/youtube.svg';
import FooterCopyright from "./FooterCopyright";

const Footer = () =>{
    return(
        <section className="footer-page">
            <footer className="container-fluid">
                <div className="row footer-information-page">
                    <div className="col-xl-6 col-lg-6 col-sm-6 col-xs-12 col-company-section">
                        <section className="company-section container-fluid">
                        <ul className="ul-company-section">
                            <li className="li-company-section-header">Compañia</li>
                            <li className="li-company-section-items"><p>Acerca de</p></li>
                            <li className="li-company-section-items"><p>Afiliate</p></li>
                            <li className="li-company-section-items"><p>Términos y condiciones</p></li>
                            <li className="li-company-section-items"><p>Aviso de privacidad</p></li>
                        </ul>
                        </section>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-6 col-xs-12 col-contact-section">
                        <section className="contact-section container-fluid">
                        <ul className="ul-contact-section">
                            <li className="li-contact-section-header">Contáctanos</li>
                            <li className="li-contact-section-items">
                                <img src={Whatsapp} className="whatsapp-icon-footer" width="24"/>
                                55 8640 9441
                            </li>
                            <li className="li-contact-section-items">pacoriveram2017@gmail.com</li>
                        </ul>
                        </section>
                        <section className="social-section container-fluid">
                            <ul className="ul-social-section">
                                <li className="li-social-section-header">Nuestras redes sociales</li>
                                <li className="li-social-section-items">
                                    <Link to="https://www.facebook.com">
                                        <img src={Facebook}/>
                                    </Link>
                                </li>
                                <li className="li-social-section-items">
                                    <Link to="https://www.instagram.com">
                                        <img src={Instagram}/>
                                    </Link>
                                </li>
                                <li className="li-social-section-items">
                                    <Link to="https://www.twitter.com">
                                        <img src={Twitter}/>
                                    </Link>
                                </li>
                                <li className="li-social-section-items">
                                    <Link to="https://www.youtube.com">
                                        <img src={Youtube}/>
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
                <div className="row footer-copyright">
                    <div className="col-12 col-copyright">
                        <section className="copyright-section container-fluid">
                            <FooterCopyright></FooterCopyright>
                        </section>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;