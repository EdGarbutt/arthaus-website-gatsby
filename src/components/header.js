import React, { useState } from 'react'
import { useLocation } from '@reach/router'

import { Link } from 'gatsby'

import ArtHausLogo from '../images/Logo.png'
import BlogIcon from '../images/insights/icon_blog.png'
import InspirationIcon from '../images/insights/icon_inspiration.png'
import SocialsIcon from '../images/insights/icon_socials.png'
import AllIcon from '../images/insights/icon_all.png'

const Header = () => {

    const location = useLocation();
    const searchParameters = new URLSearchParams(location.search);

    let headerClasses = [];

    switch(location.pathname) {
        case "/about":
            headerClasses.push('navbar-fixed-top', 'bkg--white');
            break;
        case "/expertise":
            headerClasses.push('navbar-fixed-top', 'bkg--white');
            break;
        case "/work":
            headerClasses.push('navbar-fixed-top', 'bkg--white');
            break;
        case "/insights":
            headerClasses.push('navbar-fixed-top', 'bkg--white');
            break;
    }

    // Example: url is work/[case study name]
    const inWorkDirectory = location.pathname.includes("/work/")

    if (inWorkDirectory) {
        headerClasses.push('navbar-fixed-top', 'bkg--white');
    }
    
    const [ pathState, setPathState ] = useState({
        insightBlogSelected: false,
        insightInspirationSelected: false,
        insightSocialSelected: false,
        insightAllSelected: false
    });

    useState(() => {
        if (location.pathname === "/insights" && searchParameters.has("postType")) {
            switch(searchParameters.get("postType")) {
                case "blogPost":
                    setPathState({
                        insightBlogSelected: true
                    });
                    break;
                case "inspiration":
                    setPathState({
                        insightInspirationSelected: true
                    });
                    break;
                case "socialPost":
                    setPathState({
                        insightSocialSelected: true
                    });
                    break;
                case "all":
                    setPathState({
                        insightAllSelected: true
                    });
                    break;
            }
        }
    }, [])


    const onInsightCategoryChangedHandler = (insight_type) => {
        switch(insight_type) {
            case "blogPost":
                setPathState({
                    insightBlogSelected: true
                });
                break;
            case "inspiration":
                setPathState({
                    insightInspirationSelected: true
                });
                break;
            case "socialPost":
                setPathState({
                    insightSocialSelected: true
                });
                break;
            case "allPost":
                setPathState({
                    insightAllSelected: true
                });
                break;
        }
    }

    const [ mobileNavShownState, setMobileNavShownState ] = useState(false);

    const mobileNavToggle = () => {

        // If mobile nav is showing
        if (mobileNavShownState) {
            setMobileNavShownState(false)
        } else {
            setMobileNavShownState(true)
        }
        
    }

    return (
        <header className={headerClasses.join(' ')}>
            <nav>
                <div className="top-row-container">
                    <div className="arthaus-home">
                        <Link to="/">
                            <img src={ArtHausLogo} className="arthaus-logo" alt="Arthaus logo in all it's glory!" />
                        </Link>
                    </div>
                    <div className="desktop-menu">
                        <Link to="/about" activeClassName="active">About</Link>
                    </div>
                    <div className="desktop-menu">
                        <Link to="/expertise" activeClassName="active">Expertise</Link>
                    </div>
                    <div className="desktop-menu">
                        <Link to="/work" activeClassName="active" className={inWorkDirectory ? "active" : ""}>Work</Link>
                    </div>
                    <div className="desktop-menu">
                        <Link id="desktop-insights" to="/insights" activeClassName="active" rel="noopener noreferrer">Insights</Link>
                        <ul className="insights-list">
                            <li className={"insights-list__item" + (pathState.insightBlogSelected ? " post-active" : "")} onClick={() => onInsightCategoryChangedHandler("blogPost")}>
                                <Link to="/insights?postType=blogPost">
                                    <img className="insights-item__icon" src={BlogIcon} alt="Blog Icon" />
                                    <span>BLOG</span>
                                </Link>
                            </li>
                            <li className={"insights-list__item" + (pathState.insightInspirationSelected ? " post-active" : "")} onClick={() => onInsightCategoryChangedHandler("inspiration")}>
                                <Link to="/insights?postType=inspiration">
                                    <img style={{position: "relative", left: "-3px"}} className="insights-item__icon" src={InspirationIcon} alt="Inspiration Icon" />
                                    <span>INSPIRATION</span>
                                </Link>
                            </li>
                            <li className={"insights-list__item" + (pathState.insightSocialSelected ? " post-active" : "")} onClick={() => onInsightCategoryChangedHandler("socialPost")}>
                                <Link to="/insights?postType=socialPost">
                                    <img className="insights-item__icon" src={SocialsIcon} alt="Socials Icon" />
                                    <span>SOCIAL</span>
                                </Link>
                            </li>
                            <li className={"insights-list__item" + (pathState.insightAllSelected ? " post-active" : "")} onClick={() => onInsightCategoryChangedHandler("allPost")}>
                                <Link to="/insights?postType=all">
                                    <img className="insights-item__icon" src={AllIcon} alt="Icon of all" />
                                    <span>ALL</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-menu">
                        <Link to="/contact" activeClassName="active">Contact</Link>
                    </div>
                    <div className="mobile-menu" onClick={() => mobileNavToggle()}>
                        <div className={`nav-icon${mobileNavShownState ? ' open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className={`menu-items${mobileNavShownState ? ' open' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/about" activeClassName="active">About</Link>
                        </li>
                        <li>
                            <Link to="/expertise" activeClassName="active">Expertise</Link>
                        </li>
                        <li>
                            <Link to="/work" activeClassName="active">Work</Link>
                        </li>
                        <li>
                            <Link id="mobile-insights" to="/insights" activeClassName="active" rel="noopener noreferrer">Insights</Link>
                            <ul className="mobile__insights-list">
                                <li className={"mobile__insights-item" + (pathState.insightBlogSelected ? " post-active" : "")} onClick={() => onInsightCategoryChangedHandler("blogPost")}>
                                    <img className="insights-item__icon" src={BlogIcon} alt="Insights Icon" />
                                    <Link to="/insights?postType=blogPost">BLOG</Link>
                                </li>
                                <li className={"mobile__insights-item" + (pathState.insightInspirationSelected ? " post-active" : "")} onClick={() => onInsightCategoryChangedHandler("inspiration")}>
                                    <img style={{position: "relative", left: "-3px"}} className="insights-item__icon"
                                        src={InspirationIcon} alt="Inspiration Icon" />
                                        <Link to="/insights?postType=inspiration">INSPIRATION</Link>
                                </li>
                                <li className={"mobile__insights-item" + (pathState.insightSocialSelected ? " post-active" : "")} onClick={() => onInsightCategoryChangedHandler("socialPost")}>
                                    <img className="insights-item__icon" src={SocialsIcon} alt="Socials Icon" />
                                    <Link to="/insights?postType=socialPost">SOCIAL</Link>
                                </li>
                                <li className={"mobile__insights-item" + (pathState.insightAllSelected ? " post-active" : "")} onClick={() => onInsightCategoryChangedHandler("allPost")}>
                                    <img className="insights-item__icon" src={AllIcon} alt="Insights Icon" />
                                    <Link to="/insights?postType=all">ALL</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/contact" activeClassName="active">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header