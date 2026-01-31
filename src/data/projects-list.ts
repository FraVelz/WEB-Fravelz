import type { Project } from './project-types';

import { projectNotasHacking } from './projects/project-notas-hacking';
import { projectPortafolioWeb } from './projects/project-icfes-master';
import { projectWebHyprdots } from './projects/project-web-hyprdots';

/** Lista de todos los proyectos del portafolio (orden: notas-hacking, portafolio-web, web-hyprdots) */
export const projects: Project[] = [
  projectNotasHacking,
  projectPortafolioWeb,
  projectWebHyprdots
];
