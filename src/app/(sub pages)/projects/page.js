import Image from "next/image";
import bg from "../../../../public/background/backgroundtokyo.jpeg";
import ProjectList from "@/components/projects/ProjectList";
import { projectsData } from "../../data.js";


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
      <ProjectList projects={projectsData} />
     
    </>
  );
}
