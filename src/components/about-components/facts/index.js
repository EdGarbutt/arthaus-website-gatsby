import React from 'react'

import FactBlock from '../facts/fact-block'

const Facts = ({ data: { title, fact_blocks } }) => {
    return (
        <section
            id="facts"
            className="facts animated wow fadeIn padding-b--30 padding-t--30"
            data-wow-duration="1s">
            <div className="row">
                <div className="col-xs-12 col-md-12 text-center">
                    <div className="container-fluid b" style={{ maxWidth: 944 + 'px', margin: '0 auto' }}>
                        <p style={{}} className="subHead text-center padding-b--30">
                            {title}
                        </p>
                        <div className="display-flex" id="counter">
                            {fact_blocks.map((item, index) => {
                                return <FactBlock key={index} data={item} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Facts