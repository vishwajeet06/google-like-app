import React, { useRef } from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function Body() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <form className="flex flex-col items-center mt-44 flex-grow">
      <Image
        alt="avatar"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        width={300}
        height={100}
      />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          type="text"
          className="focus:outline-none flex-grow"
          ref={searchInputRef}
        />
        <MicrophoneIcon className="h-5 text-gray-500" />
      </div>
      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button className="btn" onClick={search}>
          Google Search
        </button>
        <button className="btn" onClick={search}>
          I am Feeling Lucky
        </button>
      </div>
    </form>
  );
}

export default Body;
