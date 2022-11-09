import React from "react";
import mobilePhone from "../images/phone.png";

export default function Intro() {
    return (
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
    )
}