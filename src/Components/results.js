import React from "react";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion";
import resultImage from "../images/results-image.png";

export default function Results() {
    /*Animation For Result*/
    const {ref, inView} = useInView();
    const animation2 = useAnimation();
    useEffect(() => {
        if (inView) {
            animation2.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1.5, bounce: 0.3
                }
            });
        }
        if (!inView) {
            animation2.start({x: '-100vw'})
        }
    }, [inView]);

    /*Animation For Result1*/
    const animation5 = useAnimation();
    useEffect(() => {
        if (inView) {
            animation5.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1.5, bounce: 0.3
                }
            });
        }
        if (!inView) {
            animation5.start({x: '-100vw'})
        }
    }, [inView]);
    return (
        <section ref={ref} className="results">
            <motion.div animate={animation2}>
                <img className="results-img" src={resultImage} alt="Our results show cased"/>
            </motion.div>
            <div className="results-main">
                <h1 className="results-Title"> An Agency Proud To Show-Case <span
                    className="results-wrd"> Results! </span></h1>
                <motion.div animate={animation5}><img className="mobile-results-img" src={resultImage}
                                                      alt="Our results show cased"/>
                </motion.div>
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


                <motion.div className="btn3"
                            whileHover={{
                                scale: 1.2,
                                transition: {duration: 0.5},
                            }}
                            whileTap={{scale: 0.9}}>
                    <a className="scrollDown-2" href="#calandly">
                        <p className="button-1">Speak To Our Team Today <br/>
                            <span className="bigger">Schedule Your FREE Audit Call Now</span></p>
                    </a>
                </motion.div>

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
            </div>
        </section>
)
}