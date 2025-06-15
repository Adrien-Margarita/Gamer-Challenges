import { IUser } from "./IAuth";

export type IMostVotedPlayer = {
  user: IUser
  votes: number;
  index: number;
};
