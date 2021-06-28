import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'

import HeroImage from '../../images/work/Waves/png/waves2_754x453.png'

import WavesSingleTabletImage from '../../images/work/Waves/png/waves1_754x465.png'
import WavesMacImage from '../../images/work/waves/png/waves3_950x658.png'

import DiageoWorkplaceImage from '../../images/work/DiageoWorkplace_464x304.png'
import AgNovosImage from '../../images/work/agnovos_464x304.png'
import HSBCMentoringImage from '../../images/work/HSBCMentoring_464x304.png'

import HeroImageBlock from '../../components/work-components/hero-image'
import MainContent from '../../components/work-components/main-content'
import OtherCaseStudies from '../../components/work-components/other-case-studies'

import GetInTouch from '../../components/contact-form'

const WavesBookingAppCaseStudy = () => {
    const data = useStaticQuery(graphql`
        query {
            allCaseStudiesYaml(filter: {id: {eq: "9"}}) {
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

export default WavesBookingAppCaseStudy
