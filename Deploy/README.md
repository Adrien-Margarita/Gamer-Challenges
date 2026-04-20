# Deploiement local securise - Gamer Challenge

Ce dossier permet de lancer PostgreSQL et PgAdmin en local pour le backend.

## 1) Prerequis

- Docker Desktop installe et demarre
- Node.js 18+
- pnpm

## 2) Configuration

1. Copier l'exemple d'environnement Docker:

```bash
cp .env.example .env
```

2. Verifier la coherence avec le backend:
- Le backend attend PostgreSQL sur localhost:15432
- La base cible est gamerchallenge
- Le mot de passe par defaut est 1272

## 3) Demarrage de la base locale

Depuis le dossier Deploy:

```bash
docker compose up -d
```

Verification:

```bash
docker compose ps
```

## 4) Initialisation schema + donnees de test

Depuis project/server:

```bash
cp .env.example .env
pnpm prisma generate
pnpm prisma db push
pnpm seed
```

## 5) Lancement applicatif

Backend:

```bash
cd project/server
pnpm dev
```

Frontend:

```bash
cd project/frontend
cp .env.example .env
pnpm dev
```

## 6) Plan de tests minimum (RNCP)

Depuis project/server:

```bash
pnpm dev
```

Elements a archiver comme preuves:
- Journal de lancement Docker (services UP)
- Sortie prisma db push sans erreur
- Sortie seed sans erreur
- Journal de validation applicative
- Capture du Swagger sur /api-docs

## 7) Bonnes pratiques securite/deploiement

- Ne jamais versionner les fichiers .env reels.
- Faire tourner les secrets en environnement de recette/prod.
- Limiter CORS aux domaines front autorises.
- En production, passer les cookies de session en secure=true.
- Ajouter une etape CI: installation, lint, tests, build.

## 8) Mise en production (demarche DevOps)

Pipeline cible conseille:

1. Build + tests sur chaque Pull Request
2. Build image backend/front taggee par commit
3. Deploiement auto en environnement de recette
4. Validation manuelle puis promotion en production
5. Monitoring post-deploiement (logs + healthcheck)

Cette demarche couvre les attendus "Contribuer a la mise en production dans une demarche DevOps".
