/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "CodeFighters",
    description:
      "First java game I was part of, a fighting game tekken-style for 2 players where each character was a teacher of mine.",
    date: "2024-02-17",
    demoLink: "https://mateusrose.itch.io/code-fighters",
  },
  {
    id: 2,
    name: "BattleShip terminal game",
    description:
      "Java terminal game where you the main goal was to deal with concurrency.",
    date: "2024-03-15",
    demoLink: "https://github.com/mateusrose/battleShipCode",
  },
  {
    id: 3,
    name: "Crimson Rosé",
    description:
      "Follow Lina in her pirating adventures while completing javascript code challenges.",
    date: "2024-04-19",
    demoLink: "https://myhackathonproject.netlify.app/",
  },
  {
    id: 4,
    name: "Cyberpunk-theme personal website",
    description:
      "Project to experiment with tools I havent used before, like tailwindcss, nextjs and threejs.",
    date: "2024-05-10",
    demoLink: "https://github.com/mateusrose/personalWebsite",
  },
  {
    id: 5,
    name: "@@ Block Split or Steal",
    description:
      "Another terminal game in java, this time with a concept that allows for more players and a more complex game.",
    date: "2024-05",
    demoLink: "https://github.com/mateusrose/blockBattle",
  },
  {
    id: 6,
    name: "@@ Quarkus RESTfull API",
    description:
      "Learning how to do RESTfull APIs with Quarkus, a java framework.",
    date: "2024-05-12",
    demoLink: "https://github.com/mateusrose/calendarrest",
  }
];

export const BtnHome = {
  label: "Home",
  link: "/",
  icon: "home",
  newTab: false,
};

export const BtnList = [
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/mateusrose/",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/mateusrosecode/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
  
];

export const aboutMe = "Hey there, I'm Pedro Mateus Rosa, but you can call me the 'Code Bartender' - serving up solutions one line at a time! As a full stack developer, I blend the perfect mix of front-end finesse and back-end wizardry to craft seamless digital experiences. With a background in bartending, I've mastered the art of mixing the right ingredients to create something truly delightful, whether it's a complex web application or a refreshing cocktail. When I'm not typing away at my keyboard, you can find me exploring new technologies, sipping on a glass of Mateus Rosé (of course, but never at work!) or learning something new."