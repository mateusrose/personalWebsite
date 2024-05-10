"use client";
import React from "react";
import { BtnList } from "@/app/data";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  const size =  useScreenSize();
  const desktop = size >= 1024;
  const tablet = size >= 768;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
    <div className="flex items-center justify-between relative animate-spin-slow hover:pause group">
      {BtnList.map((btn, index) => {
        const angleRad = (angleIncrement * index * Math.PI) / 180;
        const radius = 20; // adjust this value as needed
        const x = `${radius * Math.cos(angleRad) -2}vw`;
        const y = `${radius * Math.sin(angleRad)}vw`;
        return <NavButton key ={btn.label} x={ x } y={ y } {...btn}/> 
       
       
      })}
    </div></div>
  );
};

export default Navigation;
