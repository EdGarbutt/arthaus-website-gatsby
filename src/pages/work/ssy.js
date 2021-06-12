import React from 'react'
import Layout from '../../components/layout'

import HeroImage from '../../images/work/SSY/png/SSY_heroimage_944x392.png'

import SSYSketchesImage from '../../images/work/SSY/png/sketches_752x280.png'
import SSYiPhoneImage from '../../images/work/SSY/png/SSY_iphone_752x565.png'
import SSYStationeryImage from '../../images/work/SSY/png/SSY_stationery_781x534.png'

import WavesBookingAppImage from '../../images/work/Waves_464x304.png'
import DiageoWorkplaceImage from '../../images/work/DiageoWorkplace_464x304.png'
import AgNovosImage from '../../images/work/agnovos_464x304.png'

import HeroImageBlock from '../../components/work-components/hero-image'
import MainContent from '../../components/work-components/main-content'
import OtherCaseStudies from '../../components/work-components/other-case-studies'

import GetInTouch from '../../components/contact-form'

const SSYCaseStudy = () => {
    const case_study_data = {
        title: "Simpson Spence Young",
        hero_image: {
            file: HeroImage,
            description: "SSY Hero Image"
        },
        main_content: [
            {
                description: [
                    "Simpson Spence Young, the world’s largest independent shipbroker, commissioned Arthaus to create \
                    a new brand identity for the business that would build on their heritage whilst reflecting the fact \
                    that this is very much a 21st century business. The brand design included creating brand guidelines, \
                    a new corporate brochure and redesigning the web site. "
                ],
                type: "text"
            },
            {
                url: "https://www.ssyonline.com/",
                button_text: "View the site",
                type: "button"
            },
            {
                path: SSYSketchesImage,
                description: "SSY Logo",
                padding_classes: ["padding-b--30"],
                type: "image"
            },
            {
                path: SSYiPhoneImage,
                description: "SSY site on iPhone",
                padding_classes: ["padding-b--30"],
                type: "image"
            },
            {
                path: SSYStationeryImage,
                description: "SSY Stationery",
                padding_classes: ["padding-b--30"],
                type: "image"
            }
        ],
        other_case_studies: [
            {
                url: "/work/waves",
                title: "Waves booking app",
                image: WavesBookingAppImage
            },
            {
                url: "/work/diageo-workplace",
                title: "Diageo Workplace",
                image: DiageoWorkplaceImage
            },
            {
                url: "/work/agnovos",
                title: "AgNovos website",
                image: AgNovosImage
            }
        ]
    }
    
    return (
        <Layout page_class="work project" page_title={case_study_data.title}>
            <HeroImageBlock data={case_study_data.hero_image} />
            <MainContent data={case_study_data.main_content} />
            <hr />
            <OtherCaseStudies data={case_study_data.other_case_studies} />
            <GetInTouch />
        </Layout>
    )
}

export default SSYCaseStudy
