import React from "react";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion";
import call from "../images/call.png";
import stratergy from "../images/stratergy-1.png";
import sample from "../images/kick-off-1.png";
import calling from "../images/calling.png";
import strat from "../images/strat.png";
import sampleMeeting from "../images/sample meeting.png";

export default function Strategy() {
    /*Animation For strategy Images*/
    const {ref, inView} = useInView();
    const animation3 = useAnimation();
    useEffect(() => {
        if (inView) {
            animation3.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1.5, bounce: 0.2
                }
            });
        }
        if (!inView) {
            animation3.start({x: '-100vw'})
        }
    }, [inView]);

    return(
        <section className="strategy">
            <header className="strat">
                <h1 className="strat-title"> Ready To <span className="scale"> Scale</span> Your Business? </h1>
                <h2 className="strat-sub">Here's <span className="how"> How </span> It Works</h2>
            </header>

            <div ref={ref} className="strat-images">
                <motion.div className="first" animate={animation3}>
                    <div className="circle">1</div>
                    <img className="call-img" src={call} alt="mobile phone icon"/>
                    <h2 className="sub">Initial Call</h2>
                </motion.div>
                <motion.div className="second" animate={animation3}>
                    <div className="circle">2</div>
                    <img className="strat-img" src={stratergy} alt="thinking lightbulb"/>
                    <h2 className="sub">Strategy</h2>
                </motion.div>
                <motion.div className="third" animate={animation3}>
                    <div className="circle">3</div>
                    <img className="kick-off" src={sample} alt="paint sample"/>
                    <h2 className="sub"> Kick Off</h2>
                </motion.div>
            </div>

            <div className="step-1">
                <div className="strat1">
                    <h3 className="heading1"><span className="word">Step</span> 01</h3>
                    <h2 className="subheading1">Initial Call</h2>
                    <p className="step1-para">Although we wish we could help everyone, unfortunately we can’t. To
                        ensure that we are a good fit and we know for sure we can help you, we get on an initial
                        call just to conduct a growth analysis and understand how we will execute the strategy.</p>
                </div>
                <div className="strat1-img">
                    <img className="calling-img" src={calling}
                         alt="people connected around a mobile phone"/>

                    <motion.div className="btn4"
                                whileHover={{
                                    scale: 1.2,
                                    transition: {duration: 0.5},
                                }}
                                whileTap={{scale: 0.9}}>
                        <a className="scrollDown-3" href="#calandly">
                            <p className="button-3">Speak To Our Team Today <br/>
                                <span className="bigger">Schedule Your FREE Audit Call Now</span></p>
                        </a>
                    </motion.div>
                </div>
            </div>
            <div className="step-2" >
                <div className="strat2-img">
                    <img className="strategy-img2" src={strat}
                         alt="vector of talking through phone"/>
                </div>
                <div className="strat2">
                    <h3 className="heading2"><span className="word">Step</span> 02</h3>
                    <h2 className="subheading2"> Social Media Strategy</h2>
                    <p className="step2-para">After the call I get to work straightaway and create a social media
                        strategy alongside samples of content so you know what things will look like before even
                        officially proceeding. This is done so you can review everything before deciding you want to
                        work with us. (Which you would want to after seeing the strategy + samples)</p>
                </div>
            </div>

            <div className="step-3">
                <div className="strat3">
                    <h3 className="heading3"><span className="word">Step</span> 03</h3>
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

    )
}