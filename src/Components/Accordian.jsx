import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { HiMinusSm } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
const Accordian = ({ questions, answer }) => {
  const [showAnswer, setShowAnswer] = useState(null);
  return (
    <div className=" py-7 border-b border-white/30">
      <div
        onClick={() => setShowAnswer(!showAnswer)}
        className=" flex justify-between items-center"
      >
        <span className=" text-xl font-bold  cursor-pointer">{questions}</span>
        {showAnswer ? (
          <HiMinusSm className=" text-xl" />
        ) : (
          <FiPlus className=" text-xl" />
        )}
      </div>
      <AnimatePresence>
        {showAnswer && <motion.div 
        initial={{
          opacity:0,
          height:0,
          marginTop:0,
        }}
        animate={{
          opacity:1,
          height:"auto",
          marginTop:16,
        }}
        exit={{
          opacity:0,
          height:0,
          marginTop:0,
        }}>{answer}</motion.div>}
      </AnimatePresence>
    </div>
  );
};

export default Accordian;
