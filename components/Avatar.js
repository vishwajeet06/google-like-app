import Image from "next/image";
import React from "react";

function Avatar({ url, className }) {
  return (
    <Image
      loading="lazy"
      src={url}
      alt="pic"
      height={40}
      width={40}
      className={`h-10 rounded-full cursor-pointer transition duration-150 hover:scale-110 ${className}`}
    />
  );
}

export default Avatar;
