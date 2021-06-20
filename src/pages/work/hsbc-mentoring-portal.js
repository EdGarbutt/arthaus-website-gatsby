import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'

import HeroImage from '../../images/work/HSBC-Mentoring-Portal/png/HSBCMentoring_heroimage_944x392.png'

import MentoringProfileImage from '../../images/work/HSBC-Mentoring-Portal/png/mentoringprofile_659x838.png'
import MentoringLaptopImage from '../../images/work/HSBC-Mentoring-Portal/png/mentoringlaptop_775x430.png'

import BupaTalentToolkitImage from '../../images/work/BupaTalent_464x304.png'
import DiageoTechCafeImage from '../../images/work/diageo_techcafe_464x304.png'
import HSBCUniversityImage from '../../images/work/HSBCUniversity_464x304.png'

import HeroImageBlock from '../../components/work-components/hero-image'
import MainContent from '../../components/work-components/main-content'
import OtherCaseStudies from '../../components/work-components/other-case-studies'

import GetInTouch from '../../components/contact-form'

const HSBCMentoringCaseStudy = () => {
    
    const case_study_data = {
        title: "HSBC Mentoring Portal",
        hero_image: {
            file: HeroImage,
            description: "Laptop, showing the HSBC Mentoring Portal"
        },
        main_content: [
            {
                description: [
                    "Design and develop an all new Mentoring solution on Sharepoint to allow our people to easily manage \
                    and build mentoring connections across the business’. This was the task HSBC set us.",
                    "They wanted a portal that would be a great user experience for mentors, mentees and admins. It also \
                    needed to automate as many tasks as possible which were previously handled manually."
                ],
                type: "text"
            },
            {
                path: MentoringProfileImage,
                description: "HSBC Mentoring Portal",
                padding_classes: ["padding-b--30", "padding-t--18"],
                type: "image"
            },
            {
                description: [
                    "Working within the HSBC digital guidelines, the result was a feature rich portal that enabled users \
                    to self register as mentors and mentees. It allowed them to find other mentors, connect with them and \
                    manage those relationships all through an engaging and user-friendly interface.",
                    "The system uses automated work flows to push out emails and surveys which are also captured in an admin \
                    dashboard for monitoring and reporting.",
                    "The system uses automated work flows to push out emails and surveys which are also captured in an admin \
                    dashboard for monitoring and reporting. "
                ],
                type: "text"
            },
            {
                path: MentoringLaptopImage,
                description: "Mentoring Profile on a Laptop",
                padding_classes: ["padding-b--30", "padding-t--18"],
                type: "image"
            }
        ],
        other_case_studies: [
            {
                url: "/work/bupa-talent",
                title: "Bupa talent toolkit",
                image: BupaTalentToolkitImage
            },
            {
                url: "/work/diageo-tech-cafe",
                title: "Diageo Tech Café",
                image: DiageoTechCafeImage
            },
            {
                url: "/work/hsbc-university",
                title: "HSBC University",
                image: HSBCUniversityImage
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

export default HSBCMentoringCaseStudy