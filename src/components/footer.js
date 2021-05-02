import React from 'react'

import InstagramIcon from '../images/footer/Instagram.png'
import LinkedInIcon from '../images/footer/linkedin.png'
import TwitterInIcon from '../images/footer/twitter.png'
import FacebbokIcon from '../images/footer/facebook.png'


const Footer = () => {
    return (
        <footer className="dark-grey with-borderTop">
            <div className="leftFooter">
                <div className="arthaus-icon"></div>
                <div className="arthaus-address">
                    <p>ARTHAUS</p>
                    <p>24/26 Old Brewery Lane</p>
                    <p>New Street, Henley on Thames,</p>
                    <p>Oxon, RG9 2DE</p>
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
                                <img className="footer-social-icon facebook-icon" src={FacebbokIcon}
                                    alt="Social media icon, facebook icon in grey links to company's facebook account" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="arthaus-terms">
                    <a href="/privacy-terms-conditions.html" rel="noopener noreferrer">
                        <p>Privacy, terms &amp; conditions</p>
                    </a>
                </div>
                <div className="arthaus-copyright">
                    <p>© Copyright Arthaus <span className="cDate">2020</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer