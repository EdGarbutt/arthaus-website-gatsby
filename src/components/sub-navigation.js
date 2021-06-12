import React, { useState } from 'react'

import useDocumentScrollThrottled from '../utilities/useDocumentScrollThrottled'
import SubNavItem from './sub-navigation-item';



const SubNav = ({ data: { links }, work_sub_nav = false, work_sub_nav_item_click = {}, work_case_study_type = "" }) => {

    let mapped_nav_items = [];

    const [shouldShowSubNav, setShouldShowSubNav] = useState(false);
  
    // const MINIMUM_SCROLL = 80;
    // const TIMEOUT_DELAY = 400;

    const HEADER_SCROLL = 140;
  
    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;

        setShouldShowSubNav(currentScrollTop > HEADER_SCROLL);

    });
  
    const subNavStyle = shouldShowSubNav ? ' sub-nav-scrolled' : '';

    links.map((item, index) => {
        let sub_nav_attributes = { 
            key: index,
            data: { 
                id: index,
                link: item.link
            }
        }

        if (work_sub_nav) {
            sub_nav_attributes.work_sub_nav_item = true
            sub_nav_attributes.click = work_sub_nav_item_click
            sub_nav_attributes.work_case_study_type = work_case_study_type
        } else {
            sub_nav_attributes.data.scroll_offset = item.offset
            sub_nav_attributes.sub_nav_displayed = shouldShowSubNav
        }

        mapped_nav_items.push(React.createElement(
            SubNavItem, 
            sub_nav_attributes,
            null
        ))
    })

    return (
        <div className="bkg--white">
            <nav className={"sub-nav" + subNavStyle}>
                {mapped_nav_items.map((nav_item, index) => {
                    return nav_item
                })}
            </nav>
        </div>
    )
}

export default SubNav;