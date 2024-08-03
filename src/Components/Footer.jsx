import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-black text-white py-[30px]">
      <div className="container flex flex-col sm:flex-row gap-3 sm:justify-between">
        <h6 className=" text-sm text-white/60 text-center">2024 Your Company Inc. All rights reserved</h6>
        <div>
          <ul className=" flex justify-center gap-3">
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaXTwitter />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
