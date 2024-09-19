import type { Metadata } from "next";
import { Inter, Roboto, Poppins } from "next/font/google";
import { twMerge } from 'tailwind-merge'; // Importar twmerge
import "./globals.css";
import Menu from "@/components/navigation/Menu";
import GlassixWidget from "@/Glassix/GlassixComponent";
import NewMenu from "@/components/navigation/NewMenu";
import Footer from "@/components/navigation/Footer";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Connectika",
  description: "Descrição da página Connectika",
  keywords: ["connectika", "soluções", "tecnologia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={twMerge(`${poppins.className} antialiased `)}>
        <Menu />
        <GlassixWidget />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
