import React from 'react'

const TestimonialBlock = ({ data: { name, role, company, company_image, quote } }) => {
    return (
        <li className="testimonial-card padding-b--18">
            <div className="bodyText bkg--whiteGrey padding-l--20 padding-r--20 padding-b--20 padding-t--20 testimonial-text">
                {quote}
            </div>
            <div>
                <div className="testimonial-logo" style={{backgroundImage: 'url(' + company_image + ')'}}></div>
                <p className="smallText2 text--lightGrey text-center">
                    {name}
                </p>
                <p className="smallText2 text--darkBlue text-center">
                    {role} | {company}
                </p>
            </div>
        </li>
    )
}

export default TestimonialBlock
