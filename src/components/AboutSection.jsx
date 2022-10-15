import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
    const titleAnimation = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 2 } },
    }

    const container = {
        hidden: { x: 100 },
        show: { x: 0, transition: { duration: 0.75, ease: "easeOut", staggerChildren: 0.75, when: "afterChildren" } }
    }

    return (
        <About>
            <Description className="description">
                <motion.div className="title" variants={container} initial="hidden" animate="show"  >
                    <Hide>
                        <motion.h2 variants={titleAnimation} >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation} >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation} >true</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="" />
            </Image>
        </About>
    )
}

export default AboutSection;