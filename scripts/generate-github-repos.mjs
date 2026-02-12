#!/usr/bin/env node

/**
 * Script para obtener un JSON con todos los repos públicos de GitHub
 * del usuario "FraVelz" y guardarlo en `src/data/github-repos.json`.
 *
 * Uso:
 *   pnpm node ./scripts/generate-github-repos.mjs
 *
 * (También puedes añadir un script en package.json, por ejemplo:
 *   "repos:fetch": "node scripts/generate-github-repos.mjs"
 * )
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GITHUB_USER = 'FraVelz';
const PER_PAGE = 100;

/**
 * Clasifica cada repo en un tipo alto nivel para la web de proyectos.
 * Puedes ajustar esta lógica según tus necesidades.
 */
function classifyRepo(repo) {
  const name = (repo.name || '').toLowerCase();
  const description = (repo.description || '').toLowerCase();
  const language = (repo.language || '').toLowerCase();
  const topics = (repo.topics || []).map((t) => t.toLowerCase());

  // Heurísticas básicas
  if (language === 'python') {
    return 'python';
  }

  const isWebLanguage = ['astro', 'javascript', 'typescript', 'html', 'css'].includes(language);
  const isFlutter =
    language === 'dart' || name.includes('flutter') || description.includes('flutter');
  const isWindowManager =
    name.includes('hypr') ||
    name.startsWith('config-') ||
    name.includes('config-') ||
    description.includes('sway') ||
    description.includes('hyprland') ||
    topics.includes('hyprland') ||
    topics.includes('dotfiles') ||
    topics.includes('sway') ||
    topics.includes('i3') ||
    topics.includes('wm');

  if (name.startsWith('web-') || isWebLanguage || topics.includes('web')) {
    return 'web';
  }

  if (isFlutter) {
    return 'mobile-flutter';
  }

  if (isWindowManager) {
    return 'wm-config';
  }

  if (topics.includes('script') || topics.includes('cli')) {
    return 'scripting';
  }

  return 'other';
}

async function fetchAllRepos() {
  const all = [];
  let page = 1;

  // Se hace paginación por si superas los 100 repos en el futuro
  while (true) {
    const url = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=${PER_PAGE}&page=${page}&sort=updated`;

    const res = await fetch(url, {
      headers: {
        'User-Agent': 'fravelz-web-repo-fetcher',
        Accept: 'application/vnd.github+json',
      },
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Error al llamar a GitHub API (${res.status}): ${text}`);
    }

    const data = await res.json();
    all.push(...data);

    if (data.length < PER_PAGE) {
      break;
    }

    page += 1;
  }

  return all;
}

async function main() {
  console.log(`Obteniendo repos públicos de GitHub para ${GITHUB_USER}...`);
  const repos = await fetchAllRepos();

  const mapped = repos.map((repo) => ({
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description,
    url: repo.html_url,
    homepage: repo.homepage,
    language: repo.language,
    topics: repo.topics,
    stars: repo.stargazers_count,
    fork: repo.fork,
    archived: repo.archived,
    createdAt: repo.created_at,
    updatedAt: repo.updated_at,
    visibility: repo.visibility,
    type: classifyRepo(repo),
  }));

  // Orden opcional: primero por estrellas, luego por fecha de actualización
  mapped.sort((a, b) => {
    if (b.stars !== a.stars) return b.stars - a.stars;
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  const outPath = path.resolve(__dirname, '../src/data/github-repos.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(mapped, null, 2), 'utf8');

  console.log(`Guardado ${mapped.length} repos en ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

