import React from 'react'

import { Link } from 'gatsby'

import InstagramIcon from './../images/footer/dec2020/Instagram.png'
import LinkedInIcon from '../images/footer/dec2020/linkedin.png'
import TwitterInIcon from '../images/footer/dec2020/twitter.png'
import FacebookIcon from '../images/footer/dec2020/facebook.png'
import BSILogo from '../images/about/BSI Logo_white.png'
import CertifiedLogo from '../images/about/Certified.png'


const Footer = () => {
    return (
        <footer className="bkg--darkGrey with-borderTop">
            <div className="leftFooter">
                <div className="arthaus-icon"></div>
                <div className="arthaus-address">
                    <p>ARTHAUS</p>
                    <p>24/26 Old Brewery Lane</p>
                    <p>New Street, Henley on Thames,</p>
                    <p>Oxon, RG9 2DE</p>
                    <p>
                        T: <a href="tel:+441628487333">+44 (0)1628 487 333</a>
                    </p>
                    <p>
                        E: <a href="mailto:think@arthaus.co.uk">think@arthaus.co.uk</a>
                    </p>
                    <p className="copy-right">
                        &#169; Arthaus <span className="cDate">2021</span>
                    </p>
                </div>
            </div>
            <div className="rightFooter">
                <div className="arthaus-social">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/arthaus_design/" target="_blank"
                                rel="noopener noreferrer">
                                <img className="footer-social-icon instagram-icon" src={InstagramIcon}
                                    alt="Social media icon, instagram icon in grey links to company's instagram account" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/arthaus-visual-communications-"
                                rel="noopener noreferrer" target="_blank">
                                <img className="footer-social-icon linkedin-icon" src={LinkedInIcon}
                                    alt="Social media icon, linkedin icon in grey links to company's linkedin account" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/arthaus" target="_blank" rel="noopener noreferrer">
                                <img className="footer-social-icon twitter-icon" src={TwitterInIcon}
                                    alt="Social media icon, twitter icon in grey links to company's twitter account" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/ArtHaus.design/" rel="noopener noreferrer"
                                target="_blank">
                                <img className="footer-social-icon facebook-icon" src={FacebookIcon}
                                    alt="Social media icon, facebook icon in grey links to company's facebook account" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="arthaus-terms">
                    <p style={{ width: "100%" }}>
                        <a href="https://www.arthaus.co.uk/documents/Privacy%20Policy.pdf" rel="noopener noreferrer" target="_blank">Privacy</a>
                        &#8194; | &#8194;
                        <Link to="/privacy-terms-conditions" rel="noopener noreferrer">
                            Terms &amp; Conditions
                        </Link>
                    </p>
                </div>
                <div className="arthaus-certifications">
                    <figure className="footer-logo bsi-logo">
                        <img src={BSILogo} alt="BSI logo in white" />
                    </figure>
                    <figure className="footer-logo cyber-logo">
                        <img src={CertifiedLogo} alt="cyber essentials logo in color" />
                    </figure>
                </div>
            </div>
        </footer>
    )
}

export default Footer
          