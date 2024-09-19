import Logo1 from "../Images/Logo1.svg";
import Logo2 from "../Images/Logo2.svg";
import Logo3 from "../Images/Logo3.svg";
import Logo4 from "../Images/Logo4.svg";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const LogoTickets = () => {
  const logos = [Logo1, Logo2, Logo3, Logo4];

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full overflow-hidden relative">
          <motion.div
            className="flex gap-8 md:gap-12"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 40, // Aumente a duração para um movimento mais suave
              ease: "easeInOut", // Use uma curva de aceleração e desaceleração
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ whiteSpace: "nowrap" }} // Garante que os logos não quebrem linha
          >
            {/* Concatena os logos três vezes para criar um efeito de repetição contínua */}
            {logos.concat(logos, logos).map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0" // Evita que os logos encolham
                whileHover={{ scale: 1.1 }} // Adiciona efeito de hover
                transition={{ duration: 0.3 }} // Duração do efeito de hover
              >
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-12 md:h-16 w-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTickets;
