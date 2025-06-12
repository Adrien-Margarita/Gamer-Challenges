
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