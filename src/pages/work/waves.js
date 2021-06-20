import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'

import HeroImage from '../../images/work/Waves/png/waves2_754x453.png'

import WavesSingleTabletImage from '../../images/work/Waves/png/waves1_754x465.png'
import WavesMacImage from '../../images/work/waves/png/waves3_950x658.png'

import DiageoWorkplaceImage from '../../images/work/DiageoWorkplace_464x304.png'
import AgNovosImage from '../../images/work/agnovos_464x304.png'
import HSBCMentoringImage from '../../images/work/HSBCMentoring_464x304.png'

import HeroImageBlock from '../../components/work-components/hero-image'
import MainContent from '../../components/work-components/main-content'
import OtherCaseStudies from '../../components/work-components/other-case-studies'

import GetInTouch from '../../components/contact-form'

const WavesBookingAppCaseStudy = () => {
    const case_study_data = {
        title: "Waves App",
        hero_image: {
            file: HeroImage,
            description: "Waves Hero Image"
        },
        main_content: [
            {
                description: [
                    "Hand car wash specialist Waves approached Arthaus to build a bespoke app that could \
                    be used to check cars in while monitoring their progress through the wash process. \
                    The system also needs to allow for real-time monitoring of the daily output from each \
                    of its 250+ sites. The app was designed to be simple to use and is delivered through \
                    the Apple App Store.",
                    "The app has been extremely successful and continues to be developed with a new Trade \
                    Account section and an Employee Compliance sub-site being recently launched to ensure \
                    all sites comply with Home Office employment laws. "
                ],
                type: "text"
            },
            {
                path: WavesSingleTabletImage,
                description: "Waves App on Tablet",
                padding_classes: ["padding-t--18", "padding-b--30"],
                type: "image"
            },
            {
                path: WavesMacImage,
                description: "Waves on Mac Image",
                padding_classes: ["padding-b--30"],
                type: "image"
            }
        ],
        other_case_studies: [
            {
                url: "/work/diageo-workplace",
                title: "Diageo Workplace",
                image: DiageoWorkplaceImage
            },
            {
                url: "/work/agnovos",
                title: "AgNovos website",
                image: AgNovosImage
            },
            {
                url: "/work/hsbc-mentoring-portal",
                title: "HSBC Mentoring",
                image: HSBCMentoringImage
            }
        ]
    }
    
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

export default WavesBookingAppCaseStudy
