import styled from "styled-components";
import { Link } from "react-router-dom";

import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnimation, lineAnimation, slider, sliderContainer, scrollReveal } from "../animation";

import { UseScroll } from '../components/useScroll';

const OurWorks = () => {
    const [element, controls] = UseScroll();
    const [element2, controls2] = UseScroll();
    const [element3, controls3] = UseScroll();
    //variants={scrollReveal} ref={element} animate={controls} initial="hidden"
    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: "#fff" }} >
            <motion.div variants={sliderContainer} >
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie variants={scrollReveal} ref={element} animate={controls} initial="hidden">
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide><motion.img variants={photoAnimation} src={athlete} alt="athlete" /></Hide>
                </Link>
            </Movie>
            <Movie variants={scrollReveal} ref={element2} animate={controls2} initial="hidden">
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <Hide><motion.img variants={photoAnimation} src={theracer} alt="theracer" /></Hide>
                </Link>
            </Movie>
            <Movie variants={scrollReveal} ref={element3} animate={controls3} initial="hidden">
                <motion.h2 variants={fade}>Good Times</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/good-times">
                    <Hide><motion.img variants={photoAnimation} src={goodtimes} alt="goodtimes" /></Hide>
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    //background: white;
    h2 {
        padding: 1rem 0;
    }
    @media (max-width: 1300px) {
        padding: 2rem;
    }
`;

const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default OurWorks;