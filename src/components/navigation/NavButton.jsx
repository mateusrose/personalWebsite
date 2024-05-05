import React from "react";
import Link from "next/link";
import { User, Palette, Github, Linkedin, NotebookText } from "lucide-react";


const getIcon = (icon) => {

    switch (icon) {
        case "about":
        return <User className="w-full h-auto" strokeWidth={1.5}/>
        case "projects":
        return <Palette className="w-full h-auto" strokeWidth={1.5}/>
        case "github":
        return <Github className="w-full h-auto" strokeWidth={1.5}/>
        case "linkedin":
        return <Linkedin className="w-full h-auto" strokeWidth={1.5}/>
        case "resume":
        return <NotebookText className="w-full h-auto" strokeWidth={1.5}/>
        default:
        return <User className="w-full h-auto" strokeWidth={1.5}/>
    }
}
const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div
      className="absolute cursor-pointer z-50"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      <Link
        className="text-foreground rounded-full flex items-center justify-center
        bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]
        "
        aria-label={label}
        href={link}
        target={newTab ? "_blank" : "_self"}
        name={label}
      >
      <span className="relative w-14 h-14 p-4">{getIcon(icon)}</span>
      </Link>
    </div>
  );
};

export default NavButton;
