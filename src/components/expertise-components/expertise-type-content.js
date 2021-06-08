import React from 'react'

const TypeContent = ({ data: { type_heading, type_sub_heading, type_description, type_colour, type_image, type_image_description, type_image_position } }) => {
    let column_class = ["col-xs-12", "col-md-6"]

    if (type_image_position === "right") {
        column_class.push("no-padding-left")
    }

    return (
        <div className={column_class.join(" ")}>
            <div className="content-box">
                <h2 className={`heading2 strong heading2--${type_colour} padding-b--18`}>
                    {type_heading}
                </h2>
                <p className={`subHead letter-spacing--none text--${type_colour} padding-b--18`}>
                    {type_sub_heading}
                </p>
                <img className="expertise-img expertise-img__mobile padding-b--30"
                    src={type_image}
                    alt={type_image_description} />
                {
                    type_description.map(text => {
                        return <p className="bodyText">{text}</p>
                    })
                }
            </div>
        </div>
    )
}

export default TypeContent
