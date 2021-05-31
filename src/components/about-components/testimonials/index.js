import React from 'react'

import TestimonialBlock from './testimonial-block'

const Testimonials = ({ data: { title, testimonial_blocks } }) => {
    return (
        <section id="testimonials" className="animated padding-b--30 padding-t--30">
            <div className="container-fluid padding--none">
                <div className="row">
                    <div className="col-xs-12 col-md-12 white last">
                    <div className="testimonial">
                        <h2 className="heading2 heading2--darkBlue strong padding-b--30">
                            {title}
                        </h2>
                    </div>
                    </div>
                </div>
                <div id="testimonial-list" className="">
                    <ul className="padding--none display-flex flex-wrap justify-spaceBetween">
                        {testimonial_blocks.map(block => {
                            return <TestimonialBlock data={block} />
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Testimonials

