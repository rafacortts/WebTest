import React from "react";
import {
  FaHandshake,
  FaRegPaperPlane,
  FaCogs,
  FaDatabase,
  FaUserShield,
  FaHeadset,
} from "react-icons/fa"; // Example icons
import Container from "@/ui/Container";
import SectionBadge from "@/ui/section-badge";
import Wrapper from "@/ui/Wrapper";

const services = [
  {
    title: "Tailored Financial Integration",
    description:
      "Connectika is an industry leader in providing individualized financial solutions that guarantee a smooth entry into the market and maximize operational efficiency for companies operating in Brazil's dynamic sectors.",
    icon: FaHandshake,
  },
  {
    title: "Expertise in Regulated Markets",
    description:
      "With a deep understanding of Brazil's regulatory landscape, Connectika excels in navigating the complexities of new regulations, and legislations involving new businesses coming to Brazil.",
    icon: FaRegPaperPlane,
  },
  {
    title: "Strategic Partnerships",
    description:
      "Connectika's strong alliances with leading financial institutions and banks enable the company to offer innovative banking and payment services, particularly suited for large and medium-sized enterprises.",
    icon: FaCogs,
  },
  {
    title: "Advanced Technology Platforms",
    description:
      "Our state-of-the-art, no-code platform allows businesses to integrate multiple data sources effortlessly, providing real-time insights for informed decision-making.",
    icon: FaDatabase,
  },
  {
    title: "Comprehensive SAAS Offerings",
    description:
      "From KYC & Identity Verification to Finance as a Service (FAAS) and Banking as a Service (BaaS), Connectika offers a wide range of software solutions designed to meet diverse business needs.",
    icon: FaUserShield,
  },
  {
    title: "Dedicated Client Support",
    description:
      "At Connectika, we pride ourselves on providing VIP service and dedicated support, ensuring that each client receives personalized attention and guidance throughout their journey with us.",
    icon: FaHeadset,
  },
];

const ServicesSection = () => (
  <div className="bg-black text-white">
  <Wrapper ClassName="flex flex-col items-center justify-center py-12 relative ">
    <Container>
      <div className="max-w-md mx-auto text-start md:text-center">
        <SectionBadge title="Our Services" />
        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
          Explore How Connectika Can Transform Your Business
        </h2>
        <p className="text-muted-foreground mt-6">
          Connectika offers a comprehensive suite of services designed to
          enhance operational efficiency and provide strategic support in
          Brazil's dynamic market.
        </p>
      </div>
    </Container>
    <Container>
      <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-start lg:items-start px-0 md:px-0"
            >
              <div className="flex items-center justify-center">
                <service.icon className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-medium mt-4">{service.title}</h3>
              <p className="text-muted-foreground mt-2 text-start lg:text-start">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </Wrapper>
  </div>
);

export default ServicesSection;
