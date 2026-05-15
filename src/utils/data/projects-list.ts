import type { Project } from "./project-types";

import { projectFravelzPortfolio } from "./projects/project-fravelz-portfolio";
import { projectNotasHacking } from "./projects/project-notas-hacking";
import { projectIcfesMaster } from "./projects/project-icfes-master";
import { projectFrontendMentorNextjs } from "./projects/project-frontend-mentor-nextjs";
import { projectWebTodoList } from "./projects/project-web-todo-list";

/** Lista de todos los proyectos del portafolio */
export const projects: Project[] = [
  projectIcfesMaster,
  projectWebTodoList,
  projectFravelzPortfolio,
  projectFrontendMentorNextjs,
  projectNotasHacking,
];
