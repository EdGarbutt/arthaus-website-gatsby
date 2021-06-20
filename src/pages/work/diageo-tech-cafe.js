import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'

import HeroImage from '../../images/work/Diageo-Tech-Cafe/png/techcafe_room_944x431.png'

import DiageoTechCafeLogo from '../../images/work/Diageo-Tech-Cafe/png/techcafe_logo_752x209.png'
import DiageoTechCafeWalkawayImage from '../../images/work/Diageo-Tech-Cafe/png/techcafe_walkway_752x233.png'
import DiageoTechCafeStickersImage from '../../images/work/Diageo-Tech-Cafe/png/techcafe_stickers_poster_752x374.png'
import DiageoTechCafeIconsImage from '../../images/work/Diageo-Tech-Cafe/png/techcafe_icons_752x214.png'
import DiageoTechCafeMugsImage from '../../images/work/Diageo-Tech-Cafe/png/techcafe_mugs_752x329.png'

import HSBCUniversityImage from '../../images/work/HSBCUniversity_464x304.png'
import SSYImage from '../../images/work/SSY.png'
import WavesBookingAppImage from '../../images/work/Waves_464x304.png'

import HeroImageBlock from '../../components/work-components/hero-image'
import MainContent from '../../components/work-components/main-content'
import OtherCaseStudies from '../../components/work-components/other-case-studies'

import GetInTouch from '../../components/contact-form'

const DiageoTechCafeCaseStudy = () => {
    
    const case_study_data = {
        title: "Diageo Tech Café",
        hero_image: {
            file: HeroImage,
            description: "Diageo Tech Café booth image"
        },
        main_content: [
            {
                description: [
                    "Diageo has launched an all new initiative to build a great technology employee experience in the \
                    form of a 'Tech Café'. A place where all employees can 'drop in' for face to face on site technical \
                    support, capability building & quick fixes."
                ],
                type: "text"
            },
            {
                path: DiageoTechCafeLogo,
                description: "Diageo Tech Café Logo",
                padding_classes: ["padding-t--18", "padding-b--30"],
                type: "image"
            },
            {
                description: [
                    "A key requirement for its success was to develop a strong, relevant and engaging brand approach and \
                    Arthaus was tasked to deliver this. Supporting Diageo in the scoping and positioning, Arthaus went on \
                    to design and deliver the overall visual brand, which included the design and production for the \
                    physical cafe and all the supporting assets, communications and collateral."
                ],
                type: "text"
            },
            {
                path: DiageoTechCafeWalkawayImage,
                description: "Diageo Tech Café Walkaway",
                padding_classes: ["padding-t--18", "padding-b--30"],
                type: "image"
            },
            {
                path: DiageoTechCafeStickersImage,
                description: "Diageo Tech Café Stickers",
                padding_classes: ["padding-b--30"],
                type: "image"
            },
            {
                path: DiageoTechCafeIconsImage,
                description: "Diageo Tech Café Icons",
                padding_classes: ["padding-b--30"],
                type: "image"
            },
            {
                path: DiageoTechCafeMugsImage,
                description: "Diageo Tech Café Mugs",
                padding_classes: ["padding-b--30"],
                type: "image"
            }
        ],
        other_case_studies: [
            {
                url: "/work/hsbc-university",
                title: "HSBC University",
                image: HSBCUniversityImage
            },
            {
                url: "/work/ssy",
                title: "Simpson Spence Young",
                image: SSYImage
            },
            {
                url: "/work/waves",
                title: "Waves booking app",
                image: WavesBookingAppImage
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

export default DiageoTechCafeCaseStudy
