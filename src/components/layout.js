import React from 'react'

import Header from './header'
import Footer from './footer'

import '../styles/index.scss'

const Layout = ({children, id, page_class}) => {
    const layout_identifier = id ? id : "";
    return (
        <div id={layout_identifier} className={page_class}>
            <div className="container">
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
        
    )
}

export default Layout