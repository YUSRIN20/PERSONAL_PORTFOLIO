import React from 'react';
import './NavBar.scss'
import {motion} from "framer-motion"
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span 
                initial={{opacity:0,scale:0.5}} 
                animate={{opacity:1,scale:1}} 
                transition={{duration:0.5}}>
                    Misfer Yusrin
                </motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/misfer-yusrin-a3198a217/" target='blank'><img src="/linkedin.png" alt="" /></a>
                    {/* <a href="#"><img src="/instagram.png" alt="" /></a>
                    <a href="#"><img src="/youtube.png" alt="" /></a>
                    <a href="#"><img src="/dribbble.png" alt="" /></a> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;