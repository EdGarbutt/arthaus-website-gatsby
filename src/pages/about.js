import React, { useEffect } from 'react'
import Layout from '../components/layout';

import WOW from 'wowjs/dist/wow'

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

import BSILogo from '../images/about/BSI logo.png'
import CyberEssentialsLogo from '../images/about/Certified.png'



const About = () => {
    const wow = new WOW.WOW();
   wow.init();

    // useEffect(() => {
    //     const wow = new WOW.WOW();
    //     wow.init();
    // });

    return (
        <Layout page_class="about">
            <div className="blockMainRow">
              <div className="blockCol">
                <div className="blockRow">
                  <div className="block type-h height-auto">
                    <h1 className="text-center page-title__wrap">
                      <span className="heading1 underline padding-b--18"
                        >About us</span
                      >
                    </h1>
                    <div className="bkg--white">
                      <nav className="sub-nav">
                        <div className="opt active">
                          <a
                            className="scroll"
                            href="#facts"
                            rel="noopener noreferrer"
                            ><span>FACTS</span></a
                          >
                        </div>
                        <div className="opt">
                          <a
                            className="scroll"
                            href="#people"
                            rel="noopener noreferrer"
                            ><span>PEOPLE</span></a
                          >
                        </div>
                        <div className="opt">
                          <a
                            className="scroll"
                            href="#clients"
                            rel="noopener noreferrer"
                            ><span>CLIENTS</span></a
                          >
                        </div>
                      </nav>
                    </div>

                    <section
                      id="specialisms"
                      className="specialisms animated padding-b--30 padding-t--30"
                    >
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-xs-12 col-md-12 padding--none">
                            <div className="row">
                              <div className="col-md-6">
                                <h2
                                  className="heading2 strong text-left heading2--burgundy padding-b--18"
                                >
                                  Brand development <br />
                                  &amp; communications
                                </h2>

                                <p className="bodyText padding-b--10">
                                  Arthaus is a multi discipline design agency,
                                  based in the Old Brewery, Henley.
                                </p>
                                <p className="bodyText">
                                  Our unique mix of design communications
                                  expertise and leading edge technology
                                  capability, enables us to deliver great user
                                  experiences and tangible business benefits
                                  through both traditional and digital mediums.
                                </p>
                              </div>
                              <div
                                className="col-md-6 display-flex flex-wrap justify-end padding-l--none spec-list"
                              >
                                <div
                                  className="spec-wrap padding-l--5 padding-r--5"
                                >
                                  <div
                                    className="display-flex direction-col align-center border border--burgundy padding-b--25 padding-t--25"
                                  >
                                    <figure className="spec-icon">
                                      <img
                                        src={EmployeeEngagementIcon}
                                        alt="icon represent employee engagement aspect"
                                      />
                                    </figure>

                                    <p
                                      className="strong smallText2 smallText2--burgundy text-center"
                                    >
                                      Employee<br />engagement
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="spec-wrap padding-l--5 padding-r--5"
                                >
                                  <div
                                    className="display-flex direction-col align-center border border--darkBlue padding-b--25 padding-t--25"
                                  >
                                    <figure className="spec-icon">
                                      <img
                                        src={MarketingCommunicationsIcon}
                                        alt="icon represent marketing communications aspect"
                                      />
                                    </figure>

                                    <p
                                      className="strong smallText2 smallText2--darkBlue text-center"
                                    >
                                      Marketing<br />communications
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="spec-wrap padding-l--5 padding-r--5"
                                >
                                  <div
                                    className="display-flex direction-col align-center border border--green padding-b--25 padding-t--25"
                                  >
                                    <figure className="spec-icon">
                                      <img
                                        src={TalentManagementIcon}
                                        alt="icon represent talent management aspect"
                                      />
                                    </figure>

                                    <p
                                      className="strong smallText2 smallText2--green text-center"
                                    >
                                      Talent<br />management
                                    </p>
                                  </div>
                                </div>

                                <div
                                  className="spec-wrap padding-l--5 padding-r--5"
                                >
                                  <div
                                    className="display-flex direction-col align-center border border--mainOrange padding-b--25 padding-t--25"
                                  >
                                    <figure className="spec-icon">
                                      <img
                                        src={EmployeeBrandingIcon}
                                        alt="icon represent employer branding aspect"
                                      />
                                    </figure>

                                    <p
                                      className="strong smallText2 smallText2--mainOrange text-center"
                                    >
                                      Employer<br />branding
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="spec-wrap padding-l--5 padding-r--5"
                                >
                                  <div
                                    className="display-flex direction-col align-center border border--teal padding-b--25 padding-t--25"
                                  >
                                    <figure className="spec-icon">
                                      <img
                                        src={InternalCommunicationsIcon}
                                        alt="icon represent internal communications aspect"
                                      />
                                    </figure>

                                    <p
                                      className="strong smallText2 smallText2--teal text-center"
                                    >
                                      Internal<br />communications
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="spec-wrap padding-l--5 padding-r--5"
                                >
                                  <div
                                    className="display-flex direction-col align-center border border--navy padding-b--25 padding-t--25"
                                  >
                                    <figure className="spec-icon">
                                      <img
                                        src={EmployeeDevelopmentIcon}
                                        alt="icon represent employee development aspect"
                                      />
                                    </figure>

                                    <p
                                      className="strong smallText2 smallText2--navy text-center"
                                    >
                                      Employee<br />development
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section
                      id="facts"
                      className="facts animated wow fadeIn padding-b--30 padding-t--30"
                      data-wow-duration="1s"
                    >
                      <div className="row">
                        <div className="col-xs-12 col-md-12 text-center">
                          <div
                            className="container-fluid b"
                            style={{maxWidth: 944 + 'px', margin: '0 auto'}}
                          >
                            <p
                              style={{}}
                              className="subHead text-center padding-b--30"
                            >
                              A FEW FACTS ABOUT US
                            </p>

                            <div className="display-flex" id="counter">
                              <div className="padding--none counter-wrap">
                                <div
                                  className="counter-item text-center wow fadeIn"
                                  data-wow-duration="1s"
                                >
                                  <p className="smallText1 top">IN BUSINESS FOR</p>
                                  <p className="subHead text--burgundy">
                                    <span className="count-value" data-count="25"
                                      >0</span
                                    >
                                  </p>
                                  <p className="smallText1 bottom">YEARS</p>
                                  
                                </div>
                              </div>
                              <div className="padding--none counter-wrap">
                                <div
                                  className="counter-item text-center wow fadeIn"
                                  data-wow-duration="1s"
                                >
                                  <p className="smallText1 top">WE ARE</p>
                                  <p
                                    className="subHead text--darkBlue"
                                    style={{lineHeight: 1, paddingTop: 5 + "px"}}
                                  >
                                    <span className="count-value" data-count="100"
                                      >0</span
                                    ><span className="count-value">%</span>
                                  </p>
                                  <p className="smallText1 bottom">
                                    PRIVATELY<br />OWNED
                                  </p>
                                </div>
                              </div>
                              <div className="padding--none counter-wrap">
                                <div
                                  className="counter-item text-center wow fadeIn"
                                  data-wow-duration="1s"
                                >
                                  <p className="smallText1 top">WE‘VE CREATED</p>
                                  <p
                                    className="subHead text--green"
                                    style={{lineHeight: 1, paddingTop: "5px"}}
                                  >
                                    <span className="count-value" data-count="14"
                                      >0</span
                                    >
                                  </p>
                                  <p className="smallText1 bottom">
                                    THOUSAND<br />JOB TICKETS
                                  </p>
                                </div>
                              </div>
                              <div className="padding--none counter-wrap">
                                <div
                                  className="counter-item text-center wow fadeIn"
                                  data-wow-duration="1s"
                                >
                                  <p className="smallText1 top">WE HAVE OVER</p>
                                  <p
                                    className="subHead text--mainOrange"
                                    style={{lineHeight: 1, paddingTop: 5 + "px"}}
                                  >
                                    <span className="count-value" data-count="180"
                                      >0</span
                                    >
                                  </p>
                                  <p className="smallText1 bottom">
                                    YEARS OF<br />EXPERIENCE
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section
                      id="people"
                      className="animated padding-b--30 padding-t--30"
                    >
                      <div className="row">
                        <div className="col-xs-12 col-md-12">
                          <div className="row">
                            <h2
                              className="heading2 heading2--green strong text-center padding-b--18"
                            >
                              Our people
                            </h2>

                            <p
                              className="bodyText text-center"
                              style={{margin: "0 auto"}}
                            >
                              A diverse team of creative designers and
                              developers headed up by a very experienced group
                              of directors.
                            </p>
                          </div>

                          <div
                            id="staff-list"
                            className="row padding-l--15 padding-r--15"
                          ></div>
                        </div>
                      </div>
                    </section>

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
                    <section id="contact-form">
                      <div className="container-fluid">
                        <div className="row">
                          <div
                            className="col-xs-12 col-md-12 text-center bkg--whiteGrey padding-b--30 padding-t--30"
                          >
                            <h2
                              className="strong heading2 text--midGrey padding-b--18"
                              id="contactUsModalLabel"
                            >
                              Get in touch
                            </h2>
                            <p className="bodyText padding-b--30">
                              Contact us to find out how we can help you.
                            </p>
                            <div style={{maxWidth: 650 + "px", margin: "0 auto"}}>
                              <form
                                className="text-left"
                                method="POST"
                                action="/contact/contact.aspx/SubmitContactForm"
                              >
                                <input
                                  type="checkbox"
                                  name="_honeypot"
                                  style={{display: "none"}}
                                  tabIndex="-1"
                                  autoComplete="off"
                                />
                                <input
                                  type="hidden"
                                  name="_redirect"
                                  value="https://arthaus.co.uk/thanks.html"
                                />
                                <div className="form-group col-md-6">
                                  <label
                                    htmlFor="recipient-name"
                                    className="col-form-label"
                                    >Your name:</label
                                  >
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="recipient-name"
                                    required
                                  />
                                </div>
                                <div className="form-group col-md-6">
                                  <label
                                    htmlFor="recipient-email"
                                    className="col-form-label"
                                    >Your email:</label
                                  >
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="recipient-email"
                                    required
                                  />
                                </div>
                                <div className="form-group col-md-9">
                                  <label
                                    htmlFor="message-text"
                                    className="col-form-label col-form-label-lg"
                                  >
                                    Your message
                                  </label>
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    id="message-text"
                                  ></textarea>
                                </div>
                                <div className="form-group col-md-12">
                                  <div
                                    className="g-recaptcha"
                                    data-sitekey="6LdoKucUAAAAAPfEAJG2r0NnwY_xjvhRk2_x7CZc"
                                  ></div>
                                </div>
                                <div
                                  className="form-group col-md-3 form-group--sendMsg-btn"
                                >
                                  <button
                                    id="contactSave"
                                    type="submit"
                                    className="btn bkg--mainOrange smallText1 smallText1--white btn--fullWidth btn--sendMsg"
                                  >
                                    Send message
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
        </Layout>
    )
}

export default About;