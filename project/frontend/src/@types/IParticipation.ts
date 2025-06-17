import { IChallenge } from "./IChallenge";

export interface IUserPreview {
  user_id: string;
  pseudonym: string;
  avatar_url?: string; 
}


export interface IParticipation {
    participation_id: string,
    user_id: string,    
    video_url: string,
    image_url: string,
    description: string,
    challenge_id: string,
    created_at: Date,
    user: IUserPreview;
}

export interface IParticipationWithRelations extends IParticipation {
  challenge: Pick<IChallenge, "challenge_id" | "title" | "image_url"> & {
    game: {
      title: string;
      image_url: string;
    };
  };
  participation_vote: {
    participation_vote_id: string;
    user_id: string;
    participation_id: string;
  }[];
}