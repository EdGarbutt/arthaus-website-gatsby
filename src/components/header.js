import React from 'react'

import ArtHausLogo from '../images/Logo.png'
import BlogIcon from '../images/insights/icon_blog.png'
import InspirationIcon from '../images/insights/icon_inspiration.png'
import SocialsIcon from '../images/insights/icon_socials.png'
import AllIcon from '../images/insights/icon_all.png'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="top-row-container">
                    <div className="arthaus-home">
                        <a href="/">
                            <img src={ArtHausLogo} className="arthaus-logo" alt="Arthaus logo in all it's glory!" />
                        </a>
                    </div>
                    <div className="desktop-menu">
                        <a href="about.html">About</a>
                    </div>
                    <div className="desktop-menu">
                        <a href="expertise.html">Expertise</a>
                    </div>
                    <div className="desktop-menu">
                        <a href="work/index.html">Work</a>
                    </div>
                    <div className="desktop-menu">
                        <a id="desktop-insights" href="insights/index.html" rel="noopener noreferrer">Insights</a>
                        <ul className="insights-list">
                            <li className="insights-list__item" data-postType="blogPost">
                                <a href="insights/index.html?postType=blogPost">
                                    <img className="insights-item__icon" src={BlogIcon} alt="Blog Icon" />BLOG</a>
                            </li>
                            <li className="insights-list__item" data-postType="inspiration">
                                <a href="insights/index.html?postType=inspiration">
                                    <img style={{position: "relative", left: "-3px"}} className="insights-item__icon"
                                        src={InspirationIcon} alt="Inspiration Icon" />INSPIRATION</a>
                            </li>
                            <li className="insights-list__item" data-postType="socialPost">
                                <a href="insights/index.html?postType=socialPost">
                                    <img className="insights-item__icon" src={SocialsIcon} alt="Socials Icon" />SOCIAL</a>
                            </li>
                            <li className="insights-list__item" data-postType="allPost">
                                <a href="insights/index.html?postType=all">
                                    <img className="insights-item__icon" src={AllIcon} alt="Icon of all" />ALL</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-menu">
                        <a href="contact.html">Contact</a>
                    </div>
                    <div className="mobile-menu">
                        <div className="nav-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="menu-items">
                    <ul>
                        <li>
                            <a className="active" href="about.html">About</a>
                        </li>
                        <li>
                            <a href="expertise.html">Expertise</a>
                        </li>
                        <li>
                            <a href="work/index.html">Work</a>
                        </li>
                        <li>
                            <a id="mobile-insights" href="/insights/index.html" rel="noopener noreferrer">Insights</a>
                            <ul className="mobile__insights-list">
                                <li className="mobile__insights-item" data-postType="blogPost">
                                    <img className="insights-item__icon" src={BlogIcon} alt="Insights Icon" /><a
                                        href="insights/index.html?postType=blogPost">BLOG</a>
                                </li>
                                <li className="mobile__insights-item" data-postType="inspiration">
                                    <img style={{position: "relative", left: "-3px"}} className="insights-item__icon"
                                        src={InspirationIcon} alt="Inspiration Icon" /><a
                                        href="insights/index.html?postType=inspiration">INSPIRATION</a>
                                </li>
                                <li className="mobile__insights-item" data-postType="socialPost">
                                    <img className="insights-item__icon" src={SocialsIcon} alt="Socials Icon" /><a
                                        href="insights/index.html?postType=socialPost">SOCIAL</a>
                                </li>
                                <li className="mobile__insights-item" data-postType="allPost">
                                    <img className="insights-item__icon" src={AllIcon} alt="Insights Icon" /><a
                                        href="insights/index.html?postType=all">ALL</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header