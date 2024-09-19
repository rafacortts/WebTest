import { RadiobuttonIcon } from "@radix-ui/react-icons";
import React from "react";

const Cards = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-5xl mt-12 pb-12 text-white">
          Lorem ipsum dolor sit, amet{" "}
          <span className="text-[#C6F57A]">consectetur adipisicing.</span>
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 - Larger Card */}
          <div className="p-8 rounded-lg shadow-md flex flex-col gap-4 lg:col-span-2 bg-[#1D1E20]">
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm font-medium bg-[#FBB331] px-3 py-1 rounded-full">
                Lorem
              </span>
              <span className="font-semibold text-xl text-white">
                Lorem ipsum
              </span>
              <span className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                doloremque iste doloribus repellat voluptatum iusto perspiciatis
                repellendus. Eligendi non, iure, dolorem ad omnis in possimus
                sunt veritatis tempora cupiditate odio.
              </span>
              <img
                src="https://via.placeholder.com/300x200" // Substitua pelo URL da sua imagem
                alt="Descrição da imagem"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-lg shadow-md flex flex-col gap-4 bg-[#1D1E20]">
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm font-medium bg-[#149BFE] px-3 py-1 rounded-full">
                Lorem
              </span>
              <span className="font-semibold text-xl text-white">
                Lorem ipsum
              </span>
              <span className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus bibendum mi sed mauris fringilla, eget rhoncus lectus
                semper.
              </span>
              <img
                src="https://via.placeholder.com/300x200" // Substitua pelo URL da sua imagem
                alt="Descrição da imagem"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-lg shadow-md flex flex-col gap-4 bg-[#1D1E20]">
            <div className="flex flex-col items-start gap-2">
              <span className="bg-[#B477F0] py-1 px-3 rounded-full">Lorem</span>
              <span className="text-xl font-semibold text-gray-100">Fast</span>
              <span className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, odit ab ullam facilis nulla earum possimus modi quidem
              </span>
              <img
                src="https://via.placeholder.com/300x200" // Substitua pelo URL da sua imagem
                alt="Descrição da imagem"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Card 4 - Larger Card */}
          <div className="p-8 rounded-lg shadow-md flex flex-col gap-4 lg:col-span-2 bg-[#1D1E20]">
            <div className="flex flex-col items-start gap-4">
              <span className="bg-pink-600 rounded-full px-3 py-1 text-sm">lorem</span>
              <span className="text-xl font-semibold text-gray-100">Fast</span>
              <span className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque corporis accusantium architecto deleniti facere
                quibusdam voluptatum quae maxime enim fugiat expedita, saepe,
                assumenda aliquam et maiores rerum ad alias optio!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
