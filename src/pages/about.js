import React from 'react'
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

    const about_data = {
      sub_navigation: {
        links: [
          {
            link: "facts",
            offset: -100
          },
          {
            link: "people",
            offset: -100
          },
          {
            link: "clients",
            offset: -100
          }
          // "all",
          // "branding",
          // "digital",
          // "communications"
        ]
      },
      specialisms: {
        introduction: {
          heading: "Brand development \n & communications",
          body: [
            "Arthaus is a multi discipline design agency, based in the Old Brewery, Henley.",

            "Our unique mix of design communications expertise and leading edge technology \
            capability, enables us to deliver great user experiences and tangible business \
            benefits through both traditional and digital mediums."
          ]
        },
        specialism_list: [
          {
            title: "Employee engagement",
            icon_url: EmployeeEngagementIcon,
            colour: "burgundy",
            alternative_text: "icon represent employee engagement aspect"
          },
          {
            title: "Marketing communications",
            icon_url: MarketingCommunicationsIcon,
            colour: "darkBlue",
            alternative_text: "icon represent marketing communications aspect"
          },
          {
            title: "Talent management",
            icon_url: TalentManagementIcon,
            colour: "green",
            alternative_text: "icon represent talent management aspect"
          },
          {
            title: "Employer branding",
            icon_url: EmployeeBrandingIcon,
            colour: "mainOrange",
            alternative_text: "icon represent employer branding aspect"
          },
          {
            title: "Internal communications",
            icon_url: InternalCommunicationsIcon,
            colour: "teal",
            alternative_text: "icon represent internal communications aspect"
          },
          {
            title: "Employee development",
            icon_url: EmployeeDevelopmentIcon,
            colour: "navy",
            alternative_text: "icon represent employee development aspect"
          },
        ]
      },
      facts: {
        title: "A FEW FACTS ABOUT US",
        fact_blocks: [
          {
            top_text: "IN BUSINESS FOR",
            numeric_value: 25,
            measurement: "",
            bottom_text: "YEARS",
            colour: "burgundy"
          },
          {
            top_text: "WE ARE",
            numeric_value: 100,
            measurement: "%",
            bottom_text: "PRIVATELY\nOWNED",
            colour: "darkBlue"
          },
          {
            top_text: "WE'VE CREATED",
            numeric_value: 14,
            measurement: "",
            bottom_text: "THOUSAND\nJOB TICKETS",
            colour: "green"
          },
          {
            top_text: "WE HAVE OVER",
            numeric_value: 180,
            measurement: "",
            bottom_text: "YEARS OF\nEXPERIENCE",
            colour: "mainOrange"
          }
        ]
      },
      people: {
        title: "Our people",
        body: "A diverse team of creative designers and developers headed up by a very experienced group of directors.",
        employees: [
          {
            name: "Mark Luckett",
            role: "chairman",
            image_url: MarkLuckettPortrait,
            alternative_text: "staff photo in grey scale -Mark Luckett __ chairman"
          },
          {
            name: "Mark Bowerman",
            role: "Managing Director",
            image_url: MarkBowermanPortrait,
            alternative_text: "staff photo in grey scale -Mark Bowerman __ Managing Director"
          },
          {
            name: "Becky Carter",
            role: "Director/Creative Director",
            image_url: BeckyCarterPortrait,
            alternative_text: "staff photo in grey scale -Becky Carter __ Director/Creative Director"
          },
          {
            name: "Claire Watson",
            role: "Finance Manager",
            image_url: ClaireWatsonPortrait,
            alternative_text: "staff photo in grey scale -Claire Watson __ Finance Manager"
          },
          {
            name: "Matthew Masiak",
            role: "Development Manager",
            image_url: MatthewMasiakPortrait,
            alternative_text: "staff photo in grey scale -Matthew Masiak __ Development Manager"
          },
          {
            name: "Michael Spiers",
            role: "Senior Designer",
            image_url: MichaelSpiersPortrait,
            alternative_text: "staff photo in grey scale -Michael Spiers __ Senior Designer"
          },
          {
            name: "Callum King",
            role: "web developer",
            image_url: CallumKingPortrait,
            alternative_text: "staff photo in grey scale -Callum King __ web developer"
          },
          {
            name: "Hasan Afzal",
            role: "Junior Developer",
            image_url: HasanAfzalPortrait,
            alternative_text: "staff photo in grey scale -Hasan Afzal __ Junior Developer"
          },
          {
            name: "Thao Truong",
            role: "web developer",
            image_url: ThaoTruongPortrait,
            alternative_text: "staff photo in grey scale -Thao Truong __ web developer"
          },
          {
            name: "Roxy Bradley",
            role: "graphic designer",
            image_url: RoxyBradleyPortrait,
            alternative_text: "staff photo in grey scale -Roxy Bradley __ graphic designer"
          }
        ]
      },
      testimonials: {
        title: "We build relationships",
        testimonial_blocks: [
          {
            name: "Sally Brookes",
            role: "Communications Manager",
            company: "Diageo",
            company_image: DiageoTestimonialLogo,
            quote: "I just want to say a massive thank you for all your efforts at helping us reach our deadline \
            – despite our last-minute changes. You’ve been a delight to work with, and very supportive. \
            \nThanks once again."
          },
          {
            name: "Kajitha Umesh",
            role: "Enterprise Applications Manager",
            company: "Otsuka",
            company_image: OtsukaTestimonialLogo,
            quote: "I wanted to drop a note to say a very big thank you for all your support, it was a \
            long and quite challenging project but we’ve now reached the finish line. \
            \nYou've gone above and beyond to make sure we reach the deadline, so a very \
            big thank you for that as well."
          },
          {
            name: "David Morris",
            role: "Global Head of Learning",
            company: "HSBC",
            company_image: HSBCTestimonialLogo,
            quote: "Thanks to you and all the folks at Arthaus that have helped advance our \
            brand over the last year. The impact has been significant."
          },
        ]
      },
      clients: {
        title: "Our clients",
        description: "SOME OF THE GREAT BUSINESSES WE WORK WITH",
        client_list: [
          {
            logo: DiageoLogo,
            alternative_text: "client business logo - diageo"
          },
          {
            logo: WavesLogo,
            alternative_text: "client business logo - waves"
          },
          {
            logo: ITVLogo,
            alternative_text: "client business logo - itv"
          },
          {
            logo: TescoLogo,
            alternative_text: "client business logo - tesco"
          },
          {
            logo: SSYLogo,
            alternative_text: "client business logo - simpson spence young"
          },
          {
            logo: AgNovosLogo,
            alternative_text: "client business logo - agnovos"
          },
          {
            logo: TouristikLogo,
            alternative_text: "client business logo - tui"
          },
          {
            logo: LLoydsLogo,
            alternative_text: "client business logo - lloyds register"
          },
          {
            logo: WorldPayLogo,
            alternative_text: "client business logo - world pay"
          },
          {
            logo: HSBCLogo,
            alternative_text: "client business logo - hsbc"
          },
          {
            logo: CocaColaLogo,
            alternative_text: "client business logo - coca cola"
          },
          {
            logo: OtsukaLogo,
            alternative_text: "client business logo - otsuka"
          },
          {
            logo: MarksAndSpencerLogo,
            alternative_text: "client business logo - M&S"
          },
          {
            logo: DixonsLogo,
            alternative_text: "client business logo - dixons carphone"
          },
          {
            logo: BupaLogo,
            alternative_text: "client business logo - Bupa"
          }
        ]
      },
      quality_assurance: {
        title: "Quality Assurance",
        certifications: [
          {
            name: "ISO 9001 QUALITY MANAGEMENT CERTIFIED BY BSI, FS707737",
            logo: BSILogo,
            logo_class_name: "BSI-logo",
            logo_alternative_text: "Iso 9001 quality management icon in teal colour",
            description: "Arthaus are one of only a few design agencies with\
            a defined quality management system and have been\
            independently assessed by BSI against\
            internationally recognised standards endorsing our\
            commitment to quality and assurance."
          },
          {
            name: "CYBER ESSENTIALS CERTIFIED",
            logo: CyberEssentialsLogo,
            logo_class_name: "Cyber-Essentials-logo",
            logo_alternative_text: "Cyber Essentials logo",
            description: "Continuing our commitment to quality assurance and\
            client security we now have our Cyber Essentials\
            certification to go along with our ISO9001\
            certification. This provides our clients' with the\
            assurance that we take cyber security and the\
            integrity of their data seriously."
          }
        ]
      }
    }

    return (
        <Layout page_class="about">
            <div className="blockMainRow">
              <div className="blockCol">
                <div className="blockRow">
                  <div className="block type-h height-auto">
                    <h1 className="text-center page-title__wrap">
                      <span className="heading1 underline padding-b--18">About us</span>
                    </h1>
                    <SubNav data={about_data.sub_navigation} />
                    <Specialisms data={about_data.specialisms} />
                    <Facts data={about_data.facts} />
                    <OurPeople data={about_data.people} />
                    <Testimonials data={about_data.testimonials} />
                    <Clients data={about_data.clients} />
                    <QualityAssurance data={about_data.quality_assurance} />
                    {/* <!--============================== New form here ======================--> */}
                    <GetInTouch />
                  </div>
                </div>
              </div>
            </div>
        </Layout>
    )
}

export default About;