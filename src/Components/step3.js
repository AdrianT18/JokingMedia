import {motion, useAnimation} from "framer-motion";
import sampleMeeting from "../images/sample meeting.png";
import React, {useEffect} from "react";
import {useInView} from "react-intersection-observer";


export default function Step3() {
    /*Animation For strategy Image 2*/
    const {ref, inView} = useInView();
    const animation8 = useAnimation();
    useEffect(() => {
        if (inView) {
            animation8.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1.5, bounce: 0.2
                }
            });
        }
        if (!inView) {
            animation8.start({x: '100vw'})
        }
    }, [inView]);
    return (
        <section ref={ref} className="strategy-3">
            <div className="step-3">
                <div className="strat3">
                    <h3 className="heading3"><span className="word">Step</span> 03</h3>
                    <h2 className="subheading3"> Kick Off</h2>
                    <p className="step3-para">Once everything is approved & the first official batch of content is
                        ready, we are good to go! The next steps would be to start publishing the content alongside
                        performing different actions and split testing different things in order to get our content
                        in front of our target audience and convert them into followers.</p>
                </div>
                <motion.div className="strat3-img" animate={animation8}>
                    <img className="kickOff-img" src={sampleMeeting} alt="vector of a meeting"/>
                </motion.div>
            </div>
        </section>
    )
}