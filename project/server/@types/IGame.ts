// title TEXT NOT NULL UNIQUE, -- Titre
// category TEXT NOT NULL, -- categorie
// description TEXT NOT NULL, -- Description
// release_date TIMESTAMP NOT NULL, -- Date de sortie
// image_url TEXT, -- Image (jaquette ou fanart)
// platform TEXT NOT NULL, -- Plateforme : xbox, pc, ps5...

export interface IGame {
  game_id: string;
  title: string;
  category: string;
  description: string;
  release_date: Date;
  image_url: string;
  platform: string;
}
