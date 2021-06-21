import React from "react";
import Avatar from "./Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="flex w-full p-5 justify-between text-sm text-gray-700">
      <div className="flex space-x-5 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex space-x-5 items-center">
        <p className="link">Gamil</p>
        <p className="link">Images</p>
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
        <Avatar url="https://lh3.googleusercontent.com/ogw/ADea4I6EE_SSK87UfQHxS9KLWz7_nBvsMZ9CC-HtVv2YPA=s32-c-mo" />
      </div>
    </div>
  );
}

export default Header;
