import React, { useEffect } from 'react'
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

import BSILogo from '../images/about/BSI logo.png'
import CyberEssentialsLogo from '../images/about/Certified.png'

import SubNav from '../components/about-components/sub-navigation'
import Specialisms from '../components/about-components/specialisms/index'
import Facts from '../components/about-components/facts/index'
import OurPeople from '../components/about-components/people/index'

import GetInTouch from '../components/contact-form'

const About = () => {

    // useEffect(() => {
    //     const wow = new WOW.WOW();
    //     wow.init();
    // });

    const about_data = {
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
                    <SubNav />
                    <Specialisms data={about_data.specialisms} />
                    <Facts data={about_data.facts} />
                    <OurPeople data={about_data.people} />
                    

                    

                    <section
                      id="testimonials"
                      className="animated padding-b--30 padding-t--30"
                    >
                      <div className="container-fluid padding--none">
                        <div className="row">
                          <div className="col-xs-12 col-md-12 white last">
                            <div className="testimonial">
                              <h2
                                className="heading2 heading2--darkBlue strong padding-b--30"
                              >
                                We build relationships
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div id="testimonial-list" className="">
                          <ul
                            className="padding--none display-flex flex-wrap justify-spaceBetween"
                          >
                            <li className="testimonial-card padding-b--18">
                              <div
                                className="bodyText bkg--whiteGrey padding-l--20 padding-r--20 padding-b--20 padding-t--20 testimonial-text"
                              >
                                I just want to say a massive thank you for all
                                your efforts at helping us reach our deadline –
                                despite our last-minute changes. You’ve been a
                                delight to work with, and very supportive.<br />
                                Thanks once again.
                              </div>
                              <div>
                                <div
                                  className="testimonial-logo"
                                  style={{backgroundImage: "url('../images/about/clients/icons/Logos_Diageo.png')"}}
                                ></div>

                                <p
                                  className="smallText2 text--lightGrey text-center"
                                >
                                  Sally Brookes
                                </p>
                                <p
                                  className="smallText2 text--darkBlue text-center"
                                >
                                  Communications Manager | DIAGEO
                                </p>
                              </div>
                            </li>
                            <li className="testimonial-card padding-b--18">
                              <div
                                className="bodyText bkg--whiteGrey padding-l--20 padding-r--20 padding-b--20 padding-t--20 testimonial-text"
                              >
                                I wanted to drop a note to say a very big thank
                                you for all your support, it was a long and
                                quite challenging project but we’ve now reached
                                the finish line.<br />
                                You’ve gone above and beyond to make sure we
                                reach the deadline, so a very big thank you for
                                that as well.
                              </div>
                              <div>
                                <div
                                  className="testimonial-logo"
                                  style={{backgroundImage: "url('../images/about/clients/icons/Logos_Otsuka.png')"}}></div>

                                <p
                                  className="smallText2 text--lightGrey text-center"
                                >
                                  Kajitha Umesh
                                </p>
                                <p
                                  className="smallText2 text--darkBlue text-center"
                                >
                                  Enterprise Applications Manager | Otsuka
                                </p>
                              </div>
                            </li>
                            <li className="testimonial-card padding-b--18">
                              <div
                                className="bodyText bkg--whiteGrey padding-l--20 padding-r--20 padding-b--20 padding-t--20 testimonial-text"
                              >
                                Thanks to you and all the folks at Arthaus that
                                have helped advance our brand over the last
                                year. The impact has been significant.
                              </div>
                              <div>
                                <div
                                  className="testimonial-logo"
                                  style={{backgroundImage: "url('../images/about/clients/icons/Logos_HSBC.png')"}}
                                ></div>

                                <p
                                  className="smallText2 text--lightGrey text-center"
                                >
                                  David Morris
                                </p>
                                <p
                                  className="smallText2 text--darkBlue text-center"
                                >
                                  Global Head of Learning | HSBC
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section
                      id="clients"
                      className="animated wow fadeIn padding-b--30 padding-t--30"
                      data-wow-duration="2s"
                    >
                      <div className="container-fluid">
                        <div className="row white">
                          <h2
                            className="strong heading2 heading2--mainOrange padding-b--18"
                          >
                            Our clients
                          </h2>
                          <p style={{}} className="subHead padding-b--18">
                            SOME OF THE GREAT BUSINESSES WE WORK WITH
                          </p>
                          <div className="col-md-15 col-xs-6">
                            <img
                              style={{animationDelay: "0.25s"}}
                              id="client-logo1"
                              className="client-logo animated wow fadeIn"
                              src={DiageoLogo}
                              alt="client business logo - diageo"
                            />
                          </div>
                          <div className="col-md-15 col-xs-6">
                            <img
                              style={{animationDelay: "0.5s"}}
                              id="client-logo2"
                              className="client-logo animated wow fadeIn"
                              src={WavesLogo}
                              alt="client business logo - waves"
                            />
                          </div>
                          <div className="col-md-15 col-xs-6">
                            <img
                              style={{animationDelay: "0.75s"}}
                              id="client-logo3"
                              className="client-logo animated wow fadeIn"
                              src={ITVLogo}
                              alt="client business logo - itv"
                            />
                          </div>
                          <div className="col-md-15 col-xs-6">
                            <img
                              style={{animationDelay: "1s"}}
                              id="client-logo4"
                              className="client-logo animated wow fadeIn"
                              src={TescoLogo}
                              alt="client business logo - tesco"
                            />
                          </div>
                          <div className="col-md-15 col-xs-6">
                            <img
                              style={{animationDelay: "1.25s"}}
                              id="client-logo5"
                              className="client-logo animated wow fadeIn"
                              src={SSYLogo}
                              alt="client business logo - simpson spence young"
                            />
                          </div>

                          <div className="col-md-15 col-xs-6">
                            <img
                              style={{animationDelay: "1.5s"}}
                              id="client-logo6"
                              className="client-logo animated wow fadeIn"
                              src={AgNovosLogo}
                              alt="client business logo - agnovos"
                            />
                          </div>
                          <div className="col-md-15 col-xs-6">
                            <img
                              style={{animationDelay: "1.75s"}}
                              id="client-logo7"
                              className="client-logo animated wow fadeIn"
                              src={TouristikLogo}
                              alt="client business logo - tui"
                            />
                          </div>
                          <div className="col-md-15 col-xs-6">
                            <img
                              style={{animationDelay: "2s"}}
                              id="client-logo8"
                              className="client-logo animated wow fadeIn"
                              src={LLoydsLogo}
                              alt="client business logo - lloyds register"
                            />
                          </div>
                          <div className="col-md-15 col-xs-6">
                            <img
                              style={{animationDelay: "2.25s"}}
                              id="client-logo9"
                              className="client-logo animated wow fadeIn"
                              src={WorldPayLogo}
                              alt="client business logo - world pay"
                            />
                          </div>
                          <div className="col-md-15 col-xs-6">
                            <img
                              style={{animationDelay: "2.5s"}}
                              id="client-logo10"
                              className="client-logo animated wow fadeIn"
                              src={HSBCLogo}
                              alt="client business logo - hsbc"
                            />
                          </div>

                          <div className="col-md-15 col-xs-6">
                            <img
                              style={{animationDelay: "2.75s"}}
                              id="client-logo11"
                              className="client-logo animated wow fadeIn"
                              src={CocaColaLogo}
                              alt="client business logo - coca cola"
                            />
                          </div>
                          <div className="col-md-15 col-xs-6">
                            <img
                              style={{animationDelay: "3s"}}
                              id="client-logo12"
                              className="client-logo animated wow fadeIn"
                              src={OtsukaLogo}
                              alt="client business logo - otsuka"
                            />
                          </div>
                          <div className="col-md-15 col-xs-6">
                            <img
                              style={{animationDelay: "3.25s"}}
                              id="client-logo13"
                              className="client-logo animated wow fadeIn"
                              src={MarksAndSpencerLogo}
                              alt="client business logo - M&S"
                            />
                          </div>
                          <div className="col-md-15 col-xs-6">
                            <img
                              style={{animationDelay: "3.5s"}}
                              id="client-logo14"
                              className="client-logo animated wow fadeIn"
                              src={DixonsLogo}
                              alt="client business logo - dixons carphone"
                            />
                          </div>
                          <div className="col-md-15 col-xs-6">
                            <img
                              style={{animationDelay: "3.75s"}}
                              id="client-logo15"
                              className="client-logo animated wow fadeIn"
                              src={BupaLogo}
                              alt="client business logo - Bupa"
                            />
                          </div>
                        </div>
                      </div>
                    </section>

                    <section
                      id="quality-assurance"
                      className="animated padding-b--60 padding-t--30"
                    >
                      <div className="row">
                        <div className="col-xs-12 col-md-12">
                          <h2
                            className="strong heading2 heading2--teal text-center padding-b--18"
                          >
                            Quality Assurance
                          </h2>
                          <p className="subHead padding-b--18 text-center">
                            ISO 9001 QUALITY MANAGEMENT CERTIFIED BY BSI,
                            FS707737
                          </p>
                          <div className="display-flex align-center flex-wrap">
                            <p className="col-md-3 col-xs-12 text-center">
                              <img
                                className="BSI-logo"
                                src={BSILogo}
                                alt="Iso 9001 quality management icon in teal colour"
                              />
                            </p>

                            <p className="bodyText col-md-9 col-xs-12 text-left">
                              Arthaus are one of only a few design agencies with
                              a defined quality management system and have been
                              independently assessed by BSI against
                              internationally recognised standards endorsing our
                              commitment to quality and assurance.
                            </p>
                          </div>
                          <p className="subHead padding-b--18 text-center">
                            CYBER ESSENTIALS CERTIFIED
                          </p>
                          <div className="display-flex align-center flex-wrap">
                            <p className="col-md-3 col-xs-12 text-center">
                              <img
                                className="Cyber-Essentials-logo"
                                src={CyberEssentialsLogo}
                                alt="Cyber Essentials logo"
                                style={{maxWidth: "74px"}}
                              />
                            </p>

                            <p className="bodyText col-md-9 col-xs-12 text-left">
                              Continuing our commitment to quality assurance and
                              client security we now have our Cyber Essentials
                              certification to go along with our ISO9001
                              certification. This provides our clients’ with the
                              assurance that we take cyber security and the
                              integrity of their data seriously.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>

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