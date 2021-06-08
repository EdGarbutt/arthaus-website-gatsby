import React from 'react'
import { Link } from 'react-scroll'

const SubNavItem = ({ data: { id, link, scroll_offset }, sub_nav_displayed}) => {
    
    let calculated_offset = scroll_offset;
    
    // Change offset, depending if sticky nav is displayed
    if (!sub_nav_displayed) {
        calculated_offset = (calculated_offset - 48);
    }

    return (
        <div className="opt">
            <Link className="text-uppercase scroll" activeClass="active" to={link} offset={calculated_offset} spy={true} smooth={true}>
                <span>{link}</span>    
            </Link>
        </div>
    )
}

export default SubNavItem