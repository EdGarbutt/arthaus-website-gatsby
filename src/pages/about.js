import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout';

import EmployeeEngagementIcon from '../images/about/icons/ee-icon.png'
import MarketingCommunicationsIcon from '../images/about/icons/mc-icon.png'
import TalentManagementIcon from '../images/about/icons/tm-icon.png'
import EmployeeBrandingIcon from '../images/about/icons/eb-icon.png'
import InternalCommunicationsIcon from '../images/about/icons/ic-icon.png'
import EmployeeDevelopmentIcon from '../images/about/icons/ed-icon.png'

import AgNovosLogo from '../images/about/clients/agnovos_logo.png'
import BupaLogo from '../images/about/clients/bupa_logo.png'
import CocaColaLogo from '../images/about/clients/cocacola_logo.png'
import DiageoLogo from '../images/about/clients/diageo_logo.png'
import DixonsLogo from '../images/about/clients/dixons_logo.png'
import HSBCLogo from '../images/about/clients/hsbc_logo.png'
import ITVLogo from '../images/about/clients/itv_logo.png'
import LLoydsLogo from '../images/about/clients/lloyds_logo.png'
import MarksAndSpencerLogo from '../images/about/clients/M&S_logo.png'
import OtsukaLogo from '../images/about/clients/otsuka_logo.png'
import SSYLogo from '../images/about/clients/ssy_logo.png'
import TescoLogo from '../images/about/clients/tesco_logo.png'
import TouristikLogo from '../images/about/clients/tui_logo.png'
import WavesLogo from '../images/about/clients/waves_logo.png'
import WorldPayLogo from '../images/about/clients/worldpay_logo.png'

import MarkLuckettPortrait from '../images/about/staff/Mark L.png'
import MarkBowermanPortrait from '../images/about/staff/Mark B.png'
import BeckyCarterPortrait from '../images/about/staff/Becky.png'
import ClaireWatsonPortrait from '../images/about/staff/Claire.png'
import MatthewMasiakPortrait from '../images/about/staff/Matthew.png'
import MichaelSpiersPortrait from '../images/about/staff/Mike.png'
import CallumKingPortrait from '../images/about/staff/Callum.png'
import HasanAfzalPortrait from '../images/about/staff/Hasan.png'
import ThaoTruongPortrait from '../images/about/staff/Thao.png'
import RoxyBradleyPortrait from '../images/about/staff/Roxy.png'

import DiageoTestimonialLogo from '../images/about/clients/icons/Logos_Diageo.png'
import OtsukaTestimonialLogo from '../images/about/clients/icons/Logos_Otsuka.png'
import HSBCTestimonialLogo from '../images/about/clients/icons/Logos_HSBC.png'

import BSILogo from '../images/about/BSI logo.png'
import CyberEssentialsLogo from '../images/about/Certified.png'

import SubNav from '../components/sub-navigation'
import Specialisms from '../components/about-components/specialisms/index'
import Facts from '../components/about-components/facts/index'
import OurPeople from '../components/about-components/people/index'
import Testimonials from '../components/about-components/testimonials/index'
import Clients from '../components/about-components/clients/index'
import QualityAssurance from '../components/about-components/quality-assurance/index'

import GetInTouch from '../components/contact-form'

const About = () => {
    const data = useStaticQuery(graphql`
    query {
      allAboutYaml {
        nodes {
          sub_navigation {
            links {
              link
              offset
            }
          }
          specialisms {
            introduction {
              heading
              body
            }
            specialism_list {
              title
              icon_url
              colour
              alternative_text
            }
          }
          facts {
            title
            fact_blocks {
              top_text
              numeric_value
              measurement
              bottom_text
              colour
            }
          }
          people {
            title
            body
            employees {
              name
              role
              image_url
              alternative_text
            }
          }
          testimonials {
            title
            testimonial_blocks {
              name
              role
              company
              company_image
              quote
            }
          }
          clients {
            title
            description
            client_list {
              logo
              alternative_text
            }
          }
          quality_assurance {
            title
            certifications {
              name
              logo
              logo_class_name
              logo_alternative_text
              description
            }
          }
        }
      }
    }
  `)

    const about_data = data.allAboutYaml.nodes[0]
    return (
        <Layout page_class="about" page_title="About us">
          <SubNav data={about_data.sub_navigation} />
          <Specialisms data={about_data.specialisms} />
          <Facts data={about_data.facts} />
          <OurPeople data={about_data.people} />
          <Testimonials data={about_data.testimonials} />
          <Clients data={about_data.clients} />
          <QualityAssurance data={about_data.quality_assurance} />
          {/* <!--============================== New form here ======================--> */}
          <GetInTouch />
        </Layout>
    )
}

export default About;