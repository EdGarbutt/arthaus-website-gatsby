import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import HomeBlock from '../components/home-components/home-block'


const Home = () => {
    const data = useStaticQuery(graphql`
        query {
            allHomeJson {
                edges {
                    node {
                        classes
                        url
                        content {
                            top {
                                html_tag
                                classes
                                text
                            }
                            standard {
                                html_tag
                                classes
                                text
                            }
                            bottom {
                                html_tag
                                classes
                                text
                            }
                        }
                    }
                }
            }
        }
    `)

    const gridCells = data.allHomeJson.edges
    
    return (
        <Layout id="home-page" page_class="home">
            {gridCells.map((cell, index) => {
                return <HomeBlock key={index} index={index} data={cell.node} />
            })}
        </Layout>
    )
}

export default Home
