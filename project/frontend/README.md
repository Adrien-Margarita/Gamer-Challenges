# Frontend - Gamer Challenges

Application frontend du projet Gamer Challenges, développée avec React, TypeScript et Vite.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Query
- React Router
- Playwright (tests E2E)

## Prérequis

- Node.js 18+
- pnpm

## Installation

```bash
pnpm install
cp .env.example .env
```

## Variables d'environnement

Le frontend utilise:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

## Lancer en développement

```bash
pnpm dev
```

Application disponible sur `http://localhost:5173`.

## Scripts

```bash
pnpm dev       # Serveur de développement
pnpm build     # Build production
pnpm preview   # Preview du build
pnpm e2e       # Tests end-to-end Playwright
pnpm e2e:headed # Tests end-to-end Playwright en mode visuel
```

## Connexion au Backend

Le frontend attend une API disponible par défaut sur:

`http://localhost:3000/api`

## Démarrage Local Complet

1. Lancer la base locale depuis le dossier `Deploy`:

```bash
cp .env.example .env
docker compose up -d
```

2. Lancer le backend depuis `project/server`:

```bash
cp .env.example .env
pnpm install
pnpm prisma generate
pnpm prisma db push
pnpm seed
pnpm dev
```

3. Lancer ce frontend depuis `project/frontend`:

```bash
pnpm install
cp .env.example .env
pnpm dev
```
