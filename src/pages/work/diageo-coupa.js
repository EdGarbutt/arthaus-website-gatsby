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
    const data = useStaticQuery(graphql`
        query {
            allCaseStudiesYaml(filter: {id: {eq: "3"}}) {
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

export default DiageoCoupaCaseStudy
