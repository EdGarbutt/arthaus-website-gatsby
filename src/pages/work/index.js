import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'

import CaseStudy from '../../components/work-components/case-study'

import SubNav from '../../components/sub-navigation'

import GetInTouch from '../../components/contact-form'



const Work = () => {
    const data = useStaticQuery(graphql`
        query {
            allWorkYaml {
                edges {
                  node {
                    sub_navigation {
                      links {
                        link
                        offset
                      }
                    }
                    introduction
                    case_studies {
                      title
                      url
                      image
                      image_description
                      type
                    }
                  }
                }
            }
        }
    `)

    const work_data = data.allWorkYaml.edges[0].node

    const [caseStudyType, setCaseStudyType] = useState("all");

    const setCaseStudyCategory = (category) => {
        if (caseStudyType !== category) {
            setCaseStudyType(category)
        }
    }

    return(
        <Layout page_class="work" page_title="Our Work">
            <SubNav data={work_data.sub_navigation} work_sub_nav={true} work_sub_nav_item_click={setCaseStudyCategory} work_case_study_type={caseStudyType} />
            <div className="subHead letter-spacing--none text-center padding-t--30 padding-b--30">
                {work_data.introduction}
            </div>
            <div id="caseStudies" className="projects-list padding-b--60 display-flex flex-wrap justify-spaceBetween">
                {
                    work_data.case_studies.map((case_study, index) => {
                        return <CaseStudy key={index} data={case_study} case_study_type={caseStudyType} />
                    })
                }
            </div>
            <GetInTouch />
        </Layout>
    )
}

export default Work
