import React from "react";
import ItemLayout from "./ItemLayout";
import { aboutMe } from "@/app/data";


const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid mt-[-280px] sm:mt-[-150px] grid-cols-12  gap-4 xs:gap-6 md:gap-8 w-full -mt-20">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            The mixing developer
          </h2>
          <br></br>
          <p className="font-light text-xs sm:text-sm md:text-base">
            {aboutMe}
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full sm:col-span-4">
          <div className="font-semibold w-full">
            At the moment @ React course @ projects
          </div>
        </ItemLayout>
        <ItemLayout className="col-span-full sm:col-span-4 text-accent">
          <div className="font-semibold w-full">
            Enthusiast Junior Developer
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=mateusrose&theme=transparent&hide_border=true&show&title_color=E078FF&show_icons=true&icon_color=E078FF&text_color=FFFFFF&text_bold=false"
            alt="mateusrose"
            loading="lazy"
          ></img>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=mateusrose&theme=transparent&hide_border=true&show&title_color=E078FF&show_icons=true&icon_color=E078FF&text_color=FFFFFF&text_bold=false"
            alt="mateusrose"
            loading="lazy"
          ></img>
        </ItemLayout>
        <ItemLayout className={"col-span-full sm:col-span-full !p-4"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=java,js,html,css,bash,bootstrap,discord,git,github,linux,mysql,react,vscode,postman,hibernate,idea,jquery,linkedin,maven,mint,vim,neovim,nodejs,npm,regex,spring,stackoverflow,tailwind,threejs,ubuntu"
            alt="mateusrose"
            loading="lazy"
          ></img>
        </ItemLayout>
      </div>
    </section>
  );
};
export default AboutDetails;
