import React, { Fragment } from 'react'

import Layout from '../components/layout'

import GeneralIcon from '../images/termsandconditions/general_icon.png'
import CreditCardIcon from '../images/termsandconditions/creditcard_icon.png'
import PadlockIcon from '../images/termsandconditions/privacy_icon.png'
import GlobalIcon from '../images/termsandconditions/cookie_icon.png'

const TsAndCs = () => {

    const terms_conditions_data = {
        text: [
            "Any use by you of the website operated by Arthaus Visual Communications Limited ('Arthaus') \
            at www.arthaus.co.uk is conditional upon your acceptance of these Terms & Conditions, including \
            our Privacy Statement. We reserve the right to amend these Terms & Conditions from time to time \
            without notice and at our discretion. It is your responsibility periodically to review this page \
            for updates.",
            "The information contained on this website has been prepared for the purpose of providing general \
            information about Arthaus.",
            "Arthaus does not represent that the information contained is accurate, comprehensive, verified or \
            compvare, and accepts no liability for the accuracy or compvareness of the information contained on \
            the website or for any reliance placed by any person on the information. Any visitors using information \
            contained on this website do so entirely at their own risk. You may view the Site and you are welcome \
            to print hard copies of material on it solely for your lawful, personal, non-commercial use. All other \
            copying, whether in electronic, hard copy or other format, is prohibited. All other rights are reserved.",
            "Additionally, Arthaus does not accept responsibility for the accuracy of any information that may be \
            accessed through this website by the use of hypertext links to sites provided by other organisations, \
            nor will ArtHaus be held liable for any loss or damage arising out of such use.",
            "The registered office of Arthaus Visual Communications Limited is:",
            "24/26 Old Brewery Lane, New Street, Henley on Thames, Oxon RG9 2DE.",
            "The company is registered in UK No: 2072604"
        ],
        documents: [
            {
                title: "General terms and conditions",
                icon: GeneralIcon,
                url: "https://www.arthaus.co.uk/documents/Arthaus_Terms_General.pdf"
            },
            {
                title: "Credit card payment terms and conditions",
                icon: CreditCardIcon,
                url: "https://www.arthaus.co.uk/documents/Arthaus_Terms_Creditcard.pdf"
            },
            {
                title: "Privacy policy",
                icon: PadlockIcon,
                url: "https://www.arthaus.co.uk/documents/Privacy%20Policy.pdf"
            },
            {
                title: "Cookie policy",
                icon: GlobalIcon,
                url: "https://www.arthaus.co.uk/documents/Cookie%20Policy.pdf"
            }
        ]
    }

    return (
        <Layout page_class="terms-conditions" page_title="Terms and Conditions">
            <div className="row">
                <div className="arthaus-terms-and-conditions-container">
                    <div className="col-sm-12 col-md-7 animated arthaus-terms-content">
                        {terms_conditions_data.text.map(t => {
                            return (
                                <Fragment>
                                    <p>{t}</p>
                                    <br />
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className="col-sm-12 col-md-5">
                        <div className="terms-of-service-container">
                            <h4>OUR TERMS OF SERVICE</h4>
                            <div className="panel arthaus-documents">
                            {terms_conditions_data.documents.map((d, index) => {
                                const horizontal_line_html = (index !== (terms_conditions_data.documents.length - 1)) ? React.createElement('hr') : ""
                                return (
                                    <Fragment>
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <div className="tos-content icon-container text-center">
                                                    <img className="credit-card" src={d.icon} />
                                                </div>
                                            </div>
                                            <div className="col-xs-9">
                                                <div className="tos-content">
                                                    <h4>{d.title}</h4>
                                                    <a className="btn orange" href={d.url} target="_blank">Download</a>
                                                </div>
                                            </div>
                                        </div>
                                        {horizontal_line_html}
                                    </Fragment>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default TsAndCs
