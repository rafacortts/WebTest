import React from "react";
import { reviews } from "@/utils";
import Container from "@/ui/Container";
import SectionBadge from "@/ui/section-badge";
import Wrapper from "@/ui/Wrapper";
import Marquee from "@/ui/Marquee";
import { FaUser } from "react-icons/fa";
import cn from 'classnames';

const Hero4 = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <div className="bg-black text-white">
      <Wrapper ClassName="relative flex flex-col items-center justify-center py-12">
        <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 rounded-full blur-[10rem] -z-10 bg-gradient-to-tr from-black to-transparent opacity-30"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Our Customers" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              O que as pessoas estão dizendo
            </h2>
            <p className="text-gray-400 mt-4">
              Veja como capacitamos empresas de todos os tamanhos.
            </p>
          </div>
        </Container>
        <Container>
          <div className="py-10 md:py-20">
            <div className="relative flex flex-col items-center justify-center overflow-hidden">
              
              {/* Contêiner para o Marquee da primeira linha */}
              <div className="relative w-full h-32 overflow-visible">
                <Marquee pauseOnHover className="marquee-left select-none">
                  {firstRow.map((review) => (
                    <figure
                      key={review.name}
                      className="relative w-64 cursor-pointer overflow-hidden rounded-xl  p-4 mx-4"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <FaUser className="w-6 h-6 text-gray-400" />
                        <div className="flex flex-col">
                          <figcaption className="text-sm font-medium text-gray-100">
                            {review.name}
                          </figcaption>
                          <p className="text-xs font-medium text-gray-500">
                            {review.username}
                          </p>
                        </div>
                      </div>
                      <blockquote className="mt-2 text-sm text-gray-300">
                        {review.body}
                      </blockquote>
                    </figure>
                  ))}
                </Marquee>
              </div>

              {/* Contêiner para o Marquee da segunda linha */}
              <div className="relative w-full h-32 overflow-visible mt-10">
                <Marquee reverse pauseOnHover className="marquee-right select-none">
                  {secondRow.map((review) => (
                    <figure
                      key={review.name}
                      className="relative w-64 cursor-pointer overflow-hidden rounded-xl  p-4 mx-4"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <FaUser className="w-6 h-6 text-gray-400" />
                        <div className="flex flex-col">
                          <figcaption className="text-sm font-medium text-gray-100">
                            {review.name}
                          </figcaption>
                          <p className="text-xs font-medium text-gray-500">
                            {review.username}
                          </p>
                        </div>
                      </div>
                      <blockquote className="mt-2 text-sm text-gray-300">
                        {review.body}
                      </blockquote>
                    </figure>
                  ))}
                </Marquee>
              </div>

              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Hero4;
