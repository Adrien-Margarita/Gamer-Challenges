export interface IGame {
  game_id: string;
  title: string;
  category: string;
  description: string;
  release_date: Date;
  image_url: string;
  platform: string;
}

export interface IPopularGame extends IGame {
  totalVotes: number;
}
