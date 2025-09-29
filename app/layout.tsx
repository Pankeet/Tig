import type { Metadata } from "next";
import Image from "next/image";
import { Inter , Roboto } from "next/font/google";
import Button from "@/components/ui/Button";
import "./globals.css";
import { Component } from "react";

export const metadata: Metadata = {
  title: "Tig- Where your code writes its own story",
  description: "Turn raw files into ready-to-share insights",
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '700'], 
})

function Navbar(){
  return(
    <div className="flex justify-between">
      <div className="backdrop-blur-2xl bg-white/20 fixed lg:top-10 lg:left-20 top-5 left-8">
        <Image src="/Tig.svg" alt="logo" width={60} height={60} />
      </div>
      <div className="blackdrop-blur-2xl bg-white/20 flex gap-3 fixed lg:top-12 lg:right-20 top-6 right-10">
        <div><Button placeholder="SignIn" size="md" variant="primary" /></div>
        <div className="lg:block md:block hidden"><Button placeholder="SignUp" size="md" variant="secondary" /></div>
      </div>
    </div>
  )
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
          <Navbar />
        {children}
      </body>
    </html>
  );
}
