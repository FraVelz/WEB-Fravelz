import type { Project } from "./project-types";

import { projectIcfesMaster } from "./projects/project-icfes-master";
import { projectEcoBogota } from "./projects/project-eco-bogota";
import { projectStarcrypt } from "./projects/project-starcrypt";
import { projectWebMarcadores } from "./projects/project-web-marcadores";
import { projectWebProsperity } from "./projects/project-web-prosperity";
import { projectWebTodoList } from "./projects/project-web-todo-list";
import { projectFvStore } from "./projects/project-fv-store";
import { projectFrontendMentorNextjs } from "./projects/project-frontend-mentor-nextjs";
import { projectFravelzPortfolio } from "./projects/project-fravelz-portfolio";
import { projectNotasHacking } from "./projects/project-notas-hacking";

/** Lista de todos los proyectos del portafolio */
export const projects: Project[] = [
  projectIcfesMaster,
  projectEcoBogota,
  projectStarcrypt,
  projectWebMarcadores,
  projectWebProsperity,
  projectWebTodoList,
  projectFvStore,
  projectFrontendMentorNextjs,
  projectFravelzPortfolio,
  projectNotasHacking,
];
