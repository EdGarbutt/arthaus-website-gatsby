import React, { useState } from 'react'

import GetInTouch from '../contact-form'

const InsightsContactBlock = () => {
    
    const [formState, setFormState] = useState({
        button_text: "Get in touch",
        displayed: false,
        class: ""
    })

    const contactFormDisplayToggle = () => {
        if (formState.displayed) {
            setFormState({
                button_text: "Get in touch",
                displayed: false,
                class: ""
            })
        } else {
            setFormState({
                button_text: "Hide this form",
                displayed: true,
                class: "show-form"
            })
        }
    }

    return (
        <section className="fixed-footer">
            <section className={`contact-form__btn-wrap${formState.displayed ? " contact-form__hide-btn-wrap" : ""}`}>
                <button id="contact-form__show-btn" className="btn bkg--mainOrange smallText1 smallText1--white padding-b--10 padding-t--10 padding-r--20 padding-l--20" onClick={() => contactFormDisplayToggle()}>
                    {formState.button_text}
                </button>
            </section>
            <GetInTouch classes={formState.class} />
        </section>
    )
}

export default InsightsContactBlock
