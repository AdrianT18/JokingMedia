import React from "react";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion";
import call from "../images/call.png";
import stratergy from "../images/stratergy-1.png";
import sample from "../images/kick-off-1.png";

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
        <section ref={ref} className="strategy">
            <header className="strat">
                <h1 className="strat-title"> Ready To <span className="scale"> Scale</span> Your Business? </h1>
                <h2 className="strat-sub">Here's <span className="how"> How </span> It Works</h2>
            </header>

            <div className="strat-images">
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
        </section>

    )
}