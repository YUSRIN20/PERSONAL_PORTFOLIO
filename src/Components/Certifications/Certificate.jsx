import React, { useRef } from 'react';
import './Certificate.scss'
import { motion,useScroll, useSpring, useTransform } from 'framer-motion';


const certificates = [
    {
        id: 1,
        title: "Full Stack Development",
        img: "/fsdCertificate.png",
        desc:"I'm completed Full Stack delopment in  Guvi's MERN stack program, honing my skills in full stack development. Learning MongoDB, Express.js, React.js, and Node.js, I'm gaining expertise in both front-end and back-end development. Through hands-on projects and expert guidance, I'm acquiring the abilities to design, build, and deploy dynamic web applications effectively"
    },
    // {
    //     id: 2,
    //     title: "Up to Come",
    //     img: "https://dummyimage.com/600x400/000/fff",
    //     desc:""
    // },
    // {
    //     id: 3,
    //     title: "Up to Come",
    //     img: "https://dummyimage.com/600x400/000/fff",
    //     desc:""
    // },
    // {
    //     id: 4,
    //     title: "Up to Come",
    //     img: "https://dummyimage.com/600x400/000/fff",
    //     desc:""
    // },
]
const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const imgX = useTransform(scrollYProgress, [0, 1], [ -50,0]); // Adjust -500 to the value that suits your needs
    const textX = useTransform(scrollYProgress, [0, 1], [ 50,0]); // Adjust 500 to the value that suits your needs


    return (
        <section id='Certifications' >
            <div className="container">
                <div className="wrapper">
                    <motion.div className="imageContainer" style={{ x: imgX }} ref={ref}>
                        <img src={item.img} alt="" />
                    </motion.div>
                    <motion.div className="textContainer" style={{ x: textX }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


const Certificate = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className='certificate' ref={ref}>
            <div className="progress">
                <h1>Certifications</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {certificates.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Certificate;

