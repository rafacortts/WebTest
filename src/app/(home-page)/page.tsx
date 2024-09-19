"use client";

import Card from "@/components/sections/Cards";
import Hero from "@/components/sections/Hero";
import Card2 from "@/components/sections/Card2";
import LogoTickets from "@/components/sections/LogoTickets";
import Sales from "@/components/sections/Sales";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Whatwedo from "@/components/sections/Whatwedo";
import Hero22 from "@/components/sections/Hero2";

const About = () => {
  return (
    <div>
      <Hero />
      <LogoTickets />
      <Hero22 />
      <Card />
      <Services />
      <Card2 />
      <Testimonials />
    </div>
  );
};

export default About;
