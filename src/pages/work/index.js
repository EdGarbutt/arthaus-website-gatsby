import React, { useState } from 'react'
import Layout from '../../components/layout'

import AgNovosWebsiteImage from '../../images/work/agnovos_464x304.png'
import HSBCMentoringImage from '../../images/work/HSBCMentoring_464x304.png'
import BupaTalentToolkitImage from '../../images/work/BupaTalent_464x304.png'
import DiageoTechCafeImage from '../../images/work/diageo_techcafe_464x304.png'
import HSBCUniversityImage from '../../images/work/HSBCUniversity_464x304.png'
import SSYImage from '../../images/work/SSY.png'
import WavesBookingAppImage from '../../images/work/Waves_464x304.png'
import DiageoWorkplaceImage from '../../images/work/DiageoWorkplace_464x304.png'

import CaseStudy from '../../components/work-components/case-study'

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
        and experience to deliver.",
        case_studies: [
           {
               title: "AgNovos website",
               url: "agnovos",
               image: AgNovosWebsiteImage,
               image_description: "thumbnail image for the work case study - Bupa talent toolkit - communications",
               type: "digital"
           },
           {
                title: "HSBC Mentoring",
                url: "hsbc-mentoring-portal",
                image: HSBCMentoringImage,
                image_description: "thumbnail image for the work case study - HSBC Mentoring - digital",
                type: "digital"
            },
            {
                title: "Bupa talent toolkit",
                url: "bupa-talent",
                image: BupaTalentToolkitImage,
                image_description: "thumbnail image for the work case study - Bupa talent toolkit - communications",
                type: "communications"
            },
            {
                title: "Diageo Tech Café",
                url: "diageo-tech-cafe",
                image: DiageoTechCafeImage,
                image_description: "thumbnail image for the work case study - Diageo Tech Café - brand",
                type: "branding"
            },
            {
                title: "HSBC University",
                url: "hsbc-university",
                image: HSBCUniversityImage,
                image_description: "thumbnail image for the work case study - HSBC University - brand",
                type: "branding"
            },
            {
                title: "Simpson Spence Young",
                url: "ssy",
                image: SSYImage,
                image_description: "thumbnail image for the work case study - Simpson Spence Young - brand",
                type: "branding"
            },
            {
                title: "Waves booking app",
                url: "waves",
                image: WavesBookingAppImage,
                image_description: "thumbnail image for the work case study - Waves booking app - digital",
                type: "digital"
            },
            {
                title: "Diageo Workplace",
                url: "diageo-workplace",
                image: DiageoWorkplaceImage,
                image_description: "thumbnail image for the work case study - Diageo Workplace - communications",
                type: "communications"
            },
        ]
    }

    const [caseStudyType, setCaseStudyType] = useState("all");

    const setCaseStudyCategory = (category) => {
        if (caseStudyType !== category) {
            setCaseStudyType(category)
        }
    }

    return(
        <Layout page_class="work" page_title="Our Work">
            <SubNav data={work_data.sub_navigation} work_sub_nav={true} work_sub_nav_item_click={setCaseStudyCategory} work_case_study_type={caseStudyType} />
            <div className="subHead letter-spacing--none text-center padding-t--30 padding-b--30">
                {work_data.introduction}
            </div>
            <div id="caseStudies" className="projects-list padding-b--60 display-flex flex-wrap justify-spaceBetween">
                {
                    work_data.case_studies.map((case_study, index) => {
                        return <CaseStudy key={index} data={case_study} case_study_type={caseStudyType} />
                    })
                }
            </div>
            <GetInTouch />
        </Layout>
    )
}

export default Work
