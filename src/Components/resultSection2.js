import React from "react";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion";


export default function ResultSection2() {
    return(
    <section className="results-2">
        <div className="results-container">
            <h1 className="res-title">Our <span className="result">Results</span><span
                className="emoji"> 🚀</span></h1>
            <h2 className="res-quote">We make sure that our content we publish for clients produce <span
                className="real"> real</span> results.</h2>
            <div className="result-grid">
                <div className="result1">250M <br/> <span className="source"> Total Views </span></div>
                <div className="result2">2M <br/> <span className="source">Total Followers </span></div>
                <div className="result3">$0 <br/> <span className="source">In Ads Spent </span></div>
            </div>
        </div>
    </section>
)
}