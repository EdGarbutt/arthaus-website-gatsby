import React from 'react'

const TypeImage = ({ data: { type_image, type_image_description, type_image_position } }) => {
    
    let image_classes = ["expertise-img", "expertise-img__desktop"]

    if (type_image_position === "left") {
        image_classes.push("left-slide animation")
    } else if (type_image_position === "right") {
        image_classes.push("right-slide animation")
    }
    
    return (
        <div className="col-xs-12 col-md-6 padding--none padding-r--5">
            <img className={image_classes.join(" ")}
                src={type_image}
                data-wow-duration="1s"
                alt={type_image_description} />
        </div>
    )
}

export default TypeImage
