import React from "react";

function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="pic"
      className={`h-10 rounded-full cursor-pointer transition duration-150 hover:scale-110 ${className}`}
    ></img>
  );
}

export default Avatar;
