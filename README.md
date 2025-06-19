# 🎮 Gamer Challenge

**Gamer Challenge** est une plateforme de partage de défis autour des jeux vidéo. Les joueurs peuvent créer des challenges, y participer avec des vidéos ou des images, et voter pour leurs participations préférées. C’est un lieu d’inspiration et de compétition entre passionnés de gaming.

---

## ✨ Fonctionnalités

- ✅ Création de défis sur des jeux
- 📷 Ajout de participations (image ou vidéo)
- 🗳️ Système de votes
- 🧑‍💼 Interface profil avec historique des participations et challenges

---

## 🚀 Lancer le projet en local

> Prérequis :
> - Node.js ≥ 18
> - pnpm installé globalement (`npm i -g pnpm`)
> - PostgreSQL ou base de données compatible configurée dans `.env`

### 1. Cloner le dépôt

```bash
git clone https://github.com/<ton-utilisateur>/gamer-challenge.git
cd gamer-challenge
```

### 2. Installation des dépendances et mise en place des serveurs

#### Backend

```bash
cd projet-gamer-challenges/project/server
pnpm install
```

Crée un fichier .env dans le dossier server/ :

```bash
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/gamerchallenge"

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

SESSION_SECRET=
```

Génération du client Prisma

```bash
pnpm prisma generate
```

Lancer le serveur Backend

```bash
pnpm dev
```
Le backend s’exécute sur http://localhost:3000

#### Frontend

Dans un nouveau terminal

```bash
cd projet-gamer-challenges/project/frontend
pnpm install
```
Crée un fichier .env dans le dossier frontend/ :

```bash
VITE_API_URL=
```

Lancer le serveur Frontend

```bash
pnpm dev
```

Le frontend est accessible sur http://localhost:5173
    
---

## Technologies utilisées

- Frontend : React, TypeScript, Tailwind CSS, Vite
- Backend : Node.js, Express, Prisma ORM, PostgreSQL
- Authentification : Express Session + httpOnly cookies
- Gestion d’état : React Query

---


    