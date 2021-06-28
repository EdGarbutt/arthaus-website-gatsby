import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
    
    const data = useStaticQuery(graphql`
        query {
            allCaseStudiesYaml(filter: {id: {eq: "2"}}) {
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

export default BupaTalentCaseStudy
