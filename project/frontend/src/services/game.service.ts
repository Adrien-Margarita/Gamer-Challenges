import type { IGame } from "@/@types/IGame";
import api from "@/lib/axios";

const gameService = {
  /**
   * Récupère la liste complète des jeux.
   * @returns {Promise<IGame[]>} Une promesse contenant un tableau d'objets `IGame`.
   */
  async getAllGames() {
    const gameResponse = await api.get('/games');
    return gameResponse.data as IGame[];
  },

  /**
   * Récupère un jeu spécifique via son identifiant.
   * @param {string} id - L'identifiant du jeu à récupérer.
   * @returns {Promise<IGame>} Une promesse contenant le jeu correspondant à l'ID.
   */
  async getGame(id: string) {
    const gameResponse = await api.get(`/games/${id}`);
    return gameResponse.data as IGame;
  },

  /**
   * Crée un nouveau jeu à partir des données fournies.
   * @param {IGame} game - Les données du jeu à créer.
   * @returns {Promise<IGame>} Une promesse contenant le jeu nouvellement créé.
   */
  async createGame(game: IGame) {
    const gameResponse = await api.post('/games', game);
    return gameResponse.data as IGame;
  },

  /**
   * Met à jour un jeu existant identifié par son ID.
   * @param {string} id - L'identifiant du jeu à mettre à jour.
   * @param {IGame} game - Les nouvelles données du jeu.
   * @returns {Promise<IGame>} Une promesse contenant le jeu mis à jour.
   */
  async updateGame(id: string, game: IGame) {
    const gameResponse = await api.put(`/games/${id}`, game);
    return gameResponse.data as IGame;
  },

  /**
   * Supprime un jeu existant via son ID.
   * @param {string} id - L'identifiant du jeu à supprimer.
   * @returns {Promise<IGame>} Une promesse contenant les données du jeu supprimé.
   */
  async deleteGame(id: string) {
    const gameResponse = await api.delete(`/games/${id}`);
    return gameResponse.data as IGame;
  }
}

export default gameService;
