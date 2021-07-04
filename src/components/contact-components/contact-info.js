import React, { Fragment } from 'react'

import InstagramIcon from '../../images/contact/instagram_rollover.png'
import LinkedInIcon from '../../images/contact/linkedin_rollover.png'
import TwitterIcon from '../../images/contact/twitter_rollover.png'
import FacebookIcon from '../../images/contact/facebook_rollover.png'

const ContactInfo = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-xs-12" style={{paddingLeft: 0}}>
                    <p id="contactUsModalLabel" className="heading2 text--midGrey text-left padding-b--18">
                        How to get in touch with us
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-8" style={{paddingLeft: 0}}>
                    <p className="text--midGrey text-left padding-b--18">
                        <span className="heading3">Call us:</span>
                        &nbsp;
                        &nbsp;
                        <a className="bodyText" href="tel:+441628487333">
                            +44 (0)1628 487333
                        </a>
                    </p>
                    <p className="text--midGrey text-left padding-b--18">
                        <span className="heading3">Email us:</span>
                        &nbsp;
                        &nbsp;
                        <a className="bodyText" href="mailto:enquiries@arthaus.co.uk">
                            enquiries@arthaus.co.uk
                        </a>
                    </p>
                    <p className="bodyText padding-b--20">
                        Or why not message us and ask to arrange a video call
                    </p>
                </div>
                <div className="col-xs-12 col-md-4" style={{paddingLeft: 0}}>
                    <p className="heading3 text--midGrey text-left padding--none">
                        Follow us
                    </p>
                    <div className="arthaus-social-main">
                        <ul className="arthaus-social-main">
                            <li>
                                <a href="https://www.instagram.com/arthaus_design/" target="_blank" rel="noreferrer">
                                    <img className="contact-social-icon instagram-icon" src={InstagramIcon} alt="Social media icon, instagram icon in orange links to company's instagram account" />
                                </a>
                            </li>
                            &nbsp;
                            <li>
                                <a href="https://www.linkedin.com/company/arthaus-visual-communications-" target="_blank" rel="noreferrer">
                                    <img className="contact-social-icon linkedin-icon" src={LinkedInIcon} alt="Social media icon, linkedin icon in orange links to company's linkedin account" />
                                </a>
                            </li>
                            &nbsp;
                            <li>
                                <a href="https://twitter.com/arthaus" target="_blank" rel="noreferrer">
                                    <img className="contact-social-icon twitter-icon" src={TwitterIcon} alt="Social media icon, twitter icon in orange links to company's twitter account" />
                                </a>
                            </li>
                            &nbsp;
                            <li>
                                <a href="https://www.facebook.com/ArtHaus.design/" target="_blank" rel="noreferrer">
                                    <img className="contact-social-icon facebook-icon" src={FacebookIcon} alt="Social media icon, facebook icon in orange links to company's facebook account" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ContactInfo
