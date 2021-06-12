import React from 'react'
import { Link } from 'react-scroll'

const SubNavItem = ({ data: { id, link, scroll_offset = 0 }, sub_nav_displayed = false, work_sub_nav_item = false, click = {}, work_case_study_type = ""}) => {
    
    let calculated_offset = scroll_offset;
    
    // Change offset, depending if sticky nav is displayed
    if (!sub_nav_displayed) {
        calculated_offset = (calculated_offset - 48);
    }

    let single_item_link;
    
    if (work_sub_nav_item) {
        single_item_link = React.createElement(
            'div', 
            {
                className: `opt${work_case_study_type === link ? " active" : ""}`,
                onClick: () => click(link)
            },
            React.createElement(
                'div',
                {
                    className: "text-uppercase case-study-category"
                },
                React.createElement(
                    'span',
                    {},
                    link
                )
            )
        )
    } else {
        single_item_link = React.createElement(
            'div', 
            {
                className: "opt"
            },
            React.createElement(
                Link,
                {
                    className: "text-uppercase scroll",
                    activeClass: "active",
                    to: link,
                    offset: calculated_offset,
                    spy: true,
                    smooth: true
                },
                React.createElement(
                    'span',
                    {},
                    link
                )
            )
        )
    }
    

    return (
        single_item_link
        // <div className="opt">
        //     <Link className="text-uppercase scroll" activeClass="active" to={link} offset={calculated_offset} spy={true} smooth={true}>
        //         <span>{link}</span>    
        //     </Link>
        // </div>
    )
}

export default SubNavItem