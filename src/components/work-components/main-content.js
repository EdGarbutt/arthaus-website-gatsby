import React from 'react'

import CaseStudyText from '../work-components/single-case-study-text'
import CaseStudyImage from '../work-components/single-case-study-image'
import CaseStudyButton from '../work-components/single-case-study-button'

const MainContent = ({ data }) => {
    let content_html_tags = []
    data.map((single_content, index) => {
        let single_content_element;

        if (single_content.type === "text") {
            single_content_element = React.createElement(
                CaseStudyText, 
                {
                    key: index,
                    text: single_content.paragraphs
                }, 
                null
            )
        } else if (single_content.type === "button") {
            single_content_element = React.createElement(
                CaseStudyButton, 
                {
                    key: index,
                    link: single_content.url,
                    text: single_content.button_text
                }, 
                null
            )
        } else if (single_content.type === "image") {
            single_content_element = React.createElement(
                CaseStudyImage, 
                {
                    key: index,
                    image_path: single_content.path,
                    image_description: single_content.description,
                    padding_classes: single_content.padding_classes
                }, 
                null
            )
        }
        
        content_html_tags.push(single_content_element)
    })

    return (
        <div style={{ maxWidth: '650px', margin: '0 auto'}}>
            {
                content_html_tags.map(single_content_html => {
                    return single_content_html
                })
            }
        </div>
    )
}

export default MainContent
