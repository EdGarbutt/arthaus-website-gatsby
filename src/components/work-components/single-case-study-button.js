import React, {Fragment} from 'react'

const SingleCaseStudyButton = ({ link, text }) => {
    return (
        <Fragment>
            <a className="btn btn--viewSite smallText2 text--darkOrange margin-b--60" href={link} target="_blank" rel="noopener noreferrer">
                {text}
            </a>
        </Fragment>
    )
}

export default SingleCaseStudyButton
