"use client";
import Image from "next/image";
import React from "react";
import logo from "../Images/LogoOfical.png";
import { NavItems } from "@/utils";
import { useRouter } from "next/navigation"; // Importa useRouter
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // Hook para navegação programática

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para navegação programática
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="sticky top-0 z-50 py-3 bg-black">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Image src={logo} alt="Logo" className="mr-2" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-white">
            {NavItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavigation(item.path)}
                  className="text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => handleNavigation('/contact-us')}
              className="bg-black text-white rounded-md py-2 px-3 flex gap-2 items-center border-2 border-black transition-all hover:bg-white hover:text-black"
            >
              Contact Us
              <BsArrowRight />
            </button>
            <button
              onClick={() => handleNavigation('/login')}
              className="bg-[#1D1E20] text-white rounded-md py-2 px-3 flex gap-2 items-center transition-colors"
            >
              Login
              <BsArrowRight />
            </button>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-4xl text-white">
              {menuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </div>
        <div
          className={`fixed top-0 right-0 z-20 bg-black w-full h-full p-6 lg:hidden transition-transform transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-6">
            <button onClick={toggleMenu} className="text-4xl text-white">
              <IoMdClose />
            </button>
          </div>
          <ul className="text-white text-center space-y-4">
            {NavItems.map((item, index) => (
              <li key={index} className="text-lg">
                <button
                  onClick={() => handleNavigation(item.path)}
                  className="text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center mt-6 space-y-4">
            <button
              onClick={() => handleNavigation('/contact-us')}
              className="bg-black text-white rounded-md py-2 px-4 flex gap-2 items-center border-2 border-black transition-all hover:bg-white hover:text-black w-3/4 text-center"
            >
              Contact Us
              <BsArrowRight />
            </button>
            <button
              onClick={() => handleNavigation('/login')}
              className="bg-[#1D1E20] text-white rounded-md py-2 px-4 flex gap-2 items-center transition-colors w-3/4 text-center"
            >
              Login
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
