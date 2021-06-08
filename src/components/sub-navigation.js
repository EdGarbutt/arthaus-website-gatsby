import React, { useState } from 'react'

import useDocumentScrollThrottled from '../utilities/useDocumentScrollThrottled'
import SubNavItem from './sub-navigation-item';



const SubNav = ({ data: { links } }) => {

    let mapped_nav_items = [];

    links.map((item, index) => {
        mapped_nav_items.push({
            id: index,
            link: item.link,
            scroll_offset: item.offset
        });
    })

    //const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowSubNav, setShouldShowSubNav] = useState(false);
  
    // const MINIMUM_SCROLL = 80;
    // const TIMEOUT_DELAY = 400;

    const HEADER_SCROLL = 140;
  
    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;

        setShouldShowSubNav(currentScrollTop > HEADER_SCROLL);

    });
  
    const subNavStyle = shouldShowSubNav ? ' sub-nav-scrolled' : '';

    return (
        <div className="bkg--white">
            <nav className={"sub-nav" + subNavStyle}>
                {mapped_nav_items.map((nav_item, index) => {
                    return (
                        <SubNavItem key={index} data={nav_item} sub_nav_displayed={shouldShowSubNav} />
                    )
                })}
            </nav>
        </div>
    )
}

export default SubNav;