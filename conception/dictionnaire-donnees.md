# DICTIONNAIRE DE DONNEES


## Table User


| Champ | Type | Spécificités | Description |
| --- | --- | --- | --- |
| user_id | UUID | PRIMARY KEY, NOT NULL | Identifiant unique de l’utilisateur |
| pseudonym | TEXT | NOT NULL UNIQUE | Pseudonyme de l’utilisateur |
| email | TEXT | NOT NULL UNIQUE | Email de l’utilisateur |
| password_hash | TEXT | NOT NULL | Mot de passe de l’utilisateur hashé |
| avatar_url | TEXT |  | URL de l’avatar de l’utilisateur |
| created_at | TIMESTAMP | DEFAULT NOW() | Date d’inscription de l’utilisateur |
| updated_at | TIMESTAMP | DEFAULT NOW() | Date de mise à jour de l’utilisateur |


## Table Game


| Champ | Type | Spécificités | Description |
| --- | --- | --- | --- |
| game_id | UUID | PRIMARY KEY, NOT NULL | Identifiant unique du jeu |
| title | TEXT | NOT NULL UNIQUE | Titre du jeu |
| category | TEXT | NOT NULL UNIQUE | Catégorie du jeu |
| description | TEXT | NOT NULL | Description du jeu |
| release_date | TIMESTAMP |  | Date de sortie du jeu |
| image_url | TEXT |  | URL de l’image |
| platform | TEXT | NOT NULL | Nom de la plateforme (xbox, pc, playstation…) |
| created_at | TIMESTAMP | DEFAULT NOW() | Date d’inscription de l’utilisateur |
| updated_at | TIMESTAMP | DEFAULT NOW() | Date de mise à jour de l’utilisateur |


## Table Challenge


| Champ | Type | Spécificités | Description |
| --- | --- | --- | --- |
| challenge_id | UUID | PRIMARY KEY, NOT NULL | Identifiant unique du défi |
| title | TEXT | NOT NULL, UNIQUE | Titre du défi |
| description | TEXT | NOT NULL | Description du défi |
| rules | TEXT | NOT NULL | Règles du défi |
| user_id | UUID | FOREIGN KEY, NOT NULL | Clé étrangère vers user_id |
| game_id | UUID | FOREIGN KEY, NOT NULL | Clé étrangère vers game_id |
| created_at | TIMESTAMP | DEFAULT NOW() | Date de création du défi |
| updated_at | TIMESTAMP | DEFAULT NOW() | Date de modification du défi |


## Table Participation


| Champ | Type | Spécificités | Description |
| --- | --- | --- | --- |
| participation_id | UUID | PRIMARY KEY, NOT NULL | Identifiant unique de la participation |
| user_id | UUID | FOREIGN KEY, NOT NULL | Clé étrangère vers user_id |
| video_url | TEXT |  | URL de la vidéo |
| image_url | TEXT |  | URL de l’image |
| description | TEXT | NOT NULL | Description de la participation |
| challenge_id | UUID | FOREIGN KEY, NOT NULL | Clé étrangère vers challenge_id |
| created_at | TIMESTAMP | DEFAULT NOW() | Date de création de la participation |
| updated_at | TIMESTAMP | DEFAULT NOW() | Date de modification de la participation |


## Table User_Participation_Vote


| Champ | Type | Spécificités | Description |
| --- | --- | --- | --- |
| participation_vote_id | UUID | PRIMARY KEY, NOT NULL | Identifiant du vote pour la participation |
| participation_id | UUID | FOREIGN KEY, NOT NULL | Clé étrangère vers participation_id |
| user_id | UUID | FOREIGN KEY, NOT NULL | Clé étrangère vers user_id |


## Table User_Challenge_Vote


| Champ | Type | Spécificités | Description |
| --- | --- | --- | --- |
| challenge_vote_id | UUID | PRIMARY KEY, NOT NULL | Identifiant du vote pour le challenge |
| challenge_id | UUID | FOREIGN KEY,  NOT NULL | Clé étrangère vers l’identifiant du challenge |
| user_id | UUID | FOREIGN KEY, NOT NULL | Clé étrangère vers l’identifiant de l’utilisateur |


## Table User_Challenge


| Champ | Type | Spécificités | Description |
| --- | --- | --- | --- |
| user_id | UUID | PRIMARY KEY, NOT NULL | Clé étrangère vers user_id |
| challenge_id | UUID | PRIMARY KEY, UNSIGNED, NOT NULL | Clé étrangère vers challenge_id |