import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full -mt-20">
        <ItemLayout className="col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-2xl text-left w-full capitalize text-accent">
            The mixing developer
          </h2>
          <br></br>
          <p className="font-light">
            Hey there, I'm Pedro Mateus Rosa, but you can call me the "Code
            Bartender" - serving up solutions one line at a time! As a full
            stack developer, I blend the perfect mix of front-end finesse and
            back-end wizardry to craft seamless digital experiences. With a
            background in bartending, I've mastered the art of mixing the right
            ingredients to create something truly delightful, whether it's a
            complex web application or a refreshing cocktail. When I'm not
            typing away at my keyboard, you can find me exploring new
            technologies, sipping on a glass of Mateus Rosé (of course, but
            never at work!) or learning something new.
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-4">
          <div className="font-semibold w-full">
            At the moment @ React course @ projects
          </div>
        </ItemLayout>
        <ItemLayout className="col-span-4 text-accent">
          <div className="font-semibold w-full">
            Enthusiast Junior Developer
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-6"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=mateusrose&theme=radical"
            alt="mateusrose"
            loading="lazy"
          ></img>
        </ItemLayout>
      </div>
    </section>
  );
};
export default AboutDetails;
