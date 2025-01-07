// components/projects/data/projects.jsx
import { createId } from "@paralleldrive/cuid2";

export const projects = [
  {
    id: createId(),
    title: "advantageAi",
    description: "",
    deployedURL: "",
    stacks: ["Python",],
    isRepo: true,
    repoUrl: "",
    imagePath: "/images/advantageAi.png",
  },
  {
    id: createId(),
    title: "advantageAi",
    description: "",
    deployedURL: "",
    stacks: ["Next.js", "Tailwind CSS",],
    isRepo: true,
    repoUrl: "",
    imagePath: "/images/advantageAi.png",
  },
];