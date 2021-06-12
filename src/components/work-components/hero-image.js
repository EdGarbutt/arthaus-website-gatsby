import React from 'react'

const HeroImage = ({ data: { file, description } }) => {
    return (
        <figure className="hero-image padding-b--60">
            <img
              className="img-fullWidth"
              src={file}
              alt={description}
            />
        </figure>
    )
}

export default HeroImage
