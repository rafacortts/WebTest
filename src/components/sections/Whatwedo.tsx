import SectionBadge from '@/ui/section-badge';
import React from 'react';
import { FaUser, FaCog, FaRocket } from 'react-icons/fa';

// Definindo o array de perks
export const perks = [
  {
    icon: <FaUser />,
    title: "Cadastro",
    info: "Crie sua conta gratuita para começar",
  },
  {
    icon: <FaCog />,
    title: "Personalize",
    info: "Escolha um modelo e personalize-o para atender às suas necessidades.",
  },
  {
    icon: <FaRocket />,
    title: "Lançamento",
    info: "Criamos seu futuro e compartilhe-o com o mundo.",
  },
];

// Definindo o componente Hero3
const Hero3 = () => {
  return (
    <div className="py-12 relative bg-black text-white">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto text-center">
          {/* Supondo que SectionBadge seja um componente válido */}
          <SectionBadge title="Lorem" />
          <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </h2>
          <p className="text-muted-foreground mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center py-10 md:py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-100 first:border-l-2 lg:first:border-none ">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex flex-col items-center px-4 md:px-6 lg:px-8 lg:py-6 py-4"
              >
                <div className="flex items-center justify-center">
                  {/* Renderizando o ícone diretamente */}
                  {perk.icon}
                </div>
                <h3 className="text-lg font-medium mt-4 text-center">{perk.title}</h3>
                <p className="text-muted-foreground mt-2 text-center">
                  {perk.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
