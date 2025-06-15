import { IGame } from "./IGame";

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

export interface ILatestChallenge extends IChallenge {
  game: {
    game_id: string;
    title: string;
  };
  votes: number;
}

export interface IPopularChallenge extends IChallenge {
  game: {
    game: IGame;
    title: string;
    description: string;
    image_url: string;
    platform: string;
    release_date: Date;
    category: string;
  };
  totalVotes: number;
}
