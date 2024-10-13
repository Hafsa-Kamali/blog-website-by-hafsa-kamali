"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Particle from "./Particles";




const inter = Inter({
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] over-flow-y-scroll  h-[3000px] overflow-x-hidden`}>
      <Particle />
    
        {children}
      </body>
    </html>
  );
}


