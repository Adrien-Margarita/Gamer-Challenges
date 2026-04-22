# Déploiement Local Sécurisé - Gamer Challenges

Ce dossier permet de lancer PostgreSQL et PgAdmin en local pour le backend.

## 1) Prérequis

- Docker Desktop installé et démarré
- Node.js 18+
- pnpm

## 2) Configuration

1. Copier l'exemple d'environnement Docker:

```bash
cp .env.example .env
```

2. Vérifier la cohérence avec le backend:
- Le backend attend PostgreSQL sur localhost:15432
- La base cible est gamerchallenge
- Le mot de passe par défaut est 1272

## 3) Démarrage de la base locale

Depuis le dossier Deploy:

```bash
docker compose up -d
```

Vérification:

```bash
docker compose ps
```

## 4) Initialisation Schéma + Données de Test

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

## 6) Plan de tests minimum

Depuis `project/server`:

```bash
pnpm test
```

Éléments à archiver comme preuves:
- Journal de lancement Docker (services UP)
- Sortie prisma db push sans erreur
- Sortie seed sans erreur
- Journal de validation applicative
- Capture du Swagger sur /api-docs

## 7) Bonnes Pratiques Sécurité/Déploiement

- Ne jamais versionner les fichiers .env réels.
- Faire tourner les secrets en environnement de recette/prod.
- Limiter CORS aux domaines front autorisés.
- En production, passer les cookies de session en secure=true.
- Ajouter une étape CI: installation, lint, tests, build.

## 8) Mise en Production

Pipeline cible conseillé:

1. Build + tests sur chaque Pull Request
2. Build image backend/front taggée par commit
3. Déploiement auto en environnement de test
4. Validation manuelle puis promotion en production
5. Monitoring post-déploiement (logs + healthcheck)

## 9) Documentation Associée

- Détail complet de la mise en production: `Deploy/MISE_EN_PRODUCTION.md`
