import React from "react";
import Image from "next/image";
import MyLoader from "./ImageLoader";

const SliderCard = ({ src, text }) => {
  return (
    <div className="sm:w-[350px] w-[220px] sm:h-[60vh] h-[50vh] mr-5 relative ">
      <img
        src={`/assets/Homepage/slide${src}.png`}
        alt=""
        className="w-full h-full"
      />
      <h1 className="absolute bottom-10 left-5 text-white font-medium sm:text-4xl text-2xl">
        {text}
      </h1>
    </div>
  );
};

export default SliderCard;
