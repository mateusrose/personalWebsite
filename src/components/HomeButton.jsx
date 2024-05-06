"use client";
import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";


const HomeButton = () => {
  return (
    <>
      <Link
        className="text-foreground rounded-full flex items-center justify-center custom-bg fixed z-50 top-4 left-4 w-fit self-start"
        aria-label={"home"}
        href={"/"}
        target={"_self"}
        name={"home"}
      >
        <span className="relative w-14 h-14 p-4 hover:pause hover:text-accent">
          <Home className="w-full h-auto" strokeWidth={1.5} />
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
          <span
            className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2
      bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap"
          >
            Home
          </span>
        </span>
      </Link>
    </>
  );
};

export default HomeButton;
