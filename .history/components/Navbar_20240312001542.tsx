import { Socials } from "@/constants";
// Import Link from Next.js if you're navigating to an external page
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          {/* <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          /> */}
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          Nickolas{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Sukhdeo{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {/* {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={40}
            height={40}
          />
        ))} */}
        {/* GitHub Button */}
        <a
          href="https://github.com/nlsukhde/" // Replace with your GitHub profile link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 rounded-md font-semibold"
          style={{ marginLeft: "auto" }}
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Navbar;
