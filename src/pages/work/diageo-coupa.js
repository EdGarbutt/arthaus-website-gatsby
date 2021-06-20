import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'

import HeroImage from '../../images/work/Diageo-Coupa/iMac.jpg'

import DiageoCoupaHangers from '../../images/work/Diageo-Coupa/office-hangers.jpg'
import DiageCoupaiPad from '../../images/work/Diageo-Coupa/iPad.jpg'

import HSBCUniversityImage from '../../images/work/HSBCUniversity_464x304.png'
import SSYImage from '../../images/work/SSY.png'
import WavesBookingAppImage from '../../images/work/Waves_464x304.png'

import HeroImageBlock from '../../components/work-components/hero-image'
import MainContent from '../../components/work-components/main-content'
import OtherCaseStudies from '../../components/work-components/other-case-studies'

import GetInTouch from '../../components/contact-form'

const DiageoCoupaCaseStudy = () => {
    const case_study_data = {
        title: "Diageo Coupa",
        hero_image: {
            file: HeroImage,
            description: "Diageo Coupa iMac image"
        },
        main_content: [
            {
                description: [
                    "Diageo recently launched a new Source to Pay tool for all non-stocked goods and suppliers. \
                    The tool is called Coupa. As such a launch and roll out campaign was required to raise \
                    awareness and engage users across the business.",
                    "Arthaus was asked to develop the overall communication approach and concept that would \
                    cascade through the various channels and comms vehicles selected by Diageo. As part of the \
                    launch Arthaus helped to develop an online elearning module which was required to help embed \
                    and train users on the new tool."
                ],
                type: "text"
            },
            {
                path: DiageoCoupaHangers,
                description: "Diageo Coupa hangers",
                padding_classes: ["padding-t--18", "padding-b--30"],
                type: "image"
            },
            {
                path: DiageCoupaiPad,
                description: "Diageo Coupa on an iPad",
                padding_classes: ["padding-t--18", "padding-b--30"],
                type: "image"
            },
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

export default DiageoCoupaCaseStudy
