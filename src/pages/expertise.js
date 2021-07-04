import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

import SubNav from '../components/sub-navigation'
import MainContent from '../components/expertise-components/main-content'

import GetInTouch from '../components/contact-form'

const Expertise = () => {
    const data = useStaticQuery(graphql`
        query {
            allExpertiseYaml {
                edges {
                  node {
                    sub_navigation {
                      links {
                        link
                        offset
                      }
                    }
                    expertise_types {
                      id
                      heading
                      sub_heading
                      description
                      colour
                      section_image
                      image_description
                      image_position
                    }
                  }
                }
              }
        }
    `)
    console.log(data)
    const expertise_data = data.allExpertiseYaml.edges[0].node

    return (
        <Layout page_class="expertise" page_title="Expertise">
            <SubNav data={expertise_data.sub_navigation} />
            <MainContent data={expertise_data.expertise_types} />
            <GetInTouch />
        </Layout>
    )

}

export default Expertise
