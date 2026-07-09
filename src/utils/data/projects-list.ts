import type { Project } from "./project-types";

import { projectFravelzPortfolio } from "./projects/project-fravelz-portfolio";
import { projectNotasHacking } from "./projects/project-notas-hacking";
import { projectIcfesMaster } from "./projects/project-icfes-master";
import { projectFrontendMentorNextjs } from "./projects/project-frontend-mentor-nextjs";
import { projectWebTodoList } from "./projects/project-web-todo-list";
import { projectWebMarcadores } from "./projects/project-web-marcadores";
import { projectWebProsperity } from "./projects/project-web-prosperity";
import { projectAyudandoAndo } from "./projects/project-ayudando-ando";

/** Lista de todos los proyectos del portafolio */
export const projects: Project[] = [
  projectIcfesMaster,
  projectWebMarcadores,
  projectWebProsperity,
  projectAyudandoAndo,
  projectWebTodoList,
  projectFrontendMentorNextjs,
  projectFravelzPortfolio,
  projectNotasHacking,
];
