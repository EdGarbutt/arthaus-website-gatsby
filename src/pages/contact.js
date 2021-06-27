import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

import Map from '../components/contact-components/map-block'

import ContactArea from '../components/contact-components/contact-area'

const Contact = () => {
    const data = useStaticQuery(graphql`
        query {
            allContactYaml {
                edges {
                  node {
                    title
                    sub_heading
                    second_sub_heading
                    third_sub_heading
                  }
                }
              }
        }
    `)

    const contact_data = data.allContactYaml.edges[0].node

    return (
        <Layout page_class="contact" page_title={contact_data.title}>
            <h2 className="heading2 text-center text--midGrey padding-b--18 contact-intro-1">{contact_data.sub_heading}</h2>
            <p className="subHead text-center letter-spacing--none padding-b--18 contact-intro-2">{contact_data.second_sub_heading}</p>
            <p className="bodyText text-center contact-intro-3">{contact_data.third_sub_heading}</p>
            <Map />
            <ContactArea />
        </Layout>
    )
}

export default Contact
