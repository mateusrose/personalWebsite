"use client";
import React from "react";
import Link from "next/link";
import { Home, Undo2 } from "lucide-react";
import { motion } from "framer-motion";

const NavLink = motion(Link);
const HomeButton = () => {
  return (
   <NavLink
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ delay: 1 }}
  className="group text-foreground rounded-full flex items-center justify-center custom-bg fixed z-50 p-2.5 xs:p-4 top-4 left-4 w-fit self-start"
  aria-label={"home"}
  href={"/"}
  target={"_self"}
  name={"home"}
>
  <span className="relative w-2 h-2 p-4 sm:p-3 ">
    <Undo2 className="absolute top-[4px] sm:top-[1px] left-[4px] sm:left-[0px] text-foreground group-hover:text-accent" strokeWidth={1.5} />
    <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
    <span
      className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2
  bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap"
    >
      Home
    </span>
  </span>
</NavLink>
  );
};

export default HomeButton;
