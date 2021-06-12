import React from 'react'
import Layout from '../../components/layout'

import HeroImage from '../../images/work/HSBC-University/png/HSBCUni_heroimage_944x392.png'

import HSBCUniIconsImage from '../../images/work/HSBC-University/png/HSBCUni_Icons_944x410.png'
import HSBCUniLaptopImage from '../../images/work/HSBC-University/png/HSBCUni_Laptop_944x587.png'
import HSBCUniCollateralImage from '../../images/work/HSBC-University/png/hsbcUni_collateral_818x641.png'
import HSBCUniOfficeGraphicsImage from '../../images/work/HSBC-University/png/hsbcUni_officegraphics_790x312.png'

import SSYImage from '../../images/work/SSY.png'
import WavesBookingAppImage from '../../images/work/Waves_464x304.png'
import DiageoWorkplaceImage from '../../images/work/DiageoWorkplace_464x304.png'

import HeroImageBlock from '../../components/work-components/hero-image'
import MainContent from '../../components/work-components/main-content'
import OtherCaseStudies from '../../components/work-components/other-case-studies'

import GetInTouch from '../../components/contact-form'

const HSBCUniversityCaseStudy = () => {
    const case_study_data = {
        title: "HSBC University",
        hero_image: {
            file: HeroImage,
            description: "HSBC University hero image"
        },
        main_content: [
            {
                description: [
                    "HSBC set us the challenge of updating how ‘Learning’ was branded, structured, positioned, \
                    communicated and delivered throughout the business. HSBC University was the result, bringing \
                    together the many varied learning areas from across the business, including Leadership, Risk, \
                    Strategy & Performance into a structured and easily accessible brand.",
                    "The visual brand brings this all to life and was created to be distinctive, flexible and easy \
                    to implement across all media whilst adhering to the tight HSBC brand guidelines."
                ],
                type: "text"
            },
            {
                path: HSBCUniIconsImage,
                description: "HSBC University Icons",
                padding_classes: ["padding-t--18", "padding-b--30"],
                type: "image"
            },
            {
                description: [
                    "We worked closely with Nick Crussell, Global head of Learning Design, and the HSBC corporate \
                    brand team to deliver on the brief and to ensure that both the key stake holders and employees \
                    globally were fully engaged and inspired.",
                    "Along with an extensive set of brand guidelines and supporting visual assets, we have carried \
                    the brand across many communications materials from, the University buildings, through interactive \
                    learning modules, to the design and creation of the all new Sharepoint based University portal."
                ],
                type: "text"
            },
            {
                path: HSBCUniLaptopImage,
                description: "HSBC University Laptop Image",
                padding_classes: ["padding-t--18", "padding-b--30"],
                type: "image"
            },
            {
                path: HSBCUniCollateralImage,
                description: "HSBC University Uni Collateral Image",
                padding_classes: ["padding-b--30"],
                type: "image"
            },
            {
                path: HSBCUniOfficeGraphicsImage,
                description: "DHSBC University Office Graphics",
                padding_classes: ["padding-b--30"],
                type: "image"
            }
        ],
        other_case_studies: [
            {
                url: "/work/ssy",
                title: "Simpson Spence Young",
                image: SSYImage
            },
            {
                url: "/work/waves",
                title: "Waves booking app",
                image: WavesBookingAppImage
            },
            {
                url: "/work/diageo-workplace",
                title: "Diageo Workplace",
                image: DiageoWorkplaceImage
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

export default HSBCUniversityCaseStudy
