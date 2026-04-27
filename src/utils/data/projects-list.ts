import type { Project } from "./project-types";

import { projectNotasHacking } from "./projects/project-notas-hacking";
import { projectIcfesMaster } from "./projects/project-icfes-master";
import { projectFrontendMentorNextjs } from "./projects/project-frontend-mentor-nextjs";
import { projectWebTodoList } from "./projects/project-web-todo-list";
import { projectWebMarcadores } from "./projects/project-web-marcadores";

/** Lista de todos los proyectos del portafolio */
export const projects: Project[] = [
  projectIcfesMaster,
  projectFrontendMentorNextjs,
  projectWebTodoList,
  projectWebMarcadores,
  projectNotasHacking,
];
