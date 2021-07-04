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
    const data = useStaticQuery(graphql`
        query {
            allCaseStudiesYaml(filter: {id: {eq: "4"}}) {
                edges {
                    node {
                        title
                        hero_image {
                            file
                            description
                        }
                        main_content {
                            paragraphs
                            type
                            url
                            button_text
                            padding_classes
                            path
                        }
                        other_case_studies {
                            url
                            title
                            image
                        }
                    }
                }
            }
        }
    `)

    const case_study_data = data.allCaseStudiesYaml.edges[0].node
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
