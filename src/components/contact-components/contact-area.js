import React from 'react'

import ContactInformation from '../contact-components/contact-info'
import ContactForm from './contact-page-form'

const ContactArea = () => {
    return (
        <section id="contact-area" className="padding-b--30 padding-t--30">
            <div className="container-fluid">
                <ContactInformation />
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactArea
