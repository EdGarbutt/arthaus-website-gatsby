import React from 'react'
import Layout from '../components/layout'

import Map from '../components/contact-components/map-block'

import ContactArea from '../components/contact-components/contact-area'

const Contact = () => {

    const contact_data = {
        sub_heading: "Sadly you can’t drop in to say 'hello' right now…",
        second_sub_heading: "but we’d still love to hear from you!",
        third_sub_heading: "For the foreseeable future we’re all working from home\n \
        but we’re still available to help"
    }



    return (
        <Layout page_class="contact" page_title="Contact us">
            <h2 className="heading2 text-center text--midGrey padding-b--18 contact-intro-1">{contact_data.sub_heading}</h2>
            <p className="subHead text-center letter-spacing--none padding-b--18 contact-intro-2">{contact_data.second_sub_heading}</p>
            <p className="bodyText text-center contact-intro-3">{contact_data.third_sub_heading}</p>
            <Map />
            <ContactArea />
        </Layout>
    )
}

export default Contact
