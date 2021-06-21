import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import React from "react";
import Options from "./Options";

function Soption() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      <div className="flex space-x-6">
        <Options Icon={SearchIcon} title="All" selected />
        <Options Icon={PhotographIcon} title="Images" />
        <Options Icon={PlayIcon} title="Videos" />
        <Options Icon={NewspaperIcon} title="News" />
        <Options Icon={MapIcon} title="Maps" />
        <Options Icon={DotsVerticalIcon} title="More" />
      </div>
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default Soption;
