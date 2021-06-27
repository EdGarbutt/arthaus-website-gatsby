import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const TsAndCs = () => {
    const data = useStaticQuery(graphql`
        query {
            allTermsConditionsYaml {
                edges {
                  node {
                    text
                    documents {
                      title
                      icon
                      url
                    }
                  }
                }
              }
        }
    `)

    const terms_conditions_data = data.allTermsConditionsYaml.edges[0].node

    return (
        <Layout page_class="terms-conditions" page_title="Terms and Conditions">
            <div className="row">
                <div className="arthaus-terms-and-conditions-container">
                    <div className="col-sm-12 col-md-7 animated arthaus-terms-content">
                        {terms_conditions_data.text.map(t => {
                            return (
                                <Fragment>
                                    <p>{t}</p>
                                    <br />
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className="col-sm-12 col-md-5">
                        <div className="terms-of-service-container">
                            <h4>OUR TERMS OF SERVICE</h4>
                            <div className="panel arthaus-documents">
                            {terms_conditions_data.documents.map((d, index) => {
                                const horizontal_line_html = (index !== (terms_conditions_data.documents.length - 1)) ? React.createElement('hr') : ""
                                return (
                                    <Fragment>
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <div className="tos-content icon-container text-center">
                                                    <img className="credit-card" src={d.icon} />
                                                </div>
                                            </div>
                                            <div className="col-xs-9">
                                                <div className="tos-content">
                                                    <h4>{d.title}</h4>
                                                    <a className="btn orange" href={d.url} target="_blank">Download</a>
                                                </div>
                                            </div>
                                        </div>
                                        {horizontal_line_html}
                                    </Fragment>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default TsAndCs
