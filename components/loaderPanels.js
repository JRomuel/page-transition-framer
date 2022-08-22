import React from 'react'
import { motion } from "framer-motion"

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial: {
        scaleY : 0,
        opacity: 0,
        transition: { duration: 1, ease: easing }
    },
    animate: {
        scaleY: 100,
        opacity: 1,
        transition: {
            duration: 1,
            ease: easing
        }
    }
};
  
const LoaderPanels = () => {
  return (
    <motion.div className="loadinPanels" initial={{ scaleY: 1 }} animate={{ scaleY: 0, transition:{duration: 1} }} exit={{ scaleY: 1, transition:{duration: 1} }}></motion.div>
  )
}

export default LoaderPanels