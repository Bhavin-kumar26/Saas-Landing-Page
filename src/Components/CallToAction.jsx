import React, { useRef } from "react";
import image1 from "../assets/images/helix2.png";
import image2 from "../assets/images/emojistar.png";
import { motion, useScroll, useTransform } from "framer-motion";
const CallToAction = () => {
  const conatinerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: conatinerRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  return (
    <div
      ref={conatinerRef}
      className=" bg-black py-[72px] sm:py-24 text-white overflow-hidden"
    >
      <div className="container max-w-xl relative">
        <motion.div
        style={{
          translateY:translateY
        }}
        className=" absolute top-6 left-[calc(100%-36px)] w-[250px]">
          <img src={image1} className="hidden  sm:block" alt="" />
        </motion.div>
        <motion.div
        style={{
          translateY:translateY
        }}
        className="absolute -top-[100px] right-[calc(100%+4px)] w-[250px] z-10">
          <img src={image2} className="hidden  sm:block" alt="" />
        </motion.div>
       
        <div className=" flex flex-col justify-center items-center">
          <h6 className=" text-5xl sm:text-6xl font-bold tracking-tight text-center">
            Get instant access
          </h6>
          <p className=" mt-8 font-light text-white/60 text-center max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress motivate your efforts
          </p>
        </div>
        <form className=" flex flex-col mt-8 gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            className=" h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
            type="text"
            placeholder="your@gmail.com"
          />
          <button className=" bg-white h-12 px-5 rounded-lg text-black font-semibold">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;
