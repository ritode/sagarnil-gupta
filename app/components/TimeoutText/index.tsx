'use client'
import React, { useState, useEffect } from 'react'

const TimeoutText = () => {
    const [i,setI] = useState(0);
    const texts = ['loves Murakami','lost all his pens','screams while he cooks','pays his cat rent','grooves to techno','his hips don\'t lie'];
    useEffect(() => {
        const interval = setInterval(() => {
            setI(prev => (prev + 1) % texts.length);
        }, 3000);
    
      return () => {
        clearInterval(interval);
      }
    },[texts.length])
    
  return (
    <div className='font-bold text-8xl text-accent-color'>{texts[i]}</div>
  )
}

export default TimeoutText