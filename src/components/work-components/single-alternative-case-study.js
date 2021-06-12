import React from 'react'
import { Link } from 'gatsby'

const SingleAlternativeCaseStudy = ({ data: { url, title, image }}) => {
    return (
        <li className="work-carousel__item ">
            <Link to={url} className="work-carousel__item-link">
                <div className="smallText2 strong text-center text--lightGrey padding-t--20 padding-b--20">
                    {title}
                </div>
                <img className="work-carousel__item-img img-fullWidth" src={image} />
            </Link> 
        </li>
    )
}

export default SingleAlternativeCaseStudy