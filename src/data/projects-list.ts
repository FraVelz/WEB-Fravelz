import type { Project } from './project-types';

import { projectNotasHacking } from './projects/project-notas-hacking';
import { projectWebHyprdots } from './projects/project-web-hyprdots';
import { projectIcfesMaster } from './projects/project-icfes-master';
import { projectWebAtajos } from './projects/project-web-atajos';
import { projectWebSorteo } from './projects/project-web-sorteo';
import { projectWebVulnerable } from './projects/project-web-vulnerable';

/** Lista de todos los proyectos del portafolio */
export const projects: Project[] = [
  projectNotasHacking,
  projectWebHyprdots,
  projectIcfesMaster,
  projectWebAtajos,
  projectWebSorteo,
  projectWebVulnerable
];
