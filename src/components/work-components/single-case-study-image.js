import React from 'react'

const SingleCaseStudyImage = ({ image_path, image_description, padding_classes }) => {
    return (
        <figure className={padding_classes.join(" ")}>
            <img className="img-fullWidth" src={image_path} alt={image_description} />
        </figure>
    )
}

export default SingleCaseStudyImage
