import React from 'react'

import Layout from '../components/layout'
import HomeBlock from '../components/home-components/home-block'


const Home = () => {

    const gridCells = [
        {
            classes: ['block', 'b-1'],
            content: {
                standard: [
                    {
                        html_tag: 'h1',
                        classes: ['strong'],
                        text: 'We are a multimedia design agency specialising in brand development, creative communications and digital solutions.'
                    }
                ]
            }
            
        },
        {
            classes: ['block', 'b-2'],
            url: '/work/Bupa-Talent.html',
            content: {
                bottom: [
                    {
                        html_tag: 'h1',
                        classes: ['strong'],
                        text: 'Talent toolkit:'
                    },
                    {
                        html_tag: 'h1',
                        classes: ['strong'],
                        text: 'Bupa'
                    }
                ]
            }
        },
        {
            classes: ['block', 'b-3'],
            url: 'https://www.instagram.com/p/B8GlU12AlsY/',
            content: {
                bottom: [
                    {
                        html_tag: 'h1',
                        classes: ['strong'],
                        text: 'Inisights & Ideas:'
                    },
                    {
                        html_tag: 'h1',
                        classes: ['strong'],
                        text: 'Colour of the Year 2020'
                    }
                ]
            }
        },
        {
            classes: ['block', 'b-4'],
            url: 'https://www.instagram.com/p/B8GlU12AlsY/',
            content: {
                top: [
                    {
                        html_tag: 'h2',
                        classes: ['top-caps','strong'],
                        text: 'Digital Expertise'
                    },
                    {
                        html_tag: 'h2',
                        classes: ['strong'],
                        text: 'Conceiving, building and supporting a wide range of user-centric sites, portals and tools'
                    }
                ]
            }
        },
        {
            classes: ['block', 'b-5'],
            url: '/work/ssy.html',
            content: {
                bottom: [
                    {
                        html_tag: 'h1',
                        classes: ['strong'],
                        text: 'Branding & website design:'
                    },
                    {
                        html_tag: 'h1',
                        classes: ['strong'],
                        text: 'Simpson Spence Young'
                    }
                ]
            }
        },
        {
            classes: ['block', 'b-6'],
            url: '/expertise/expertise.html',
            content: {
                bottom: [
                    {
                        html_tag: 'h2',
                        classes: ['strong'],
                        text: 'Our expertise'
                    }
                ]
            }
        },
        {
            classes: ['block', 'b-7'],
            url: '/contact/contact.html',
            content: {
                bottom: [
                    {
                        html_tag: 'h2',
                        classes: ['strong'],
                        text: 'Get in touch'
                    }
                ]
            }
        },
        {
            classes: ['block', 'b-8'],
            url: '/work/hsbc-university.html',
            content: {
                bottom: [
                    {
                        html_tag: 'h1',
                        classes: ['strong'],
                        text: 'Branding:'
                    },
                    {
                        html_tag: 'h1',
                        classes: ['strong'],
                        text: 'HSBC University'
                    }
                ]
            }
        },
        {
            classes: ['block', 'b-9'],
            url: '/work/hsbc-university.html',
            content: {
                bottom: [
                    {
                        html_tag: 'h1',
                        classes: ['strong'],
                        text: 'Mobile booking app:'
                    },
                    {
                        html_tag: 'h1',
                        classes: ['strong'],
                        text: 'Waves'
                    }
                ]
            }
        },
        {
            classes: ['block', 'b-10'],
            url: '/about/about.html',
            content: {
                bottom: [
                    {
                        html_tag: 'h2',
                        classes: ['strong'],
                        text: 'About us'
                    }
                ]
            }
        },
        {
            classes: ['block', 'b-11'],
            url: '/work/diageo-techCafe.html',
            content: {
                bottom: [
                    {
                        html_tag: 'h2',
                        classes: ['strong'],
                        text: 'Employee Engagement'
                    }
                ]
            }
        },
        {
            classes: ['block', 'b-12'],
            url: 'https://www.behance.net/gallery/94203457/Guess-Voice-Mobile-app?tracking_source=curated_tools_xd',
            content: {
                top: [
                    {
                        html_tag: 'h2',
                        classes: ['top-caps','strong'],
                        text: 'Looks like good design'
                    },
                    {
                        html_tag: 'h2',
                        classes: ['strong'],
                        text: 'Interesting design that caught our eye this week...'
                    }
                ],
                bottom: [
                    {
                        html_tag: 'h4',
                        text: 'Updated: 21 May 20'
                    }
                ]
            }
        },
        {
            classes: ['block', 'b-13'],
            url: '/work/agnovos.html',
            content: {
                bottom: [
                    {
                        html_tag: 'h2',
                        classes: ['strong'],
                        text: 'Corporate Website'
                    },
                    {
                        html_tag: 'h2',
                        classes: ['strong'],
                        text: 'AgNovos'
                    }
                ]
            }
        },
        {
            classes: ['block', 'b-14'],
            content: {
                bottom: [
                    {
                        html_tag: 'h2',
                        classes: ['strong'],
                        text: 'Inspiring & exceeding expectations for 25 years'
                    }
                ]
            }
        },
        {
            classes: ['block', 'b-15'],
            url : '/about/about.html#clients',
            content: {
                bottom: [
                    {
                        html_tag: 'h2',
                        classes: ['strong'],
                        text: 'Clients'
                    }
                ]
            }
        },
        {
            classes: ['block', 'b-16'],
            url : '/work/hsbc-mentoring-portal.html',
            content: {
                bottom: [
                    {
                        html_tag: 'h2',
                        classes: ['strong'],
                        text: 'Branding'
                    },
                    {
                        html_tag: 'h2',
                        classes: ['strong'],
                        text: 'HSBC'
                    },
                ]
            }
        }
    ]

    return (
        <Layout id="home-page" page_class="home">
            {gridCells.map((cell, index) => {
                return <HomeBlock key={index} index={index} data={cell} />
            })}
        </Layout>
    )
}

export default Home
