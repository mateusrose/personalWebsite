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
    date: "2024-02",
    demoLink: "https://www.linkedin.com/in/mateusrosecode/details/projects/",
  },
  {
    id: 2,
    name: "BattleShip terminal game",
    description:
      "Java terminal game where you the main goal was to deal with concurrency.",
    date: "2024-03",
    demoLink: "https://www.linkedin.com/in/mateusrosecode/details/projects/",
  },
  {
    id: 3,
    name: "Crimson Rosé",
    description:
      "Follow Lina in her pirating adventures while completing javascript code challenges.",
    date: "2024-04",
    demoLink: "https://www.linkedin.com/in/mateusrosecode/details/projects/",
  },
  {
    id: 4,
    name: "Cyberpunk theme personal website",
    description:
      "Project to experiment with tools I havent used before, like tailwindcss, nextjs and threejs.",
    date: "2024-05",
    demoLink: "https://www.linkedin.com/in/mateusrosecode/details/projects/",
  },
  {
    id: 5,
    name: "Block Split or Steal",
    description:
      "Another terminal game in java, this time with a concept that allows for more players and a more complex game.",
    date: "2024-05",
    demoLink: "https://www.linkedin.com/in/mateusrosecode/details/projects/",
  },
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
