import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'

import HeroImage from '../../images/work/Diageo-Workplace/png/DiageoWorkplace_heroimage_944x392.png'

import DiageoWorkplaceLogo from '../../images/work/Diageo-Workplace/png/workplace_logo_560x152.png'
import DiageoWorkplacePoster from '../../images/work/Diageo-Workplace/png/workplace_posters_752x519.png'
import DiageoWorkplaceCubesImage from '../../images/work/Diageo-Workplace/png/workplacecubes_ipad_752x372.png'


import AgNovosImage from '../../images/work/agnovos_464x304.png'
import HSBCMentoringImage from '../../images/work/HSBCMentoring_464x304.png'
import BupaTalentToolkitImage from '../../images/work/BupaTalent_464x304.png'

import HeroImageBlock from '../../components/work-components/hero-image'
import MainContent from '../../components/work-components/main-content'
import OtherCaseStudies from '../../components/work-components/other-case-studies'

import GetInTouch from '../../components/contact-form'

const DiageoWorkplaceCaseStudy = () => {
    const data = useStaticQuery(graphql`
        query {
            allCaseStudiesYaml(filter: {id: {eq: "5"}}) {
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

export default DiageoWorkplaceCaseStudy
