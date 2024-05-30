import React from 'react';
import './Cursor.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import {motion}from 'framer-motion'
const Cursor = () => {

    const [position,SetPosition] = useState({x:0,y:0})

    useEffect(()=>{
        const mouseMove = (e)=>{
            SetPosition({x:e.clientX,y:e.clientY})
        }
        window.addEventListener("mousemove",mouseMove)

        return()=>{
            window.removeEventListener("mousemove",mouseMove)
        }

    },[]);
    return (
        <motion.div className='cursor' animate={{x:position.x+10,y:position.y}}>
            
        </motion.div>
    );
};

export default Cursor;