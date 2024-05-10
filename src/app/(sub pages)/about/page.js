"use client";
import Image from "next/image";
import bg from "../../../../public/background/backgroundtokyo.jpeg";
import { projectsData } from "../../data.js";
import RenderModel from "@/components/RenderModel";
import BookSteampunk from "@/components/models/BookSteampunk";
import AboutDetails from "@/components/about/AboutDetails";
import GlitchClip from "react-glitch-effect/src/GlitchClip";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 w-full h-full">
        <Image
          src={bg}
          alt="background-image"
          layout="fill"
          className="object-cover object-center opacity-20"
        />
      </div>
      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2">
        <RenderModel>
          <BookSteampunk />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[52%] left-1/2 -translate-x-1/2">
          <GlitchClip onHover={false}>
            <h1 className="font-bold text-8xl text-accent">
              Pedro Mateus Rosa
            </h1>
          </GlitchClip>
          <h3 className="text-5xl text-accentdark">mateus rosé</h3>
          <p className="font-light text-foreground text-ls">
            Meet the cyberpunk behind this page!
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
