import React from "react";
import {motion} from "framer-motion";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="copyright">@2021 JOKINGMEDIA. All Rights Reserved</div>
            <div className="links">
                <a href="https://www.linkedin.com/company/jokingmedia/"
                   className="fa fa-linkedin-square fa-3x social"/>
                <a href="mailto:michael@jokingmedia.com" className="fa fa-envelope-square fa-3x social"/>
                <a href="https://www.instagram.com/jokingmedia/?igshid=YmMyMTA2M2Y%3D"
                   className="fa fa-instagram fa-3x social"/>
            </div>
            <motion.div className="developed"
                 whileHover={{
                     scale: 1.2,
                     transition: {duration: 0.5},
                 }}
                 whileTap={{scale: 0.4}}>
                <a href="https://www.linkedin.com/in/adrian-topolski/">Developed By Adrian Topolski</a>
            </motion.div>
        </footer>
    )
}