import React from 'react'
import Layout from '../components/layout'

import BrandingImage from '../images/expertise/branding.png'
import CommunicationsImage from '../images/expertise/communications.png'
import DigitalImage from '../images/expertise/digital.png'

import SubNav from '../components/sub-navigation'
import MainContent from '../components/expertise-components/main-content'

import GetInTouch from '../components/contact-form'

const Expertise = () => {

    const expertise_data = {
        sub_navigation: {
            links: [
                {
                  link: "branding",
                  offset: -100
                },
                {
                  link: "communications",
                  offset: -100
                },
                {
                  link: "digital",
                  offset: -100
                }
            ],
        },
        expertise_types: [
            {
                id: "branding",
                heading: "Branding",
                sub_heading: "Develop, nurture, protect & build",
                description: ["We all love brands, they make a statement about us, \
                they make us feel good, they make choosing easier - they are fast! \
                We call them ‘Brain Tattoos’. From initial research & brand positioning, \
                through brand architecture, core concepts, messaging, visual identity and \
                activation, we are helping clients develop their brands both externally and \
                internally. Creating corporate identities and employer brands along with \
                specific identities for programmes, products and events."],
                colour: "burgundy",
                section_image: BrandingImage,
                image_description: "Arthaus Branding image",
                image_position: "left"
            },
            {
                id: "communications",
                heading: "Communications",
                sub_heading: "Enable, engage & inspire",
                description: [
                    "We’re experts in internal communications and employee engagement. From initial \
                    positioning and planning, through concepts, inspirational activation and ongoing \
                    support we have the team that can deliver business changing solutions. ",

                    "Engaged organisations are successful organisations and great internal communication \
                    is at the heart of this. So whether you need to evolve your culture, engage employees, \
                    develop learning capability, build talent or communicate change, we can help."
                ],
                colour: "darkBlue",
                section_image: CommunicationsImage,
                image_description: "Arthaus Communications image",
                image_position: "right"
            },
            {
                id: "digital",
                heading: "Digital",
                sub_heading: "Concept, solutioning, design, development, delivery & support",
                description: [
                    "We design and deliver a wide range of digital projects including, corporate \
                    websites and intranets, bespoke tools and systems, sharepoint environments and \
                    mobile apps, for some of the worlds top businesses.",

                    "Our proven processes, great people, original thinking, technology capability \
                    and ‘real world‘ pragmatism makes us a great partner."
                ],
                colour: "green",
                section_image: DigitalImage,
                image_description: "Arthaus Digital image",
                image_position: "left"
            },
        ]
    }

    return (
        <Layout page_class="expertise" page_title="Expertise">
            <SubNav data={expertise_data.sub_navigation} />
            <MainContent data={expertise_data.expertise_types} />
            <GetInTouch />
        </Layout>
    )

}

export default Expertise
