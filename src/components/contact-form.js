import React from 'react'

const ContactUs = () => {
    return (
        <section id="contact-form">
            <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-md-12 text-center bkg--whiteGrey padding-b--30 padding-t--30">
                <h2 className="strong heading2 text--midGrey padding-b--18" id="contactUsModalLabel">
                    Get in touch
                </h2>
                <p className="bodyText padding-b--30">
                    Contact us to find out how we can help you.
                </p>
                <div style={{maxWidth: 650 + "px", margin: "0 auto"}}>
                    <form
                    className="text-left"
                    method="POST"
                    action="/contact/contact.aspx/SubmitContactForm"
                    >
                    <input
                        type="checkbox"
                        name="_honeypot"
                        style={{display: "none"}}
                        tabIndex="-1"
                        autoComplete="off"
                    />
                    <input
                        type="hidden"
                        name="_redirect"
                        value="https://arthaus.co.uk/thanks.html"
                    />
                    <div className="form-group col-md-6">
                        <label htmlFor="recipient-name" className="col-form-label">Your name:</label>
                        <input type="text" className="form-control" name="name" id="recipient-name" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="recipient-email" className="col-form-label">Your email:</label>
                        <input type="email" className="form-control" name="email" id="recipient-email" required />
                    </div>
                    <div className="form-group col-md-9">
                        <label htmlFor="message-text" className="col-form-label col-form-label-lg">
                            Your message
                        </label>
                        <textarea className="form-control" name="message" id="message-text"></textarea>
                    </div>
                    <div className="form-group col-md-12">
                        <div className="g-recaptcha" data-sitekey="6LdoKucUAAAAAPfEAJG2r0NnwY_xjvhRk2_x7CZc"></div>
                    </div>
                    <div className="form-group col-md-3 form-group--sendMsg-btn">
                        <button id="contactSave" type="submit" className="btn bkg--mainOrange smallText1 smallText1--white btn--fullWidth btn--sendMsg">
                            Send message
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default ContactUs