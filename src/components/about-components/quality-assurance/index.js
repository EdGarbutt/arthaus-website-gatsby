import React from 'react'

import IndividualCertification from './individual-certification'

const QualityAssurance = ({ data: { title, certifications } }) => {
    return (
        <section id="quality-assurance" className="animated padding-b--60 padding-t--30">
            <div className="row">
                <div className="col-xs-12 col-md-12">
                    <h2 className="strong heading2 heading2--teal text-center padding-b--18">
                        {title}
                    </h2>
                    {certifications.map((certification, index) => {
                        return <IndividualCertification key={index} data={certification} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default QualityAssurance
