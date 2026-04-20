# Frontend - Gamer Challenges

Application frontend du projet Gamer Challenges, developpee avec React, TypeScript et Vite.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Query
- React Router

## Prerequis

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

## Lancer en developpement

```bash
pnpm dev
```

Application disponible sur `http://localhost:5173`.

## Scripts

```bash
pnpm dev       # Serveur de developpement
pnpm build     # Build production
pnpm preview   # Preview du build
```

## Connexion au backend

Le frontend attend une API disponible par defaut sur:

`http://localhost:3000/api`
