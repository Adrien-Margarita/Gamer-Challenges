
//   challenge_id UUID PRIMARY KEY NOT NULL, -- identifiant unique du challenge
//   title TEXT NOT NULL UNIQUE, -- Titre
//   description TEXT NOT NULL, -- Description
//   rules TEXT NOT NULL, -- Règles du challenge
//   user_id UUID NOT NULL, -- Clé étrangère vers user_id
//   game_id UUID NOT NULL, -- Clé étrangère vers game_id
//   created_at TIMESTAMP DEFAULT NOW(), -- Date de création
// 	updated_at TIMESTAMP DEFAULT NOW() -- Date de modification
// );

export interface IChallenge {
  challenge_id: string; // UUID
  title: string; // Titre
  description: string; // Description
  rules: string; // Règles du challenge
  user_id: string; // UUID de l'utilisateur
  game_id: string; // UUID du jeu
  created_at: Date; // Date de création
  updated_at: Date; // Date de modification
}