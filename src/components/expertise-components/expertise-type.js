import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'

import TypeContent from '../expertise-components/expertise-type-content'
import TypeImage from '../expertise-components/expertise-type-image'

const ExpertiseType = ({ data: { id, heading, sub_heading, description, colour, section_image, image_description, image_position }}) => {

    const text_component = React.createElement(
        TypeContent, 
        { 
            key: 1,
            data: { 
                type_heading: heading, 
                type_sub_heading: sub_heading, 
                type_description: description, 
                type_colour: colour, 
                type_image: section_image, 
                type_image_description: image_description, 
                type_image_position: image_position 
            }
        },
        null
    )

    const image_component = React.createElement(
        TypeImage, 
        { 
            key: 2,
            data: { 
                type_image: section_image, 
                type_image_description: image_description, 
                type_image_position: image_position 
            } 
        },
        null
    )

    let expertise_type_content = [];

    if (image_position === "left") {
        expertise_type_content.push(image_component, text_component)
    } else if (image_position === "right") {
        expertise_type_content.push(text_component, image_component)
    }

    const [sectionAnimated, setSectionAnimated] = useState(false);

    const onEnterViewport = () => {
        setSectionAnimated(true);
    }

    return (
        <ScrollTrigger onEnter={onEnterViewport}>
            <section id={id} className="padding-t--30">
                <div id={`${id}-content`} className={`container-fluid${sectionAnimated ? ' animation' : ''}`}>
                    <div className="row">
                        <div className="col-xs-12 col-md-12">
                            <div className="row">
                                {
                                    expertise_type_content.map(content => {
                                        return content
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollTrigger>
    )
}

export default ExpertiseType
