export interface IChallenge {
  challenge_id: string; // UUID
  title: string; // Titre
  description: string; // Description
  image_url: string; //Image du challenge
  rules: string; // Règles du challenge
  user_id: string; // UUID de l'utilisateur
  game_id: string; // UUID du jeu
  created_at: Date; // Date de création
  updated_at: Date; // Date de modification
}

export interface ILatestChallenge extends IChallenge {
  game: {
    game_id: string;
    title: string;
    game_image_url: string;
  };
  votes: number;
}

export interface IPopularChallenge extends IChallenge {
  game: {
    game_id: string;
    title: string;
    game_image_url: string;
  };
  totalVotes: number;
}
