import React from "react";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion";

export default function Offer() {
    return (
        <section className="offer">
            <motion.div className="offer-box1"
                        initial={{x: '-100vw'}}
                        animate={{x: 0}}
                        transition={{type: 'spring', duration: 1, bounce: 0.3}}>
                <h1 id="offer-title">What We Offer</h1>
                <h1 id="offer-subheading">Social Media Management</h1>
                <h3 id="offer-quote">We drive sales with social media content</h3>
                <p id="offer-para">We do one thing and we do it well. We ensure that we focus on social media
                    content &
                    increasing the social presence of your brand to build a community that <span
                        id="loves">loves</span> your service.</p>
            </motion.div>
            <motion.div className="offer-box2"
                        initial={{x: '-100vw'}}
                        animate={{x: 0}}
                        transition={{type: 'spring', duration: 1, bounce: 0.3}}>
                <h1 id="offer-title">What We Offer</h1>
                <h2 id="noOffer">Only One Goal So...</h2>
                <p id="offer-para-2">We don't offer any other services except for Social Media Managment...</p>
                <ul id="list">
                    <li className="offer-list"><span className="offer-li">Web Design</span></li>
                    <li className="offer-list"><span className="offer-li">Email Marketing</span></li>
                    <li className="offer-list"><span className="offer-li">PR Service</span></li>
                    <li className="offer-list"><span className="offer-li">Paid Ads</span></li>
                </ul>
            </motion.div>
            <div className="offer-btn">
                <a className="scrollDown-2" href="#calandly">
                    <p className="button-2">Speak To Our Team Today <br/>
                        <span className="bigger-2">Schedule Your FREE Audit Call Now</span></p>
                </a>
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
    )
}