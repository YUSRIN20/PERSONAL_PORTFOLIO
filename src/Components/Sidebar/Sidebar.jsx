import React from 'react';
import {motion} from 'framer-motion'
import Links from './linksFolder/Links';
import './SideBar.scss'
import ToggleButton from './Togglefolder/ToggleButton';
import { useState } from 'react';
const varients = {
    open:{
        clipPath:"circle(1200px at 50px 50px)",
        transition:{
            type:"spring",
            stiffness:20,  
        }
    },
    closed:{
        clipPath:"circle(30px at 50px 50px)",
        transition:{
            delay:0.5,
            type:"spring",
            stiffness:400,
            damping:40,
        }
    }
}
const Sidebar = () => {

    const [open,SetOpen] = useState(false)

    return (
        <motion.div className='sidebar' animate={open ? "open": "closed"}>
            <motion.div className="bg" variants={varients}>
             <Links/>
            </motion.div>
        <ToggleButton SetOpen={SetOpen} />
        </motion.div>
    );
};

export default Sidebar;