import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'

import HeroImage from '../../images/work/Diageo-Workplace/png/DiageoWorkplace_heroimage_944x392.png'

import DiageoWorkplaceLogo from '../../images/work/Diageo-Workplace/png/workplace_logo_560x152.png'
import DiageoWorkplacePoster from '../../images/work/Diageo-Workplace/png/workplace_posters_752x519.png'
import DiageoWorkplaceCubesImage from '../../images/work/Diageo-Workplace/png/workplacecubes_ipad_752x372.png'


import AgNovosImage from '../../images/work/agnovos_464x304.png'
import HSBCMentoringImage from '../../images/work/HSBCMentoring_464x304.png'
import BupaTalentToolkitImage from '../../images/work/BupaTalent_464x304.png'

import HeroImageBlock from '../../components/work-components/hero-image'
import MainContent from '../../components/work-components/main-content'
import OtherCaseStudies from '../../components/work-components/other-case-studies'

import GetInTouch from '../../components/contact-form'

const DiageoWorkplaceCaseStudy = () => {
    const case_study_data = {
        title: "Diageo Workplace",
        hero_image: {
            file: HeroImage,
            description: "Diageo Workplace Hero Image"
        },
        main_content: [
            {
                description: [
                    "Diageo wanted to introduce a new range of technologies into the Workplace that \
                    would help both individuals and the business collaborate, communicate, connect \
                    and meet long into the next decade. They looked to Arthaus to help them brand, \
                    launch and embed this initiative.",
                    "The YOURWORKPLACE change programme we developed was the result and ran across \
                    all the Diageo comms channels, using various vehicles from: office launch pop-up \
                    events to mail outs; launch animations to online information sites."
                ],
                type: "text"
            },
            {
                path: DiageoWorkplaceLogo,
                description: "Diageo Workplace Logo",
                padding_classes: ["padding-t--20", "padding-b--30"],
                type: "image"
            },
            {
                path: DiageoWorkplacePoster,
                description: "Diageo Workplace Posters",
                padding_classes: ["padding-b--30"],
                type: "image"
            },
            {
                description: [
                    "The initial aim was to raise awareness, then build understanding and finally \
                    drive passion and commitment ",
                    "The campaign has ‘Powered possibilities’ at Diageo – it has been rolled out \
                    across all markets, helping to engage users and to deliver technologies that \
                    are transforming the business. "
                ],
                type: "text"
            },
            {
                path: DiageoWorkplaceCubesImage,
                description: "Diageo Workplace Cubes Image",
                padding_classes: ["padding-t--18", "padding-b--30"],
                type: "image"
            },
        ],
        other_case_studies: [
            {
                url: "/work/agnovos",
                title: "AgNovos website",
                image: AgNovosImage
            },
            {
                url: "/work/hsbc-mentoring-portal",
                title: "HSBC Mentoring",
                image: HSBCMentoringImage
            },
            {
                url: "/work/bupa-talent",
                title: "Bupa talent toolkit",
                image: BupaTalentToolkitImage
            },
            
        ]
    }
    console.log(JSON.stringify(case_study_data))
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

export default DiageoWorkplaceCaseStudy
