import React from "react";
import HeroImage from "@/components/Images/ImageHero2.png";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Hero2 = () => {
  return (
    <div className="bg-[#161616] py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0">
        {/* Div para a imagem à esquerda */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          {/* <Image
            src={HeroImage}
            alt="Hero Image"
            width={300}
            height={338}
            className=""
          /> */}
        </div>

        {/* Div para o texto à direita */}
        <div className="text-center lg:text-left lg:w-1/2 lg:pl-8">
          <span className="bg-[#149BFE] px-3 py-1 text-center rounded-full ">
            Lorem
          </span>
          <h1 className="text-4xl lg:text-5xl text-white mt-4 mb-6">
            Lorem ipsum dolor{" "}
            <span className="text-[#C6F57A]">Lorem, ipsum.</span>
          </h1>
          <p className="text-sm lg:text-base text-white mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sapiente
            ex nemo omnis accusantium, et fuga corporis nostrum, eum ratione illo
            consectetur magni quidem eaque at modi facere dignissimos quae.
          </p>
          <button className="text-orange-500 underline transition flex items-center text-center md:no-underline">
            Lorem ipsum dolor
            <BsArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
