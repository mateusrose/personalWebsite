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
      className=" text-foreground rounded-full flex items-center justify-center custom-bg fixed z-50 p-2.5 xs:p-4 top-4 left-4 w-fit self-start"
      aria-label={"home"}
      href={"/"}
      target={"_self"}
      name={"home"}
    >
      <span className="relative w-8 h-8 p-2.5 xs:p-4 hover:pause hover:text-accent">
        <Undo2 className="absolute top-[4px] left-[4px] text-foreground hover:text-accent" strokeWidth={1.5} />
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
