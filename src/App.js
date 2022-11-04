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
                    <div className="offer-wave">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                             preserveAspectRatio="none">
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="shape-fill"></path>
                        </svg>
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

            <section className="strategy">
                <header className="strat">
                    <h1 className="strat-title"> Ready To <span className="scale"> Scale</span> Your Business? </h1>
                    <h2 className="strat-sub">Here's <span className="how"> How </span> It Works </h2>
                </header>

                <div className="strat-images">
                    <div className="first">
                        <div className="circle">1</div>
                        <img className="call-img" src={call} alt="mobile phone icon"/>
                        <h2>Initial Call</h2>
                    </div>

                    <div className="second">
                        <div className="circle">2</div>
                        <img className="strat-img" src={stratergy} alt="thinking lightbulb"/>
                        <h2>Strategy</h2>
                    </div>

                    <div className="third">
                        <div className="circle">3</div>
                        <img className="kick-off" src={sample} alt="paint sample"/>
                        <h2> Kick Off</h2>
                    </div>
                </div>

                <div className="step-1">
                    <div className="strat1">
                        <h3 className="heading1">Step 01</h3>
                        <h2 className="subheading1">Initial Call</h2>
                        <p className="step1-para">Although we wish we could help everyone, unfortunately we can’t. To
                            ensure that we are a good fit and we know for sure we can help you, we get on an initial
                            call just to conduct a growth analysis and understand how we will execute the strategy.</p>
                    </div>
                    <div className="strat1-img">
                        <img className="calling-img" src={calling} alt="people connected around a mobile phone"/>
                        <a className="scrollDown-4" href="#calandly">
                        <p className="button-4">Speak To Our Team Today <br/>
                            <span className="bigger-4">Schedule Your FREE Audit Call Now</span></p>
                    </a>
                    </div>
                </div>

                <div className="step-2">
                    <div className="strat2-img">
                        <img className="strategy-img2" src={strat} alt="vector of talking through phone"/>
                    </div>
                    <div className="strat2">
                        <h3 className="heading2">Step 02</h3>
                        <h2 className="subheading2"> Social Media Strategy</h2>
                        <p className="step2-para">After the call I get to work straightaway and create a social media
                            strategy alongside samples of content so you know what things will look like before even
                            officially proceeding. This is done so you can review everything before deciding you want to
                            work with us. (Which you would want to after seeing the strategy + samples)</p>
                    </div>
                </div>

                <div className="step-3">
                    <div className="strat3">
                        <h3 className="heading3">Step 03</h3>
                        <h2 className="subheading3"> Kick Off</h2>
                        <p className="step3-para">Once everything is approved & the first official batch of content is
                            ready, we are good to go! The next steps would be to start publishing the content alongside
                            performing different actions and split testing different things in order to get our content
                            in front of our target audience and convert them into followers.</p>
                    </div>
                    <div className="strat3-img">
                        <img className="kickOff-img" src={sampleMeeting} alt="vector of a meeting"/>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default App;
