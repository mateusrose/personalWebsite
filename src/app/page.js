import Image from "next/image";
import bg from "../../public/background/backgroundtokyo.jpeg";
import RenderModel from "@/components/RenderModel";
import Bear from "@/components/models/Bear";
import Navigation from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-10" />

      <div className="w-full h-screen z-10">
        {/** navigation and 3d model */}
        <Navigation/>
        <RenderModel>
        <Bear/>
        </RenderModel>
      </div>
    </main>
  );
}
