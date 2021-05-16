import React from 'react'

import Header from './header'
import Footer from './footer'

import '../styles/index.scss'

const Layout = (props) => {
    const layout_identifier = props.id ? props.id : "";
    return (
        <div id={layout_identifier} className={props.page_class}>
            <div className="container">
                <Header />
                <main>
                    {props.children}
                </main>
                <Footer />
            </div>
        </div>
        
    )
}

export default Layout