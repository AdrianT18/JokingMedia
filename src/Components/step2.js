import React from "react";
import strat from "../images/strat.png";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion";


export default function Step2() {
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
            animation8.start({x: '-100vw'})
        }
    }, [inView]);
    return (
        <section ref={ref} className="strategy-2">
            <div className="step-2">
                <motion.div className="strat2-img" animate={animation8}>
                    <img className="strategy-img2" src={strat}
                         alt="vector of talking through phone"/>
                </motion.div>
                <div className="strat2">
                    <h3 className="heading2"><span className="word">Step</span> 02</h3>
                    <h2 className="subheading2"> Social Media Strategy</h2>
                    <p className="step2-para">After the call I get to work straightaway and create a social media
                        strategy alongside samples of content so you know what things will look like before even
                        officially proceeding. This is done so you can review everything before deciding you want to
                        work with us. (Which you would want to after seeing the strategy + samples)</p>
                </div>
            </div>
        </section>
    )
}