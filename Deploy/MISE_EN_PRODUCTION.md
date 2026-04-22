# Mise en production - Gamer Challenges

Cette mise en production repose sur une architecture freemium simple et cohérente:

- Frontend déployé sur Vercel
- Backend API déployé sur Render
- Base PostgreSQL hébergée sur Neon

Ce choix permet de disposer d'un environnement public complet, proche d'un contexte de production, sans coût d'infrastructure.

## Architecture et flux

Le frontend appelle l'API Render via la variable `VITE_API_BASE_URL`. Le backend se connecte à Neon via `DATABASE_URL`. Les trois services sont découplés, ce qui facilite les mises à jour indépendantes et les retours arrière ciblés.

## Préparation avant déploiement

Avant toute mise en ligne, une vérification locale est réalisée sur les points essentiels: build backend, tests backend et build frontend. Cette étape réduit les erreurs liées au packaging, aux dépendances et aux variables manquantes.

Les migrations Prisma doivent être prêtes et compatibles avec le schéma déjà présent sur Neon.

## Déploiement des services

La base Neon fournit l'URL PostgreSQL utilisée par Render dans `DATABASE_URL`.

Le backend Render est configuré sur le dossier `project/server`, avec build TypeScript puis démarrage du service en production. Les variables critiques sont `DATABASE_URL`, `SESSION_SECRET`, `FRONTEND_URL`, `NODE_ENV` et la configuration SMTP.

Le frontend Vercel est configuré sur le dossier `project/frontend`. La variable `VITE_API_BASE_URL` doit pointer vers l'URL publique du backend Render avec le bon préfixe API.

## Validation après mise en ligne

Une fois le déploiement terminé, les contrôles suivants sont effectués: disponibilité HTTPS du frontend et du backend, accessibilité de Swagger (`/api-docs`) et test des parcours clés (connexion, lecture des données, création de contenu, vote).

Si ces vérifications sont valides, la mise en production est considérée comme opérationnelle.

## Gestion d'incident et rollback

En cas de régression bloquante, la procédure consiste à redéployer la version précédente sur Vercel et Render. Si l'incident concerne les données, la restauration Neon est utilisée selon la gravité du problème.

L'objectif est de restaurer rapidement un état stable, puis d'identifier la cause avant un nouveau déploiement.

## Limites et évolutions

Le modèle freemium est adapté à une démonstration complète, mais présente des limites connues: temps de réveil possible sur Render, ressources contraintes et performances variables en charge.

Les évolutions prévues portent sur le monitoring, la formalisation de la stratégie de sauvegarde/restauration et un pipeline CI/CD plus strict.
