"use client";
import Image from "next/image";
import bg from "../../public/background/backgroundtokyo.jpeg";
import RenderModel from "@/components/RenderModel";
import Bear from "@/components/models/Bear";
import Navigation from "@/components/navigation/Navigation";
import React from "react";
import GlitchClip from "react-glitch-effect/src/GlitchClip";

export default function Home() {
  return (
    <>
        <Image
          src={bg}
          alt="background-image"
          fill
          className="w-full h-full object-cover object-center opacity-20 -z-10"
        />
    
      <div className="w-full h-screen z-10">
        <Navigation />
        <RenderModel>
          <Bear />
        </RenderModel>
      </div>
    </>
  );
}
