import React from "react";
import './/App.css'
import mobilePhone from './images/phone.png'


function App() {
    return (
        <div className="container main">
            <div className="header">
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
                <img className="mobilePhone-img" src={mobilePhone} alt="A vector of a mobile phone"/>
            </div>

            <div className="offer">
                <div className="offer-box1">
                    <h1 id="offer-title">What We Offer</h1>
                    <h2 id="offer-subheading">Social Media Management</h2>
                    <h3 id="offer-quote">We drive sales with social media content</h3>
                    <p id="offer-para">We do one thing and we do it well. We ensure that we focus on social media
                        content &
                        increasing the social presence of your brand to build a community that <span
                            id="loves">loves</span> your service.</p>
                        <a className="scrollDown-2" href="#calandly">
                            <p className="button-2">Speak To Our Team Today <br/>
                                <span className="bigger-2">Schedule Your FREE Audit Call Now</span></p>
                        </a>
                </div>
                <div className="offer-box2">
                    <h2 id="noOffer">Only one goal so...</h2>
                    <p id="offer-para-2">We only offer social media management, we don’t offer:</p>
                    <ul id="list">
                        <li>Web Design</li>
                        <li>Email Marketing</li>
                        <li>PR Service</li>
                        <li>Paid Ads</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default App;
