import React from "react";
import './/App.css'
import mobilePhone from './images/mobilePhone.png'


function App() {
    return (
        <div className="header">
            <div className="aboutUs-box">
                <div className="title"><span className="purple">JOKING</span> <span className="white">MEDIA</span></div>
                <div className="aboutUs-description-1">
                    <p>We help coaches, consultants and podcasts get Millions of
                        impressions without spending a penny on ads.</p>
                </div>
                <div className="aboutUs-description-2">
                    <p>It’s time to stop burning your profits with ad campaigns
                        that do more harm than good…</p>
                </div>
                <a className="scrollDown" href="#calandly">
                    <p className="button-1">Speak To Our Team Today <br/>
                        <span className="bigger">Schedule Your FREE Audit Call Now</span></p>
                </a>
            </div>
            <img className="mobilePhone-img" src={mobilePhone} alt="A vector image of a mobile phone"/>
        </div>
    );
}

export default App;
