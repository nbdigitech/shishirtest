import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { RiCopyrightFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="lg:h-48 h-44 bg-black ">
      <div className="mx-auto container h-40  flex sm:flex-row flex-col-reverse  items-center  sm:justify-between justify-center">
        <div className="text-white flex space-x-3">
          <span className="text-[#FFD400] text-2xl ">
            <RiCopyrightFill />
          </span>
          <h1 className="sm:text-base text-sm">
            Limelight arcadia 2021. All Rights Reserved.
          </h1>
        </div>
        <div className="text-white flex space-x-5 text-4xl pt-2 sm:pb-0 pb-5">
          <TiSocialFacebook />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Footer;
