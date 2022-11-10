import React from "react";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion";
import calling from "../images/calling.png";

export default function Step1() {
    /*Animation For strategy Image 1*/
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
        <section ref={ref} className="strategy-1">
            <div className="step-1">
                <div className="strat1">
                    <h3 className="heading1"><span className="word">Step</span> 01</h3>
                    <h2 className="subheading1">Initial Call</h2>
                    <p className="step1-para">Although we wish we could help everyone, unfortunately we can’t. To
                        ensure that we are a good fit and we know for sure we can help you, we get on an initial
                        call just to conduct a growth analysis and understand how we will execute the strategy.</p>
                </div>
                <motion.div className="strat1-img" animate={animation8}>
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
                </motion.div>
            </div>
        </section>
    )
}