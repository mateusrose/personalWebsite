import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import LightGlitch from "@/components/LightGlitch";
import Sound from "@/components/Sound";

const inter = Inter({ 
  subsets: ["latin"],
  variable:"--font--inter"

  });


export const metadata = {
  title: "Mateus Rose coding",
  description: "Mateus Rose coding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" href="/favicon.ico" />
    </head>
      <body className={clsx(inter.variable, "bg-background text-foreground")}>
       
          {children}
          <LightGlitch />
          <Sound />
       
      </body>
    </html>
  );
}
