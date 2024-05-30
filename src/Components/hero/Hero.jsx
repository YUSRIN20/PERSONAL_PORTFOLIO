import React from "react";
import "./Hero.scss";
import { motion } from 'framer-motion'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    },
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate">
                    <motion.h2 variants={textVariants}>MISFER YUSRIN</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>
                            <a
                                className="d-inline group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500  to-blue-500 cursor-pointer"
                                download
                                target="_blank"
                                rel="noreferrer"
                                href="/Misfer Yusrin-Resume.pdf"
                            >
                               My Resume
                                <span style={{marginLeft:"5px"}}>
                                <i class="fa-solid fa-download"></i>
                                </span>
                            </a>
                        </motion.button>
                        <motion.button variants={textVariants}>
                            <a href="#Contact">  Contact Page</a>
                        </motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate">
                Full Stack Developer
            </motion.div>
            <div className="imageContainer">
                <img src="/hero3.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;
