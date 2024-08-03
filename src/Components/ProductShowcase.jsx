import React, { useEffect, useRef } from "react";
import appImage from '../assets/images/app-screen.png'
import { motion,useScroll, useTransform } from "framer-motion";
const ProductShowcase = () => {
  const appRef = useRef()
  const {scrollYProgress} = useScroll({
    target: appRef,
    offset: ["start end","end end"]
  })

  const rotateX =useTransform(scrollYProgress,[0,1],[40,0])
  const opacityy =useTransform(scrollYProgress,[0,1],[.1,1])

  // useEffect(() => {
  //   scrollYProgress.on("change",(latestvalue)=>console.log(latestvalue)
  //   )
  // }, [])
  
  return (
    <div className=" bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24 text-white">
      <div className="container">
        <div className=" flex flex-col justify-center items-center">
          <h4 className=" font-semibold text-5xl sm:text-6xl text-center">Intuitive interface</h4>
          <p className=" mt-8 text-center text-white/70 font-light max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress,motivate your efforts, and celebrate your successes
            with onet task at a time
          </p>
        </div>
        <motion.div 
        style={{
          opacity:opacityy,
          rotateX,
          transformPerspective:"800px"
        }}
        className=" mt-14 flex justify-center">
            <img src={appImage} ref={appRef} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowcase;
