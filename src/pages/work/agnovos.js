import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'

import HeroImage from '../../images/work/Agnovos/png/agnovos_heroimage_944x392.png'

import MockUpsImage from '../../images/work/Agnovos/png/agnovos_mockups_752x426.png';
import WebsiteImage from '../../images/work/Agnovos/png/agnovos_website_752x425.png';

import HSBCMentoringImage from '../../images/work/HSBCMentoring_464x304.png'
import BupaTalentToolkitImage from '../../images/work/BupaTalent_464x304.png'
import DiageoTechCafeImage from '../../images/work/diageo_techcafe_464x304.png'

import HeroImageBlock from '../../components/work-components/hero-image'
import MainContent from '../../components/work-components/main-content'
import OtherCaseStudies from '../../components/work-components/other-case-studies'

import GetInTouch from '../../components/contact-form'

const AgNovosCaseStudy = () => {
    const data = useStaticQuery(graphql`
        query {
            allCaseStudiesYaml(filter: {id: {eq: "1"}}) {
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

export default AgNovosCaseStudy