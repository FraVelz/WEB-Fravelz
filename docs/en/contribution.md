# Contributing

Ordered steps and things to keep in mind if you want to contribute to the project: documentation for adding changes and understanding how the project works.

---

## Table of Contents

- [Contributing](#contributing)
  - [Table of Contents](#table-of-contents)
  - [Steps/Recommendations for PR](#stepsrecommendations-for-pr)
  - [Local Deployment](#local-deployment)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Available Scripts](#available-scripts)

---

## Steps/Recommendations for PR

This is a personal project, but suggestions and improvements are welcome:

1. Fork the project
2. Create a branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

> Commits should preferably use the conventional commits model.

---

## Local Deployment

### Prerequisites

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (recommended) or npm/yarn

### Steps

**Step 1:** Have the repo locally.

**2. Install dependencies:**

``` bash
pnpm install
# or
npm install
```

**3. Start development server:**

``` bash
pnpm dev
```

The site will be available at `http://localhost:4321/WEB-Fravelz/`.

---

## Available Scripts

| Script         | Description                                    |
| -------------- | ---------------------------------------------- |
| `pnpm dev`     | Starts development server with hot-reload       |
| `pnpm build`   | Generates optimized production build           |
| `pnpm preview` | Previews the production build locally          |
| `pnpm astro`   | Runs Astro CLI commands                        |

---

[Return to readme...](../../README.md)

> Author: Fravelz
