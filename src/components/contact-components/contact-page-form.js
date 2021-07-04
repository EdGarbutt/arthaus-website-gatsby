import React from 'react'

const ContactForm = () => {
    return (
        <div className="row">
            <div className="col-xs-12 col-md-8" style={{paddingLeft: 0}}>
                <form className="text-left" action="" method="POST">
                    <input type="hidden" name="_redirect" value="https://arthauswebsite.azurewebsites.net/thanks.html" />
                    <div className="form-group col-md-6">
                        <label htmlFor="recipient-name" className="col-form-label text--midGrey">Your name:</label>
                        <input type="text" className="form-control" name="name" id="recipient-name" required="" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="recipient-email" className="col-form-label text--midGrey">Your email:</label>
                        <input type="email" className="form-control" name="email" id="recipient-email" required="" />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="message-text" className="col-form-label col-form-label-lg text--midGrey">
                            Your message
                        </label>
                        <textarea className="form-control" name="message" id="message-text"></textarea>
                    </div>
                    <div className="form-group col-md-12">
                        {/* INSERT CAPTCHA HERE */}
                        {/* <div className="g-recaptcha" data-sitekey="6LdoKucUAAAAAPfEAJG2r0NnwY_xjvhRk2_x7CZc">

                        </div> */}
                    </div>
                    <div className="form-group col-md-4 form-group--sendMsg-btn">
                        <button id="contactSave" type="submit" className="btn bkg--mainOrange smallText1 smallText1--white btn--fullWidth btn--sendMsg">
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
