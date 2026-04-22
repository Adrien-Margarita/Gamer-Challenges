# Gamer Challenges

Application web communautaire autour des jeux vidéo.
Les joueurs peuvent publier des challenges, partager leurs participations (vidéo/image), puis voter.

Ce projet est utilisé comme support pour le titre Concepteur Développeur d'Applications (CDA).

## Cloner le Projet

```bash
git clone https://github.com/Adrien-Margarita/Gamer-Challenges
cd Gamer-Challenges
```

## Stack Technique

- Frontend: React 19, TypeScript, Vite, Tailwind CSS, React Query
- Backend: Node.js, Express 5, TypeScript, Prisma ORM
- Base de données: PostgreSQL 16
- Sécurité: sessions HTTP-only, CSRF, validation Joi, sanitization
- Documentation API: Swagger
- Qualité: tests backend Jest + Supertest, tests E2E frontend Playwright
- Infra locale: Docker Compose (PostgreSQL + PgAdmin)

## Structure du Monorepo

```text
.
├── Deploy/                 # Docker Compose local (PostgreSQL + PgAdmin)
├── conception/             # Documents de conception (MCD, MLD, CDC...)
├── design/                 # Assets design
├── project/
│   ├── frontend/           # Application React
│   └── server/             # API Express + Prisma
└── project-management/     # Suivi de projet
```

## Prérequis

- Node.js 18+
- pnpm
- Docker Desktop démarré

## Démarrage Rapide (Local)

### 1. Lancer la Base de Données

Depuis la racine:

```bash
cd Deploy
cp .env.example .env
docker compose up -d
docker compose ps
```

PostgreSQL est exposé sur localhost:15432.

### 2. Installer et Lancer le Backend

Dans un nouveau terminal:

```bash
cd project/server
pnpm install
cp .env.example .env
pnpm prisma generate
pnpm prisma db push
pnpm seed
pnpm dev
```

API: http://localhost:3000
Swagger: http://localhost:3000/api-docs

### 3. Installer et Lancer le Frontend

Dans un autre terminal:

```bash
cd project/frontend
pnpm install
cp .env.example .env
pnpm dev
```

Frontend: http://localhost:5173

## Variables d'environnement

- Backend: project/server/.env.example
- Frontend: project/frontend/.env.example
- Docker: Deploy/.env.example

### Backend (project/server/.env)

| Variable | Requis | Description |
|---|---|---|
| DATABASE_URL | Oui | URL PostgreSQL utilisée par Prisma et l'API. |
| SMTP_HOST | Oui pour email | Serveur SMTP. |
| SMTP_PORT | Oui pour email | Port SMTP. |
| SMTP_USER | Oui pour email | Identifiant SMTP. |
| SMTP_PASS | Oui pour email | Mot de passe SMTP. |
| FRONTEND_URL | Oui pour reset password | URL frontend utilisée dans les liens emails. |
| SESSION_SECRET | Oui | Secret des sessions Express. |
| PORT | Non | Port de l'API (3000 par défaut). |
| NODE_ENV | Non | development, test ou production. |
| DEBUG | Non | Active des logs supplémentaires. |

### Frontend (project/frontend/.env)

| Variable | Requis | Description |
|---|---|---|
| VITE_API_BASE_URL | Oui | URL de base de l'API backend. |

### Docker (Deploy/.env)

| Variable | Requis | Description |
|---|---|---|
| POSTGRES_USER | Oui | Utilisateur PostgreSQL du conteneur DB. |
| POSTGRES_PASSWORD | Oui | Mot de passe PostgreSQL du conteneur DB. |
| POSTGRES_DB | Oui | Base créée au démarrage du conteneur. |
| PGADMIN_DEFAULT_EMAIL | Oui | Identifiant PgAdmin. |
| PGADMIN_DEFAULT_PASSWORD | Oui | Mot de passe PgAdmin. |

## Comptes Seed Utiles

- Admin
  - pseudonyme: Froch
  - mot de passe: admin
- Utilisateurs standards seedés
  - mot de passe: password123

## Commandes Utiles

### Raccourcis depuis la Racine

```bash
pnpm test         # Lance les tests backend
pnpm test:watch   # Lance les tests backend en mode watch
```

### Backend (project/server)

```bash
pnpm dev
pnpm build
pnpm test
pnpm test:watch
pnpm seed
```

### Frontend (project/frontend)

```bash
pnpm dev
pnpm build
pnpm preview
pnpm e2e
pnpm e2e:headed
```

## Dépannage Rapide

### Prisma: Can't reach database server at localhost:15432

Vérifier d'abord Docker:

```bash
cd Deploy
docker compose ps
```

Si nécessaire:

```bash
docker compose up -d
```

Puis ré-appliquer schéma + seed:

```bash
cd ../project/server
pnpm prisma db push
pnpm seed
```

## Documentation Complémentaire

- Procédure de déploiement local et bonnes pratiques: Deploy/README.md
- Documents de conception fonctionnelle et data: conception/


    