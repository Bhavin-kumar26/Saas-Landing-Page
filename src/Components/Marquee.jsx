import React from "react";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import { motion } from "framer-motion";
const Marquee = () => {
  const images = [
    { src: acmeLogo, alt: "Acme Logo" },
    { src: quantumLogo, alt: "Quantum Logo" },
    { src: echoLogo, alt: "Echo Logo" },
    { src: celestialLogo, alt: "Celestial Logo" },
    { src: pulseLogo, alt: "Pulse Logo" },
    { src: apexLogo, alt: "Apex Logo" },
  ];

  return (
    <div className=" bg-black text-white py-[72px]">
      <div className="container ">
        <div className=" flex overflow-x-hidden gap-0">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="  flex flex-shrink-0 "
          >
            {images.map((image, index) => {
              return (
                <img
                  className=" h-8 w-auto object-cover pr-14"
                  src={image.src}
                  key={index}
                  alt={image.alt}
                />
              );
            })}
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="  flex flex-shrink-0 "
          >
            {images.map((image, index) => {
              return (
                <img
                  className=" w-44 object-contain pr-14"
                  src={image.src}
                  key={index}
                  alt={image.alt}
                />
              );
            })}
          </motion.div>
        </div>
       
      </div>
    </div>
  );
};

export default Marquee;
