import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout';

import ContactBlock from '../components/insights-components/insights-contact-block'

const Insights = () => {
    const data = useStaticQuery(graphql`
        query {
            allInsightsYaml {
                edges {
                  node {
                    title
                  }
                }
              }
        }
    `)

    const insights_data = data.allInsightsYaml.edges[0].node
    return (
        <Layout page_class="toolkitPage" page_title={insights_data.title}>
            
            <ContactBlock />
        </Layout>
    )
}

export default Insights;