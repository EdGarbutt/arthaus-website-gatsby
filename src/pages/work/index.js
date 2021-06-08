import React from 'react'
import Layout from '../../components/layout'

import SubNav from '../../components/sub-navigation'

import GetInTouch from '../../components/contact-form'

const Work = () => {
    
    const work_data = {
        sub_navigation: {
            links: [
                {
                  link: "all",
                  offset: -100
                },
                {
                  link: "branding",
                  offset: 0
                },
                {
                  link: "digital",
                  offset: 0
                },
                {
                  link: "communications",
                  offset: 0
                }
            ]
        },
        introduction: "Whether you need a powerful brand, engaging communications or a \
        great user centric digital solution, we have the skills, expertise \
        and experience to deliver."
    }

    return(
        <Layout page_class="work">
            <div className="blockMainRow">
                <div className="blockCol">
                    <div className="blockRow">
                        <div className="block type-h height-auto">
                            <h1 className="text-center page-title__wrap">
                                <span className="heading1 underline padding-b--18">Our Work</span>
                            </h1>
                            <SubNav data={work_data.sub_navigation} />
                            <div className="subHead letter-spacing--none text-center padding-t--30 padding-b--30">
                                {work_data.introduction}
                            </div>
                            <GetInTouch />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Work
