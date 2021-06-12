import React from 'react'

import Header from './header'
import Footer from './footer'

import '../styles/index.scss'

const Layout = ({children, id, page_class, page_title}) => {
    const layout_identifier = id ? id : "";

    let layout_html;

    if (layout_identifier === "home-page") {
        layout_html = React.createElement(
            'div', 
            {
                id: layout_identifier,
                className: page_class
            },
            React.createElement(
                'div',
                {
                    className: "container"
                },
                [
                    React.createElement(
                        Header,
                        {},
                        null
                    ),
                    React.createElement(
                        'main',
                        {},
                        React.createElement(
                            'div',
                            {
                                className: "homepage-grid"
                            },
                            children
                        )
                    ),
                    React.createElement(
                        Footer,
                        {},
                        null
                    )
                ]
            )
        )
    } else {
        layout_html = React.createElement(
            'div', 
            {
                id: layout_identifier,
                className: page_class
            },
            React.createElement(
                'div',
                {
                    className: "container"
                },
                [
                    React.createElement(
                        Header,
                        {},
                        null
                    ),
                    React.createElement(
                        'main',
                        {},
                        React.createElement(
                            'div',
                            {
                                className: "blockMainRow"
                            },
                            React.createElement(
                                'div',
                                {
                                    className: "blockCol"
                                },
                                React.createElement(
                                    'div',
                                    {
                                        className: "blockRow"
                                    },
                                    React.createElement(
                                        'div',
                                        {
                                            className: "block type-h height-auto"
                                        },
                                        [
                                            React.createElement(
                                                'h1',
                                                {
                                                    className: "text-center page-title__wrap"
                                                },
                                                React.createElement(
                                                    'span',
                                                    {
                                                        className: "heading1 underline padding-b--18"
                                                    },
                                                    page_title
                                                )
                                            ),
                                            children
                                        ]
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        Footer,
                        {},
                        null
                    )
                ]
            )
        )
    }

    return layout_html
}

export default Layout