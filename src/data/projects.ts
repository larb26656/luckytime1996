export interface Project {
  title: string;
  link?: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "JWT Factory",
    description:
      "A simple CLI tool to sign and decode JWT tokens, with optional support for templates.",
    link: "https://github.com/larb26656/jwt-factory",
    tags: ["Typescript", "Node.js", "Cli tool", "JWT"],
  },
  {
    title: "Env tag",
    description:
      "A simple Chrome extension that adds a visual indicator (tag) to specified websites, helping you distinguish between different environments like Production, Staging, and UAT.",
    link: "https://github.com/larb26656/env-tag",
    tags: ["Typescript", "Node.js", "Chrome extension", "React"],
  },
  {
    title: "Local share",
    description:
      "A Flutter-based cross-platform local file-sharing application designed to share files seamlessly over a local network without requiring a central server.",
    link: "https://github.com/larb26656/local-share",
    tags: ["Flutter", "Dart", "Server", "Webs socket"],
  },
  {
    title: "DB evo reborn",
    description:
      "This project is a CLI tool designed to generate Liquibase change logs. It is a Node.js-based project that helps in managing and versioning database schema changes.",
    link: "https://github.com/larb26656/db-evo-reborn",
    tags: ["Node.js", "CLI tool", "Liquibase", "Database"],
  },
];
