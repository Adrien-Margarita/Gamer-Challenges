export interface IUserPreview {
  user_id: string;
  pseudonym: string;
  avatar_url?: string;
}
export interface IParticipation {
  participation_id: string;
  user_id: string;
  video_url: string;
  image_url: string;
  description: string;
  challenge_id: string;
  created_at: Date;
  user: IUserPreview;
}

export interface IParticipationFormData {
  video_url: string;
  image_url: string;
  description: string;
  // user_id: string;
  challenge_id: string;
}
