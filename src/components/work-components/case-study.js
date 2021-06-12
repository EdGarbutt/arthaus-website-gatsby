import React from 'react'
import { Link } from 'gatsby'

const CaseStudy = ({ data: { title, url, image, image_description, type }, case_study_type }) => {
    let case_study_classes = ["case-card", "padding-t--30"]
    
    if (type !== case_study_type && case_study_type !== "all") {
        case_study_classes.push("hide-case-study")
    }

    return (
        <div className={case_study_classes.join(" ")} data-projectType={type}>
            <div className="case-study">
                <Link to={url} className="case-study--link">
                    <p className="padding-b--18 padding-t--18 subHead strong text--lightGrey text-center case-study--title">{title}</p>
                    <figure className="case-card__figure">
                        <figcaption className="case-card__figure-cap text--white subHead"> Explore the work &gt; </figcaption>
                        <img className="case-card__img" src={image} alt={image_description} />
                    </figure>
                </Link>
            </div>
        </div>
    )
}

export default CaseStudy
