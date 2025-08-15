export interface TechStackCategory {
  title: string;
  items: {
    img: string;
    name: string;
  }[];
}

export const techStacks: TechStackCategory[] = [
  {
    title: "Languages",
    items: [
      { img: "", name: "Java" },
      { img: "", name: "JavaScript" },
      { img: "", name: "TypeScript" },
      { img: "", name: "Go" },
      { img: "", name: "Dart" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { img: "", name: "Spring boot" },
      { img: "", name: "Angular" },
      { img: "", name: "React" },
      { img: "", name: "Nest js" },
      { img: "", name: "Node js" },
      { img: "", name: "Flutter" },
      { img: "", name: "Astro" },
    ],
  },
  {
    title: "Message & cache",
    items: [
      { img: "", name: "Rabbit MQ" },
      { img: "", name: "Redis" },
    ],
  },
  {
    title: "Devops & Tools",
    items: [
      { img: "", name: "Docker" },
      { img: "", name: "Jenkins" },
    ],
  },
];
