import React from "react";
import './/Intro.css'
import './offer.css'
import './results.css'
import './strategy.css'
import mobilePhone from './images/phone.png'
import resultImage from './images/results.png'
import call from './images/call.png'
import calling from './images/calling.png'
import sample from './images/sample.png'
import sampleMeeting from './images/sample meeting.png'
import strat from './images/strat.png'
import stratergy from './images/stratergy.png'


function App() {
    return (
        <div className="container">
            <section className="header">
                <div className="aboutUs-box">
                    <div className="title"><span className="purple">JOKING</span> <span className="white">MEDIA</span>
                    </div>
                    <p className="aboutUs-description-1">We help coaches, consultants and podcasts get Millions of
                        impressions without spending a penny on ads.</p>
                    <p className="aboutUs-description-2">It’s time to stop burning your profits with ad campaigns
                        that do more harm than good…</p>

                    <a className="scrollDown" href="#calandly">
                        <p className="button-1">Speak To Our Team Today <br/>
                            <span className="bigger">Schedule Your FREE Audit Call Now</span></p>
                    </a>
                </div>
                <div className="phone"><img src={mobilePhone} className="mobilePhone-img"
                                            alt="A vector of a mobile phone"/></div>
            </section>

            <section className="offer">
                <div>
                    <div className="offer-box1">
                        <h1 id="offer-title">What We Offer</h1>
                        <h1 id="offer-subheading">Social Media Management</h1>
                        <h3 id="offer-quote">We drive sales with social media content</h3>
                        <p id="offer-para">We do one thing and we do it well. We ensure that we focus on social media
                            content &
                            increasing the social presence of your brand to build a community that <span
                                id="loves">loves</span> your service.</p>
                    </div>
                    <div className="offer-btn">
                        <a className="scrollDown-2" href="#calandly">
                            <p className="button-2">Speak To Our Team Today <br/>
                                <span className="bigger-2">Schedule Your FREE Audit Call Now</span></p>
                        </a>
                    </div>
                </div>
                <div className="offer-box2">
                    <h2 id="noOffer">Only One Goal So...</h2>
                    <p id="offer-para-2">We don't offer any other services except for Social Media Managment...</p>
                    <ul id="list">
                        <li><span>Web Design</span></li>
                        <li><span>Email Marketing</span></li>
                        <li><span>PR Service</span></li>
                        <li><span>Paid Ads</span></li>
                    </ul>
                </div>
            </section>

            <section className="results">
                <img className="results-img" src={resultImage}
                     alt="Our results show cased"/>
                <div className="results-main">
                    <h1 className="results-Title"> An Agency Proud To Show-Case <span
                        className="results-wrd"> Results! </span></h1>
                    <img className="mobile-results-img" src={resultImage}
                         alt="Our results show cased"/>
                    <p className="results-para"> A lot of people in social media management only focus on how posts
                        look
                        & 100% of their efforts goes into designing the content, which we all know does not solely
                        drive
                        sales or build an audience.</p>
                    <p className="results-para2">Yes, we want our content and social media accounts to look good,
                        but we
                        are still a results driven agency & ensure the posts looks good as well as are created in
                        order
                        to attract our target audience matched with a strategy to reach them organically.</p>

                    <div className="results-btn"><a className="scrollDown-3" href="#calandly">
                        <p className="button-3">Speak To Our Team Today <br/>
                            <span className="bigger-3">Schedule Your FREE Audit Call Now</span></p>
                    </a></div>
                </div>
                <div className="results-top-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"></path>
                    </svg>
                </div>

                <div className="results-bottom-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
            </section>

        </div>
    );
}

export default App;
