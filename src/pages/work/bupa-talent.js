import React from 'react'
import Layout from '../../components/layout'

import HeroImage from '../../images/work/Bupa-Talent/png/bupa_talent_944x392.png'

import BupaBookletImage from '../../images/work/Bupa-Talent/png/bupa_booklet_752x528.png'
import BupaOutcomeCardImage from '../../images/work/Bupa-Talent/png/bupa_outcomecards_752x480.png'

import DiageoTechCafeImage from '../../images/work/diageo_techcafe_464x304.png'
import HSBCUniversityImage from '../../images/work/HSBCUniversity_464x304.png'
import SSYImage from '../../images/work/SSY.png'

import HeroImageBlock from '../../components/work-components/hero-image'
import MainContent from '../../components/work-components/main-content'
import OtherCaseStudies from '../../components/work-components/other-case-studies'

import GetInTouch from '../../components/contact-form'

const BupaTalentCaseStudy = () => {
    
    const case_study_data = {
        title: "Bupa Talent Toolkit",
        hero_image: {
            file: HeroImage,
            description: "Cards"
        },
        main_content: [
            {
                description: [
                    "Bupa talent Toolkit is a creative communication guide that helps support the drive \
                    to global standardisation of talent management best practice. The guide was created \
                    to excite and engage Bupa managers and give them the tools to cascade to and engage \
                    their own teams. "
                ],
                type: "text"
            },
            {
                path: BupaBookletImage,
                description: "Bookvar",
                padding_classes: ["padding-t--18", "padding-b--30"],
                type: "image"
            },
            {
                path: BupaOutcomeCardImage,
                description: "Outcome cards",
                padding_classes: ["padding-b--30"],
                type: "image"
            }
        ],
        other_case_studies: [
            {
                url: "/work/diageo-tech-cafe",
                title: "Diageo Tech Café",
                image: DiageoTechCafeImage
            },
            {
                url: "/work/hsbc-university",
                title: "HSBC University",
                image: HSBCUniversityImage
            },
            {
                url: "/work/ssy",
                title: "Simpson Spence Young",
                image: SSYImage
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

export default BupaTalentCaseStudy
