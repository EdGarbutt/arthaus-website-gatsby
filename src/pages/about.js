import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout';

import SubNav from '../components/sub-navigation'
import Specialisms from '../components/about-components/specialisms/index'
import Facts from '../components/about-components/facts/index'
import OurPeople from '../components/about-components/people/index'
import Testimonials from '../components/about-components/testimonials/index'
import Clients from '../components/about-components/clients/index'
import QualityAssurance from '../components/about-components/quality-assurance/index'

import GetInTouch from '../components/contact-form'

const About = () => {
    const data = useStaticQuery(graphql`
    query {
      allAboutYaml {
        nodes {
          sub_navigation {
            links {
              link
              offset
            }
          }
          specialisms {
            introduction {
              heading
              body
            }
            specialism_list {
              title
              icon_url
              colour
              alternative_text
            }
          }
          facts {
            title
            fact_blocks {
              top_text
              numeric_value
              measurement
              bottom_text
              colour
            }
          }
          people {
            title
            body
            employees {
              name
              role
              image_url
              alternative_text
            }
          }
          testimonials {
            title
            testimonial_blocks {
              name
              role
              company
              company_image
              quote
            }
          }
          clients {
            title
            description
            client_list {
              logo
              alternative_text
            }
          }
          quality_assurance {
            title
            certifications {
              name
              logo
              logo_class_name
              logo_alternative_text
              description
            }
          }
        }
      }
    }
  `)

    const about_data = data.allAboutYaml.nodes[0]
    return (
        <Layout page_class="about" page_title="About us">
          <SubNav data={about_data.sub_navigation} />
          <Specialisms data={about_data.specialisms} />
          <Facts data={about_data.facts} />
          <OurPeople data={about_data.people} />
          <Testimonials data={about_data.testimonials} />
          <Clients data={about_data.clients} />
          <QualityAssurance data={about_data.quality_assurance} />
          {/* <!--============================== New form here ======================--> */}
          <GetInTouch />
        </Layout>
    )
}

export default About;