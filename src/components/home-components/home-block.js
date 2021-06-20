import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const HomeBlock = (props) => {
    const cell = props.data;

    let cell_content = [];

    if (cell.url) {
        // If an internal link
        if (cell.url.charAt(0) === "/") {
            if (cell.url.includes("#")) {
                cell_content.push(
                    React.createElement(
                        AnchorLink, 
                        { 
                            className: 'social-post__link', 
                            rel: 'noopener noreferrer', to: cell.url
                        }, 
                        'Read more'
                    )
                );
            } else {
                cell_content.push(
                    React.createElement(Link, { className: 'social-post__link', 
                    rel: 'noopener noreferrer', to: cell.url }, 'Read more')
                );
            }
        } else {
            cell_content.push(
                React.createElement('a', { className: 'social-post__link', 
                rel: 'noopener noreferrer', href: cell.url, target: "_blank" }, 'Read more')
            );
        }
    }

    if (cell.content.standard) {
        cell.content.standard.map(x =>
            cell_content.push(
                React.createElement(
                    x.html_tag, 
                    (x.classes ? { className: x.classes.join(' ') } : {}),
                    x.text
                )
            )
        )
    }

    if (cell.content.top) {
        cell_content.push(
            React.createElement('div', { className: 'top' },
                cell.content.top.map(x => 
                    React.createElement(
                        x.html_tag, 
                        (x.classes ? { className: x.classes.join(' ') } : {}),
                        x.text
                    )
                )
            )
        );
    }

    if (cell.content.bottom) {
        cell_content.push(
            React.createElement('div', { className: 'bottom' },
                cell.content.bottom.map(x => 
                    React.createElement(
                        x.html_tag, 
                        (x.classes ? { className: x.classes.join(' ') } : {}), 
                        x.text
                    )
                )
            )
        );
    }

    if (cell.url) {
        cell_content.push(
            React.createElement('span', { className: 'plus-icon fa fa-plus-circle' }, '')
        );  
    }

    return (
        <div className={cell.classes.join(' ')}>
            {React.createElement('div', { className: 'content' }, cell_content)}
        </div>
    )
}

export default HomeBlock