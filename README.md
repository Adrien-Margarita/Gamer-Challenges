# Gamer Challenges

Application web communautaire autour des jeux video: les utilisateurs publient des challenges, partagent leurs participations (video/image), puis votent.

Ce projet est utilise comme support pour le titre **Concepteur Developpeur d'Applications (CDA)**.

## Repository

```bash
git clone https://github.com/Adrien-Margarita/Gamer-Challenges
cd Gamer-Challenges
```

## Stack Technique

- Frontend: React 19, TypeScript, Vite, Tailwind CSS, React Query
- Backend: Node.js, Express, TypeScript, Prisma ORM
- Base de donnees: PostgreSQL 16
- Securite: sessions HTTP-only, CSRF, validation Joi, sanitization
- Documentation API: Swagger
- Qualite/Test: Jest, Supertest
- Deploiement local: Docker Compose (PostgreSQL + PgAdmin)

## Structure Du Projet

```text
.
├── Deploy/                 # Infrastructure locale (Docker Compose)
├── project/
│   ├── frontend/           # Application React
│   └── server/             # API Express + Prisma
└── conception/             # Documents de conception (MCD, MLD, CDC...)
```

## Prerequis

- Node.js 18+
- pnpm (installe globalement)
- Docker Desktop demarre

## Installation Locale Complete

### 1. Demarrer La Base De Donnees Locale

Depuis la racine du projet:

```bash
cd Deploy
cp .env.example .env
docker compose up -d
docker compose ps
```

La base PostgreSQL est exposee sur `localhost:15432`.

### 2. Configurer Et Lancer Le Backend

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

Backend disponible sur `http://localhost:3000`.
Swagger disponible sur `http://localhost:3000/api-docs`.

### 3. Configurer Et Lancer Le Frontend

Dans un autre terminal:

```bash
cd project/frontend
pnpm install
cp .env.example .env
pnpm dev
```

Frontend disponible sur `http://localhost:5173`.

## Variables D'Environnement

- Backend: `project/server/.env.example`
- Frontend: `project/frontend/.env.example`
- Docker (BDD + PgAdmin): `Deploy/.env.example`

### Backend (`project/server/.env`)

| Variable | Obligatoire | Exemple | Description |
|---|---|---|---|
| DATABASE_URL | Oui | `postgresql://postgres:1272@localhost:15432/gamerchallenge?schema=public` | URL de connexion PostgreSQL utilisee par Prisma et l'API. |
| SMTP_HOST | Oui pour l'envoi d'emails | `smtp.example.com` | Serveur SMTP utilise pour les emails applicatifs. |
| SMTP_PORT | Oui pour l'envoi d'emails | `465` | Port SMTP. |
| SMTP_USER | Oui pour l'envoi d'emails | `noreply@example.com` | Identifiant SMTP. |
| SMTP_PASS | Oui pour l'envoi d'emails | `change_me` | Mot de passe SMTP. |
| FRONTEND_URL | Oui pour reset password | `http://localhost:5173` | URL frontend injectee dans les liens emails (reset password). |
| SESSION_SECRET | Oui | `change_me_super_secret_session_key` | Secret des sessions Express. |
| PORT | Non | `3000` | Port d'ecoute de l'API (3000 par defaut). |
| NODE_ENV | Non | `development` | Environnement Node (`development`, `test`, `production`). |
| TEST_DATABASE_URL | Oui pour les tests | `postgresql://...` | URL de BDD utilisee par la suite de tests. |
| DEBUG | Non | `false` | Active des logs supplementaires dans certains tests. |

### Frontend (`project/frontend/.env`)

| Variable | Obligatoire | Exemple | Description |
|---|---|---|---|
| VITE_API_BASE_URL | Oui | `http://localhost:3000/api` | URL de base de l'API backend consommee par Axios. |

### Deploy (`Deploy/.env`)

| Variable | Obligatoire | Exemple | Description |
|---|---|---|---|
| POSTGRES_USER | Oui | `postgres` | Utilisateur PostgreSQL du conteneur DB. |
| POSTGRES_PASSWORD | Oui | `1272` | Mot de passe PostgreSQL du conteneur DB. |
| POSTGRES_DB | Oui | `gamerchallenge` | Base creee automatiquement au demarrage du conteneur. |
| PGADMIN_DEFAULT_EMAIL | Oui | `admin@gamerchallenge.local` | Identifiant de connexion PgAdmin. |
| PGADMIN_DEFAULT_PASSWORD | Oui | `change_me_now` | Mot de passe de connexion PgAdmin. |

### Tests (`project/server/.env.test`)

| Variable | Obligatoire | Exemple | Description |
|---|---|---|---|
| NODE_ENV | Oui | `test` | Force le mode test Node/Jest. |
| DATABASE_URL | Oui | `postgresql://...` | URL de secours pour Prisma pendant les tests. |
| TEST_DATABASE_URL | Oui | `postgresql://...` | URL explicitement utilisee par les tests integration/controllers. |
| SESSION_SECRET | Oui | `test-session-secret` | Secret de session pour les tests backend. |
| PORT | Non | `0` | Port aleatoire pendant les tests. |
| JWT_SECRET | Optionnel | `test-secret-key` | Reserve aux scenarios JWT (si actifs dans le projet). |
| JWT_EXPIRES_IN | Optionnel | `1h` | Duree de validite JWT associee aux scenarios JWT. |

## Comptes Seed Utiles

- Admin:
	- pseudonyme: `Froch`
	- mot de passe: `admin`
- Utilisateurs standards seedes:
	- mot de passe: `password123`

## Commandes Utiles

### Backend

```bash
cd project/server
pnpm dev
pnpm test
pnpm test:coverage
pnpm seed
```

### Frontend

```bash
cd project/frontend
pnpm dev
pnpm build
```

## Depannage Rapide

### Erreur Prisma `Can't reach database server at localhost:15432`

Verifier d'abord la base:

```bash
cd Deploy
docker compose ps
```

Si la base est arretee:

```bash
docker compose up -d
```

Puis reinitialiser schema + donnees:

```bash
cd ../project/server
pnpm prisma db push
pnpm seed
```

## Deploiement Et Documentation

Pour la procedure de deploiement local securise et les preuves RNCP (tests, logs, pipeline), consulter:

- `Deploy/README.md`


    