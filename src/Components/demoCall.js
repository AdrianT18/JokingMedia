import React from "react";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion";
import {InlineWidget} from "react-calendly";

export default function DemoCall() {
    /*Animation For strategy demo call*/
    const {ref, inView} = useInView();
    const animation10 = useAnimation();
    useEffect(() => {
        if (inView) {
            animation10.start({
                y: 0,
                transition: {
                    type: 'spring', duration: 1.5, bounce: 0.3
                }
            });
        }
        if (!inView) {
            animation10.start({y: '-10rem'})
        }
    }, [inView]);

    return (
        <section ref={ref} className="demo-container">
            <div id="calandly">
                <InlineWidget url="https://calendly.com/michaelalalade/growth?hide_gdpr_banner=1"/>
            </div>

            <motion.div className="demo-info" animate={animation10}>
                <h1 className="demo-title">Schedule Your Call With Michael</h1>
                <p className="demo-para">By the end of this call, you will be confident of the magic that our
                    social
                    media efforts will perform and the next steps of building an audience that will buy whatever
                    you
                    sell.</p>
                <h2 className="demo-for">This Audit Is Perfect For:</h2>
                <div className="list">
                    <ul>
                        <li>Business owners too <span className="demo-word"> busy to handle their social media.</span>
                        </li>
                        <li>Business owners looking to <span className="demo-word"> convert social media attention to a die hard
                                    community. </span>
                        </li>
                        <li>Business owners <span className="demo-word"> reluctant </span> to jumping straight into <span
                            className="demo-word"> paid ads.</span></li>
                        <li>Business owners looking to <span className="demo-word"> capitalise on the ever changing world of
                                    social media. </span>
                        </li>
                    </ul>
                </div>
            </motion.div>
            <div className="demo-top-wave">
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