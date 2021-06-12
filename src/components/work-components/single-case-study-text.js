import React from 'react'

const SingleCaseStudyText = ({ text }) => {
    return (
        text.map(paragraph => {
            return (
                <p className="bodyText">
                    {paragraph}
                </p>
            )
        })
    )
}

export default SingleCaseStudyText
