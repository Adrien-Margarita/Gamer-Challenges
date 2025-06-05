# GamerChallenges

## 1. Contexte et objectifs du projet

Le projet **GamerChallenges** a pour but de créer une plateforme dédiée aux joueurs pour créer, relever et partager des challenges vidéoludiques. Le système favorise l'engagement communautaire et le partage d'accomplissements dans un cadre ludique et stimulant.

## 2. Public cible

- Joueurs occasionnels ou réguliers
- Créateurs de contenu (streamers, YouTubers)
- Communautés de gamers recherchant des challenges originaux
- Plateforme d'esport ou d’événements communautaires

## 3. Fonctionnalités MVP

### 3.1. Création de challenges

- Titre, description
- Type de défi (solo, multijoueur, communautaire)
- Jeu concerné
- Niveau de difficulté
- Conditions de validation

### 3.2. Réalisation et validation

- Soumission de preuve (capture, lien vidéo, etc.)
- Modération/validation par la communauté ou administrateurs
- Système de points ou récompenses

### 3.3. Profils utilisateurs

- Création de compte
- Personnalisation du profil (avatar, bio, préférences de jeux)
- Historique des challenges créés/relevés

### 3.4. Classements et statistiques

- Leaderboards (généraux, par jeu, par saison)
- Statistiques personnelles (succès, taux de réussite, etc.)

### 3.5. Fonctionnalités communautaires

- Système de like/upvote
- Suivi d’autres utilisateurs
- Notifications personnalisées

## 4. Evolutions possibles

Système de commentaires : les utilisateurs peuvent commenter les participations.

Système de récompenses : badges ou points pour les utilisateurs en fonction de leurs participations et votes.

Système d'abonnement : possibilité de suivre un utilisateur ou un jeu spécifique pour ne manquer aucun nouveau challenge ou participation.

Messagerie interne : pour favoriser les échanges directs entre utilisateurs.

Système de modération : pour gérer les défis et participations inappropriés.

Gestion des vidéos : compression et optimisation de stockage des vidéos de participation.

Calendrier des événements : affichage d'événements spéciaux (tournois, challenges communautaires, etc.) avec gestion d'inscriptions.

Système de groupes ou clans : permettre aux utilisateurs de créer ou rejoindre des équipes pour réaliser des défis collaboratifs.

Support multilingue : au moins anglais et français.

## 5. Spécifications techniques

### Technologie front

| Technologie | Justification |
| --- | --- |
| **React** | *Pour la logique et l'interactivité, React est une bibliothèque JavaScript pour construire des interfaces utilisateur dynamiques.*

- Composants réutilisables
- Efficace : React met à jour seulement les parties modifiées du DOM (grâce au Virtual DOM).
- Écosystème riche : compatible avec de nombreuses bibliothèques (ex. React Router, Zustand, TanStack Query...).
- Bonne gestion de l’état : facilite la création d’interfaces complexes avec des interactions utilisateurs. |
| **Vite** | Démarrage rapide d’un projet frontend 
Hot reload ultra-rapide
Construire une version rapide en production |
| **TypeScript** | Améliore la maintenabilité du code, facilite la détection des erreurs pendant le développement et garantit une meilleure sécurité et lisibilité du code. |
| **Tailwind** | *Pour le style utilitaire rapide et cohérent, Tailwind est un framework CSS utility-first, c’est-à-dire qu’on compose les styles avec des classes utilitaires.*

- Rapidité à écrire : pas besoin de sortir du fichier pour écrire du CSS personnalisé.

- Design cohérent : impose une base de design avec échelle de tailles, couleurs, espaces, etc.

- Responsive design simplifié

- Personnalisable : via tailwind.config.js, adaptabilité du thème au projet |
| **DaisyUI** | *Pour les composants UI prêts à l’emploi, DaisyUI est une bibliothèque de composants basée sur Tailwind, avec des styles prédéfinis (boutons, modals, alertes...).*

- Gain de temps : pas besoin de recréer les composants classiques.

- Thèmes intégrés : support de thèmes clairs/sombres out-of-the-box.

- Compatibilité Tailwind : les composants sont construits avec des classes Tailwind, donc personnalisables.

- Simple d’utilisation
 |

## Technologie Back

| Technologie | Justification |
| --- | --- |
| **Node.js** | Très performant pour gérer des requêtes simultanées. Permet d’éxécuter du Javascript côté navigateur. |
| **Express** | Simplifie la création de serveurs web. Compatible avec PostgreSQL. |
| **Prisma** | Pour faciliter l'interaction avec la base de données PostgreSQL en utilisant TypeScript. Prisma permet de gérer les migrations de la base de données, les relations entre les entités. Sécurise les requêtes. |
| **TypeScript** | Améliore la maintenabilité du code, facilite la détection des erreurs pendant le développement et garantit une meilleure sécurité et lisibilité du code. |
| **Nodemon** | Hot Reload : refresh automatique de l’application lors des modifications. |
| **pnpm** | `pnpm` est un gestionnaire de paquets JavaScript utilisé pour installer les dépendances d'un projet Node.js. |

## Technologies complémentaires

| Usage | Technologie | Justification |
| --- | --- | --- |
| **Base de données** | PostgreSQL | Utiliser une base de donnée relationnelle est une obligation pour maintenir l'intégrité des données et des relations complexes. PostgreSQL prend en charge les index pour optimiser les requêtes. |
| **Authentification** | JWT / Argon2 | Permet d'assurer une authentification sécurisée et un passage d'informations fiable entre les services.
Argon2 est utilisé car propose une sécurité améliorée par rapports aux précédentes technologies équivalentes. |
| **API** | RESTful | Pour permettre de meilleures performances et communications entre les services ainsi qu'une documentation simple et claire. |
| **Orientation du Développement Front** | Mobile first | La majorité des utilisateurs visitent les sites depuis leur smartphone. |
| **Conteneurisation** | Docker | Permet la conteneurisation d'une application et de ses dépendances, ce qui facilitera le déploiement et la portabilité. Cela permet de garantir que l'application fonctionnera dans tous les environnements. Cela permet également la mise à jour ou modifications de l'application sans interruption de service. |
| **Documentation API** | Swagger | `Swagger` est idéal pour la création d’une documentation lisible du backend et permet de générer automatiquement les types destinés au front. Cela nous permettra d’avoir une cohérence parfaite entre back et front. |
| **CI/CD** | Github Actions | Permet d’automatiser des tâches comme les tests et déploiement lors du push sur GitHub. |
| **Tests** | Jest (back) / React Testing Library (front) | Jest permet les tests unitaires et d'intégration.React Testing Library est recommandé par la team React pour les tests frontend. |
| Versioning | Git + GitHub |  |
| Validation des données | Joi | Pour s’assurer de la conformité des données |
| Persistance de certaines données| Jotai | Pour limiter les appels API et transférer les données d’un composant à l’autre. |

## 6. Contraintes

- Accessibilité et UI responsive
- Sécurité (vérification des contenus, protection des données)
- SEO : appliquer les bonnes pratiques visant à maximiser le référencement du projet.
- Eco-conception : optimisation des images, minification des fichiers.
- RGPD et mentions légales : mise en place des mentions légales liées au règlement général sur la protection des données (RGPD).

## 7. Évolutivité

- Filtre de recherche
- Ajout de badges ou trophées
- Intégration avec des plateformes externes (Steam, Twitch, Discord)
- Mode compétition (tournois, challenges à durée limitée)
- Système de modération collaborative (votes, signalements)

## 8. Livrables attendus

- [ ]  Page d’accueil avec présentation de GamerChallenges, challenges en cours et populaires
- [ ]  Système d’inscription et de connexion (authentification sécurisée)
- [ ]  Formulaire de création de challenge par les utilisateurs connectés
- [ ]  Page de détail d’un challenge (titre, description, règles, participations vidéo)
- [ ]  Système de soumission de participation vidéo
- [ ]  Système de vote sur les participations
- [ ]  Tableau des leaders (utilisateurs les plus actifs et votés)

## 9. Navigateurs compatibles

Chrome, Firefox, Safari, Edge. 

## 10. Liste des routes prévues

### 1. Auth
| Méthode | Route | Description |
| --- | --- | --- |
| POST | /auth/register  | Inscription utilisateur |
| POST | /auth/login | Connexion utilisateur |
| GET | /auth/me | Récupérer les infos du user connecté |
| POST | /auth/logout | Déconnexion |

### 1. Users
| Méthode | Route | Description |
| --- | --- | --- |
| GET | /users/:id | Voir le profil public d’un user |
| GET | /leaderboard  | Voir le classement des utilisateurs |
| PATCH | /users/:id | Modifier le profil utilisateur |

### 1. Challenges
| Méthode | Route | Description |
| --- | --- | --- |
| GET | /challenges | Liste des challenges (optionnel : pagination, tri) |
| GET | /challenges/:id | Détail d’un challenge |
| POST | /challenges | Créer un nouveau challenge (auth) |
| POST | /challenges/:id/vote | Voter pour un challenge |
| DELETE | /challenges/:id/vote | Retirer son vote |

### 1. Participations
| Méthode | Route | Description |
| --- | --- | --- |
| POST | /challenges/:id/participations | Soumettre une vidéo |
| GET | /challenges/:id/participations | Lister les participations d’un challenge |
| GET | /participations/:id  | Détail d’une participation |
| DELETE | participations/:id | Supprimer sa participation  |
| POST | /participations/:id/vote | Voter pour une participation (auth) |
| DELETE | /participations/:id/vote | Retirer son vote |