# PLAN DE TESTS - Backend et E2E minimal (TP CDA BC03)

## 1. Contexte du projet

- Projet: Gamer Challenges
- Périmètre: API Node.js / Express / TypeScript
- Stack de test: Jest + Supertest + Playwright (E2E minimal)
- Cible RNCP: Titre Professionnel CDA (BC03)
- Date de référence: 20 avril 2026

Ce document formalise un plan de tests simple, crédible et exécutable, adapté à une présentation de jury TP CDA.
Il couvre les parcours critiques backend ainsi qu'un scénario E2E minimal démontrant un parcours utilisateur complet.

Commande de référence (backend + unitaire, depuis la racine du dépôt): `pnpm test`

## 2. Objectifs du plan de tests

- Vérifier le bon fonctionnement des endpoints critiques.
- Vérifier la gestion des cas nominaux et des cas d'erreur.
- Vérifier les règles de sécurité minimales (authentification/session + CSRF).
- Vérifier un parcours utilisateur complet minimal côté interface (E2E).
- Produire des preuves de validation exploitables pour le jury (résultats de tests, logs, captures).

## 3. Périmètre testé

### Inclus

- Lecture des challenges (liste)
- Authentification (login valide / login invalide)
- Contrôle d'accès à une route protégée sans session
- Création de challenge (données valides / invalides)
- Création de participation
- Validation unitaire d'une règle métier (participationSchema)
- Parcours E2E minimal: ouverture de l'application, affichage de la page Jeux, vérification de la liste

### Exclu

- Tests de performance
- Tests de charge
- Tests E2E complexes multi-parcours
- Cas métier secondaires non critiques

## 4. Stratégie de test

- Type de tests: intégration API (HTTP) + unitaire (Joi)
- Type de tests: E2E navigateur (Playwright)
- Outils: Jest + Supertest + Playwright
- Niveau d'isolation: mock minimal Prisma + mock argon2
- Gestion session: supertest.agent pour conserver les cookies
- Gestion CSRF:
  - Routes d'authentification publiques (login, register, forgot-password, reset-password) exclues de la protection CSRF
  - Routes mutatives protégées (POST/PUT/PATCH/DELETE) testées avec récupération préalable d'un token via /api/csrf-token
- Cible E2E retenue (la plus stable): page publique `/games`, avec vérification d'une réponse API et de l'affichage de la liste

## 5. Environnement de test

- Runtime: Node.js
- Framework API: Express
- Lancement des tests: NODE_ENV=test
- Fichiers de configuration:
  - jest.config.cjs
  - tests/setup.ts
- Fichier de tests principal:
  - tests/controllers/api.integration.test.ts
- Fichier de test unitaire:
  - tests/unit/participation.validator.unit.test.ts
- Fichier de test E2E:
  - project/frontend/e2e/games-list.e2e.spec.ts
- Fichier de configuration E2E:
  - project/frontend/playwright.config.ts

## 6. Critères d'entrée / sortie

### Critères d'entrée

- Dépendances installées (pnpm install)
- Configuration Jest disponible
- Configuration Playwright disponible (test E2E minimal)
- Application exportée sans listen bloqué en mode test
- Variables de test chargées (setup)
- Frontend, backend et base de données démarrés pour l'exécution E2E
- Frontend lancé sur `http://localhost:5173` pour respecter la configuration CORS du backend

### Critères de sortie

- 100% des tests définis dans ce plan exécutés
- Tous les tests au statut PASS
- Aucune erreur bloquante TypeScript/Jest
- Traces de preuve conservées (sortie terminal + captures)

## 7. Cas de tests détaillés

### T001

- Objectif: vérifier que la liste des challenges est accessible
- Route testée: GET /api/challenges
- Préconditions: aucune session requise
- Données: mock Prisma challenge.findMany renvoyant un tableau
- Résultat attendu: HTTP 200 + corps de réponse au format tableau

### T002

- Objectif: vérifier un login valide
- Route testée: POST /api/auth/login
- Préconditions: utilisateur existant + mot de passe valide (mock)
- Données: email/password valides
- Résultat attendu: HTTP 200 + données utilisateur sans password_hash

### T003

- Objectif: vérifier le refus d'un login invalide
- Route testée: POST /api/auth/login
- Préconditions: utilisateur introuvable (mock)
- Données: email/password invalides
- Résultat attendu: HTTP 401 + message d'erreur

### T004

- Objectif: vérifier le refus d'accès sans session
- Route testée: GET /api/auth/me
- Préconditions: aucune session
- Données: aucune
- Résultat attendu: HTTP 401 + message Non autorisé

### T005

- Objectif: vérifier la création d'un challenge avec données valides
- Route testée: POST /api/challenges
- Préconditions: utilisateur authentifié + token CSRF valide
- Données: title, description, rules, game_id, image_url
- Résultat attendu: HTTP 201 + challenge_id présent

### T006

- Objectif: vérifier la validation des données challenge invalides
- Route testée: POST /api/challenges
- Préconditions: utilisateur authentifié + token CSRF valide
- Données: payload incomplet
- Résultat attendu: HTTP 400 + message d'erreur + aucune création challenge

### T007

- Objectif: vérifier la création d'une participation simple
- Route testée: POST /api/participations
- Préconditions: utilisateur authentifié + token CSRF valide
- Données: description, challenge_id, video_url
- Résultat attendu: HTTP 201 + objet participation

### T008

- Objectif: vérifier la règle métier "au moins un média" côté validation
- Élément testé: participationSchema (test unitaire)
- Préconditions: aucune
- Données: payload sans video_url et sans image_url
- Résultat attendu: erreur de validation Joi

### T009

- Objectif: vérifier un parcours utilisateur complet minimal côté frontend
- Élément testé: page publique `/games` (Playwright)
- Préconditions: frontend, backend et base démarrés; données seedées
- Données: navigation vers `/games`, appel API `GET /api/games`
- Résultat attendu: réponse API 200, titre "Tous les jeux" visible, au moins un lien vers `/game/:id` affiché

## 8. Tableau récapitulatif

| ID   | Parcours critique                         | Endpoint                | Préconditions                         | Résultat attendu |
|------|-------------------------------------------|-------------------------|---------------------------------------|------------------|
| T001 | Lecture liste challenges                  | GET /api/challenges     | Aucune                                | 200 + tableau    |
| T002 | Login valide                              | POST /api/auth/login    | User mock + mot de passe valide       | 200 + succès     |
| T003 | Login invalide                            | POST /api/auth/login    | User mock introuvable                 | 401 + refus      |
| T004 | Route protégée sans session               | GET /api/auth/me        | Aucune session                        | 401 + refus      |
| T005 | Création challenge valide                 | POST /api/challenges    | Session + CSRF                        | 201 + créé       |
| T006 | Création challenge invalide               | POST /api/challenges    | Session + CSRF                        | 400 + erreur     |
| T007 | Création de participation               | POST /api/participations  | Session + CSRF                      | 201 + créé             |
| T008 | Validation unitaire participationSchema | participationSchema        | Aucune                              | Erreur Joi attendue    |
| T009 | Affichage E2E page Jeux                 | /games                     | Front + back + base + seed          | API 200 + liste visible |

## 9. Procédure d'exécution

Depuis la racine du projet:

1. pnpm install
2. pnpm test

Exécution du test E2E minimal (frontend):

1. Démarrer la base, le backend et le frontend
2. Depuis `project/frontend`: `pnpm e2e`
3. (optionnel) Mode visible: `pnpm e2e:headed`

Alternative (si besoin) depuis le dossier project/server:

1. pnpm install
2. pnpm test
3. (optionnel) pnpm test:watch

Résultat attendu:

- 2 suites de tests
- 8 tests exécutés
- 8 PASS

Résultat attendu (E2E):

- 1 test E2E exécuté
- 1 PASS

Parcours de démonstration recommandé en soutenance (TP CDA):

1. Exécuter `pnpm test` depuis la racine pour présenter les tests backend + unitaires.
2. Exécuter `pnpm e2e` depuis `project/frontend` pour présenter le parcours utilisateur complet minimal.
3. Montrer les sorties PASS comme preuves de validation.

## 10. Preuves à présenter au jury

- Capture de la commande pnpm test avec PASS global
- Extrait du fichier de tests montrant les cas T001 à T009
- Extrait du serveur montrant la gestion CSRF et la protection de routes
- Lien entre exigences fonctionnelles et tests associés (tableau section 8)
- Capture du lancement E2E (`pnpm e2e`) avec statut PASS
- Capture de la commande `pnpm e2e --list` montrant le scénario E2E-001

## 11. Limites et améliorations prévues

- Limite actuelle: tests centrés sur parcours critiques uniquement
- Amélioration 1: ajouter tests update/delete des challenges
- Amélioration 2: ajouter tests de non-régression sur votes
- Amélioration 3: ajouter pipeline CI pour exécution automatique

## 12. Conclusion

Ce plan de tests répond aux attendus d'une soutenance TP CDA BC03 avec une approche pragmatique: couverture des parcours critiques, exécution stable, et preuves de validation directement présentables au jury.
