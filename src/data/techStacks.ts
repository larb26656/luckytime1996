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
      { img: "/images/techstack/java.svg", name: "Java" },
      { img: "/images/techstack/javascript.svg", name: "JavaScript" },
      { img: "/images/techstack/typescript.svg", name: "TypeScript" },
      { img: "/images/techstack/go.svg", name: "Go" },
      { img: "/images/techstack/dart.svg", name: "Dart" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { img: "/images/techstack/springboot.svg", name: "Spring boot" },
      { img: "/images/techstack/angular.svg", name: "Angular" },
      { img: "/images/techstack/react.svg", name: "React" },
      { img: "/images/techstack/nest-js.svg", name: "Nest js" },
      { img: "/images/techstack/node-js.svg", name: "Node js" },
      { img: "/images/techstack/flutter.svg", name: "Flutter" },
      { img: "/images/techstack/astro.svg", name: "Astro" },
    ],
  },
  {
    title: "Message & cache",
    items: [
      { img: "/images/techstack/rabbitmq.svg", name: "Rabbit MQ" },
      { img: "/images/techstack/redis.svg", name: "Redis" },
    ],
  },
  {
    title: "Database",
    items: [
      { img: "/images/techstack/mariadb.svg", name: "MariaDB" },
      { img: "/images/techstack/postgresql.svg", name: "PostgreSQL" },
    ],
  },
  {
    title: "Devops & Tools",
    items: [
      { img: "/images/techstack/docker.svg", name: "Docker" },
      { img: "/images/techstack/jenkins.svg", name: "Jenkins" },
    ],
  },
];
