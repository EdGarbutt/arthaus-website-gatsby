import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
    const data = useStaticQuery(graphql`
        query {
            allCaseStudiesYaml(filter: {id: {eq: "7"}}) {
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

export default HSBCUniversityCaseStudy
