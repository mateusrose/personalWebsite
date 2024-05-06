import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import LightGlitch from "@/components/LightGlitch";

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
      <body className={clsx(inter.variable, "bg-background text-foreground")}>
       
          {children}
          <LightGlitch />
       
      </body>
    </html>
  );
}
