import React from "react";

function Avatar({ url }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="pic"
      className="h-10 rounded-full cursor-pointer transition duration-150 hover:scale-110"
    ></img>
  );
}

export default Avatar;
