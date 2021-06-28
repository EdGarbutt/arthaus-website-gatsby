import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
    const data = useStaticQuery(graphql`
        query {
            allCaseStudiesYaml(filter: {id: {eq: "8"}}) {
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

export default SSYCaseStudy
