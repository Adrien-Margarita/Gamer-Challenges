import { IUser } from "./IAuth";

export type IMostVotedPlayer = {
  user: IUser
  votes: number;
  index: number;
};

export interface IUserData {
  user_id: string
  pseudonym: string
  email: string
  avatar_url?: string
  role_id: number
  role: {
    role_name: string
  }  
}
