import React from 'react'

import SingleCaseStudy from '../work-components/single-alternative-case-study'

const OtherCaseStudy = ({ data }) => {
    return (
        <section id="work-carousel" className="padding-b--60">
            <p className="heading2 text--midGrey text-center page-title__wrap">
                Our other work
            </p>
            <ul id="other-work-list" className="work-carousel__list display-flex justify-spaceBetween flex-wrap">
                {
                    data.map((case_study, index) => {
                        return React.createElement(
                            SingleCaseStudy, 
                            {
                                key: index,
                                data: case_study
                            }, 
                            null
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default OtherCaseStudy
