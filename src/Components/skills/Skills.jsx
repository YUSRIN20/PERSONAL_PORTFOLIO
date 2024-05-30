import React, { useRef } from 'react';
import './Skills.scss'
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
const technologies = [
    {
        id: 1,
        name: "Html",
        img: "./html.png"
    },
    {
        id: 2,
        name: "Css",
        img: "./css.png"
    },
    {
        id: 3,
        name: "Javascript",
        img: "./javascript.png"
    },
    {
        id: 4,
        name: "React-js",
        img: "./react.png"
    },
    {
        id:5,
        name:"Mongo-Db",
        img:'./mongodb.png'

    },
    {
        id:6,
        name:"Express-js",
        img:"./expressjs.png"
    },
    {
        id:7,
        name:"Node-js",
        img:"./node.png"
    },
    {
        id: 8,
        name: "Github",
        img: "./github.png"
    },
    {
        id: 9,
        name: "Bootstrap",
        img: "./bootstrap.png"
    },
]
const Skills = () => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: "-100px" })
    return (
        <div className='skills'>
            <motion.div className="wrapper"
                variants={Variants}
                initial="initial"
                ref={ref}
                // whileInView="animate"
            // animate={isInView && "animate"}
            animate={window.innerWidth<=738 ? "animate":isInView && "animate"}

            >
                <motion.div className="textContainer" variants={Variants}>
                    <h1>Skills</h1>
                </motion.div>
                <motion.div className="cardContainer" variants={Variants}>
                    {technologies.map((item, index) => {
                        return (
                            <>
                                <motion.div key={index} className="card"
                                 whileHover={{ scale: 1.2 }}
                                 whileTap={{
                                     scale: 0.8,
                                     borderRadius: "100%"
                                 }}
                                 transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                    <div className='cardContent'>
                                        <img src={item.img} alt=""  className='images'/>
                                        <h3>{item.name}</h3>
                                    </div>
                                </motion.div>
                            </>
                        )
                    })}
                </motion.div>

            </motion.div>


        </div>

    );
};

export default Skills;