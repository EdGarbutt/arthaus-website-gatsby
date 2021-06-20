import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'

import HeroImage from '../../images/work/Agnovos/png/agnovos_heroimage_944x392.png'

import MockUpsImage from '../../images/work/Agnovos/png/agnovos_mockups_752x426.png';
import WebsiteImage from '../../images/work/Agnovos/png/agnovos_website_752x425.png';

import HSBCMentoringImage from '../../images/work/HSBCMentoring_464x304.png'
import BupaTalentToolkitImage from '../../images/work/BupaTalent_464x304.png'
import DiageoTechCafeImage from '../../images/work/diageo_techcafe_464x304.png'

import HeroImageBlock from '../../components/work-components/hero-image'
import MainContent from '../../components/work-components/main-content'
import OtherCaseStudies from '../../components/work-components/other-case-studies'

import GetInTouch from '../../components/contact-form'

const AgNovosCaseStudy = () => {
    
    const case_study_data = {
        title: "AgNovos Website",
        hero_image: {
            file: HeroImage,
            description: "Agnovos website"
        },
        main_content: [
            {
                description: ["AgNovos Healthcare is developing novel treatments \
                for osteoporosis, a devastating bone disease affecting more than \
                200 million women worldwide​. The team approached Arthaus ahead of \
                their launch to market with a request to design and build a website \
                that would fit well with the company’s core values and aimed at medical \
                professional. Originally built in Office 365 we have since updated and \
                rebuilt the site using Umbraco, which is an open source Content Management System."],
                type: "text"
            },
            {
                url: "https://www.agnovos.com/",
                button_text: "View the site",
                type: "button"
            },
            {
                path: MockUpsImage,
                description: "Agnovos site on devices",
                padding_classes: ["padding-b--30"],
                type: "image"
            },
            {
                path: WebsiteImage,
                description: "Agnovos site on devices",
                padding_classes: ["padding-b--30"],
                type: "image"
            },
        ],
        other_case_studies: [
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
            {
                url: "/work/diageo-tech-cafe",
                title: "Diageo Tech Café",
                image: DiageoTechCafeImage
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

export default AgNovosCaseStudy