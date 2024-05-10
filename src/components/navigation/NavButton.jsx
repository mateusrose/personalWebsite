import React from "react";
import Link from "next/link";
import { User, Palette, Github, Linkedin, NotebookText } from "lucide-react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";

const getIcon = (icon) => {
  switch (icon) {
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
    default:
      return <User className="w-full h-auto" strokeWidth={1.5} />;
  }
};
const NavButton = ({ x, y, label, link, icon, newTab, lableDirection="right" }) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{ transform: `translate(${x}, ${y})`}}
          >
            <Link
              className="text-foreground rounded-full flex items-center justify-center
              custom-bg
              "
              aria-label={label}
              href={link}
              target={newTab ? "_blank" : "_self"}
              name={label}
              
            >
              <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
                <span
                  className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2
            bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap"
                >
                  {label}
                </span>
              </span>
            </Link>
          </div>
        ) : (
          <div
            className="w-fit cursor-pointer z-50"
          >
            <Link
              className="text-foreground rounded-full flex items-center justify-center
              custom-bg
              "
              aria-label={label}
              href={link}
              target={newTab ? "_blank" : "_self"}
              name={label}
              
            >
              <span className="relative xs:w-14 xs:h-14 p-4 group-hover:pause hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
                <span
                  className={clsx("absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",lableDirection === "left" ? "right-full left-auto" : "")}>
                  {label}
                </span>
              </span>
            </Link>
          </div>
        );
      }}
    </ResponsiveComponent>  
  );
};

export default NavButton;
