import React, { useRef } from 'react';
import './About.scss'
import { motion, useInView } from 'framer-motion'

const Variants = {
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
}
const About = () => {

    const ref = useRef()
    const isInView = useInView(ref, { margin: "-100px" })
    return (
        <div className='about'>
            <div className="wrapper">
                <motion.div className="textContainer"
                    variants={Variants}
                    initial="initial"
                    ref={ref}
                    // whileInView="animate"
                    // animate={isInView && "animate"}
                    animate={window.innerWidth <= 738 ? "animate" : isInView && "animate"}

                >
                    <motion.h1 variants={Variants}>About</motion.h1 >
                    <motion.p variants={Variants}>
                        {/* Hey! 👋 I'm <b>Misfer Yusrin</b>, a frontend developer passionate about creating engaging user experiences. Armed with a degree in <b>Mechatronics Engineering</b>, I'm diving into web development with a focus on HTML, CSS,JavaScript and React.Js

                        I thrive in collaborative environments and aim to exceed expectations with every project.

                        Beyond coding, you'll find me experimenting with UI designs, staying updated on frontend trends, or simply enjoying a good cup of coffee. */}
                        Hey! 👋 I'm <b>Misfer Yusrin</b>, a full stack developer with a strong passion for frontend development and creating engaging user experiences. Armed with a degree in <b>Mechatronics Engineering</b>,
                        
                         I've delved into web development with a focus on HTML, CSS, JavaScript. Additionally, I'm proficient in the MERN stack, encompassing MongoDB, Express.js, React.js, and Node.js.

                        I thrive in collaborative environments and aim to exceed expectations with every project, whether it's frontend or full stack development.

                        Beyond coding, you'll find me experimenting with UI designs, staying updated on frontend trends, or simply enjoying a good cup of coffee.


                    </motion.p>
                    <motion.p variants={Variants} style={{ alignSelf: "flex-start" }} >
                        Let's chat about how I can contribute to your project! Reach out to me at.

                    </motion.p>
                    <motion.button variants={Variants}>
                        <a href="#Contact">  Contact Page</a>
                    </motion.button>

                </motion.div>
            </div>
        </div>
    );
};

export default About;