import React, { useRef } from 'react';
import './Portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'


const items = [
    {
        id: 1,
        title: "Hotel Booking Web Application",
        img: "./HotelBooking.png",
        demoLink:'https://hotel-booking-web.netlify.app/',
        desc: "Our hotel booking replica website is a comprehensive platform designed to simplify the process of finding and reserving accommodations. Users can effortlessly search for hotels based on location, date, and price range, view detailed information and photos of each property, and make secure bookings online. The website offers a user-friendly interface, real-time availability updates, and customizable search filters to ensure a seamless and personalized booking experience."
    },
    {
        id: 2,
        title: "Blog Web Application",
        img: "./blog.png",
        demoLink:'https://simpleblog-website.netlify.app/',
        desc: "The blog application allows users to register, create, view, update, and delete blog posts. It features user authentication using JSON Web Tokens (JWT) for secure access. Users can categorize their posts and filter content based on categories. The application is built with Node.js, Express.js for the backend, MongoDB for database storage, and Mongoose for data modeling. It ensures data security with bcrypt-hashed passwords and includes error handling for input validation. Future enhancements could include user comments, likes, and improved search capabilities."
    },
    

    {
        id: 3,
        title: "Bulk Email Tool",
        demoLink:"https://bulk-email-tool-web.netlify.app/",
        img: "BulkEmailTool.png",
        desc: "The Bulk Email Tool project comprises frontend and backend components for efficient email management. The frontend, built with React.js, handles user authentication, email composition, and analytics display. The backend, developed with Node.js, Express, and MongoDB, manages user registration, authentication, email sending, and analytics retrieval. With features like user-friendly interfaces, email composition, and analytics tracking, it provides a comprehensive solution for email management needs."
    },
    // {
    //     id: 3,
    //     title: "URL-Shortener Tool",
    //     img: "url-shortener.png",
    //     demoLink:"https://url-shortener-web-demo.netlify.app/",
    //     desc: "This URL shortener tool offers users a seamless experience for generating shortened URLs from long ones with admin dashboard. Its robust backend, built with Node.js, Express.js, and MongoDB, ensures secure authentication, URL shortening, and analytics. The React.js frontend provides an intuitive interface. Deployed on Render (backend) and Netlify (frontend), it showcases proficiency in full-stack web development, emphasizing security, functionality, and user experience."
    // },
    {
        id: 4,
        title: "Login Management Web Application",
        img: "./PasswordReset.png",
        demoLink:'https://password-reset-demo.netlify.app/',
        desc: "This project offers a full password management solution with frontend and backend components. The frontend, built with React.js, handles user registration, login, and password reset. It integrates smoothly with the backend, developed in Node.js with Express.js and MongoDB for database management. The backend ensures secure authentication, password hashing, and email-based password reset functionality using Nodemailer. Demonstrating proficiency in full-stack development, it showcases seamless integration between frontend design and backend logic."
    },
    // {
    //     id: 5,
    //     title: "Up to Come",
    //     img: "https://dummyimage.com/600x400/000/fff",
    //     desc: ""
    // }
]

const Single = ({ item }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start","end start"]

    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>
                            <a href={item.demoLink} target='blank'>See Demo</a>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


const Portfolio = () => {

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
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;