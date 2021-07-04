import React, { useState, useEffect } from 'react'

import { useLocation } from '@reach/router'

import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout';

import ToolKit from '../components/insights-components/toolkit';
import ContactBlock from '../components/insights-components/insights-contact-block'

import { getToolKit } from '../utilities/toolKit'

const Insights = ({ query }) => {

    const location = useLocation();
    const searchParameters = new URLSearchParams(location.search);

    let insights_page_title = 'Insights'
    let insights_filter

    if (searchParameters.has("postType")) {
      switch(searchParameters.get("postType")) {
        case "blogPost":
            insights_page_title = 'Blog'
            break;
        case "inspiration":
            insights_page_title = 'Inspiration'
            break;
        case "socialPost":
            insights_page_title = 'Social'
            break;
      }
      insights_filter = searchParameters.get("postType")
    }

    const [toolKit, setToolKit] = useState([]);
    
    useEffect(() => {
      
      getToolKit(insights_filter).then(response => {
        let insight_blocks = [];
        response.forEach(b => {
          const block_object = b.data();
          insight_blocks.push({
            title: block_object.title,
            type: block_object.type,
            url: block_object.linkUrl,
            image: block_object.imgUrl,
            created: block_object.createdAt.toDate()
          })
        })
        insight_blocks = insight_blocks.sort((a, b) => b.created - a.created)
        setToolKit(insight_blocks)
      })
    }, [])
    

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
        <Layout page_class="toolkitPage" page_title={insights_page_title}>
            <ToolKit data={toolKit} />
            <ContactBlock />
        </Layout>
    )
}

export default Insights;