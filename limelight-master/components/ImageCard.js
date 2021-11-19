import React from "react";

const ImageCard = ({ src }) => {
  return (
    <div className="lg:mx-8 sm:mx-6 mx-4 my-6 ">
      <img
        src={`/assets/Homepage/client${src}.png`}
        alt=""
        className={`lg:w-[250px] md:w-[150px] w-[130px]  max-h-auto `}
      />
    </div>
  );
};

export default ImageCard;
