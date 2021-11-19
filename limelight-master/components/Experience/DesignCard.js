import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const DesignCard = ({ h1, h2, h3 }) => {
  return (
    <div className="flex flex-col max-w-[20rem]">
      <h1 className="text-9xl font-black hover:text-[#FFD400] text-gray-200">
        {h1}
      </h1>
      <h2 className="text-xl font-semibold pt-2">{h2}</h2>
      <h3 className="text-lg font-light text-gray-600 py-10">{h3}</h3>
    </div>
  );
};

export default DesignCard;
