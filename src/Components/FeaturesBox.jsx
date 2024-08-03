import React, { useEffect, useRef } from "react";
import { BiLeaf } from "react-icons/bi";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
const FeaturesBox = ({ title, desc }) => {

    const border = useRef()
    const offsetX = useMotionValue(-100)
    const offsetY = useMotionValue(-100)
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px,black,transparent)`
    useEffect(() => {
        const updateMouse = (e)=>{
            if(!border.current) return;
            const rect = border.current?.getBoundingClientRect()            
             offsetX.set(e.x - rect.x);  
             offsetY.set(e.y - rect.y);
            //  console.log(offsetX,offsetY)   
        }
      window.addEventListener("mousemove",updateMouse)
        
      return () => {
        window.removeEventListener("mousemove",updateMouse)
      }
    }, [])
    

  return (
    <div
      className=" flex flex-col justify-center items-center relative  rounded-xl px-10 py-5"
    >
        <motion.div
        ref={border}
        style={{
            WebkitMaskImage:maskImage,
            maskImage,}}
        className=" absolute inset-0 border-2 border-purple-100 rounded-xl">

        </motion.div>
      <div className=" bg-white p-3 text-black rounded-lg mb-2">
        <BiLeaf className=" text-xl  " />
      </div>
      <h3 className=" mt-6 text-center font-semibold text-lg">{title}</h3>
      <p className=" mt-2 text-md text-center text-white/60 ">
        {desc}
      </p>
    </div>
  );
};

export default FeaturesBox;
