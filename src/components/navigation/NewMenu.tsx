import Logo from "../Images/logo.svg";
import Image from "next/image";
import React from "react";
import { BiMenu } from "react-icons/bi";

const NewMenu = () => {
  return (
    <header className="py-4 border-b border-black/15 ">
      <div className="container">
        <div className="flex justify-between items-center md:border border-black md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-black/15">
              {" "}
              <Image src={Logo} alt={"Logo"} className="h-8 w-8"></Image>
            </div>
          </div>
          <div className="md:block hidden">
            <nav className="flex gap-8 ">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                Home
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                About
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                Services
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                Contact
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                Blog
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              Get Starter
            </button>
            <div className="absolute inset-0 border rounded-lg"></div>
            <BiMenu className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewMenu;
