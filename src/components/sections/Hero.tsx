import Link from "next/link";
import React from "react";
import LogoPrime from "../Images/LogoPrime.png";
import HeroImage from "../Images/HeroImage.png";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="bg-black pt-8 pb-20">
      <div className="container mx-auto px-4" style={{ maxWidth: "1280px" }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <Image
              className="inline-flex border border-[#222]/10 px-3 py-1 rounded-lg"
              src={LogoPrime}
              alt="Logo Prime"
            />
            <h1 className="text-4xl lg:text-5xl tracking-tighter text-white mb-6 relative">
              Lorem ipsum dolor sit amet consectetur adipisicing {""}
              <span className="">
                <TypeAnimation
                  sequence={[
                    "Text One",
                    3000,
                    "Text Two",
                    3000,
                    "Text Three",
                    3000,
                    "Text Four",
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "inherit", display: "inline-block" , backgroundColor: "blue" , borderRadius:999 , padding:12}}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-white mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              id, debitis vel, molestias quo in tenetur iusto alias sed placeat
              quasi? Soluta eius magni fuga corrupti quis quidem odio impedit.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link
                href={""}
                className="flex items-center gap-2 bg-[#C6F57A] border-2 border-[#C6F57A] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#a5d752] transition duration-300"
              >
                Get Started
                <BsArrowRight />
              </Link>
              <Link
                href={""}
                className="text-[#C6F57A] border-black border-2 px-6 py-2 rounded-lg font-semibold hover:border-2 hover:border-[#C6F57A] transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
            <motion.div
              animate={{ y: ["0%", "-3%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              className="w-full max-w-lg h-auto"
            >
              <Image
                src={HeroImage}
                alt="Hero Image"
                width={400}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
