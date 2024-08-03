import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import img1 from "../assets/images/cursor.png";
import img2 from "../assets/images/message.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className=" bg-black relative text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 overflow-hidden">
      <div className=" absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1000px] xl:w-[3000px]  xl:h-[700px] bg-black rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]  " />
      <div className="container relative">
        <div className=" flex items-center justify-center">
          <a
            href="#"
            className=" inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className=" bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F082,#2FDBFE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className=" flex items-center gap-1">
              <span>Read more</span>
              <IoIosArrowRoundForward className=" text-white text-xl" />
            </span>
          </a>
        </div>
        <div className=" flex justify-center mt-8">
          <div className="inline-flex relative ">
            <h1 className=" text-7xl sm:text-9xl tracking-tight inline-flex text-center font-bold">
              One Task <br /> at a Time
            </h1>
            <motion.div 
            drag
            dragSnapToOrigin
            className="hidden sm:block absolute right-[500px] top-[108px]">
            <img src={img1} height="200" width="200" draggable="false" className=" max-w-none" alt="" />
            </motion.div>
            <motion.div
            drag
            dragSnapToOrigin
            className="hidden sm:block absolute top-[70px] left-[510px]">
            <img src={img2} height="200" width="200" draggable="false" className=" max-w-none" alt="" />
            </motion.div>
          </div>
        </div>
        <div className=" flex justify-center">
          <p className=" text-center text-lg mt-8 max-w-md inline-flex mx-auto font-light">
            Celebrate the joy of accomplishment with an app designed to track
            your progress,motivate your efforts, and celebrate your successes{" "}
          </p>
        </div>
        <div className=" flex justify-center mt-8">
          <button className=" text-black bg-white px-5 py-3 font-medium rounded-lg">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
