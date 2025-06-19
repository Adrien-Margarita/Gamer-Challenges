import { IGame } from "./IGame";
import { IParticipation, IUserPreview } from "./IParticipation";

export interface IChallenge {
  challenge_vote: any;
  challenge_id: string; // UUID
  title: string; // Titre
  description: string; // Description
  image_url: string; // Image du challenge
  rules: string; // Règles du challenge
  user_id: string; // UUID de l'utilisateur
  game_id: string; // UUID du jeu
  created_at: Date; // Date de création
  updated_at: Date; // Date de modification
  game: {
    title: string;
  };
}

export type IChallengeFormData = {
  title: string;
  description: string;
  rules: string;
  image_url: string;
  game_id: string;
  user_id: string;
};

export type IChallengeEditData = {
  game_id: string,
  challenge_id: string;
  title: string;
  description: string;
  rules: string;
  image_url: string;
};


export interface ILatestChallenge extends IChallenge {
  game: {
    title: string;
    description: string;
    image_url: string;
    platform: string;
    release_date: Date;
    category: string;
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

export interface IChallengeWithRelations extends IChallenge {
  game: IGame;
  participation: (IParticipation & {
    participation_vote: {
      participation_vote_id: string;
      user_id: string;
      participation_id: string;
    }[];
    user: IUserPreview;
  })[];
  challenge_vote: {
    challenge_vote_id: string;
    user_id: string;
    challenge_id: string;
  }[];
}