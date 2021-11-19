import React from "react";

const MyLoader = ({ src, width, quality }) => {
  const path = `${
    typeof location !== "undefined" ? location?.origin : null
  }${src}`;

  return path;
};

export default MyLoader;
