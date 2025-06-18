import { IChallenge } from "@/@types/IChallenge";
import type { IGame, IGameFormData } from "@/@types/IGame";
import api from "@/lib/axios";

const gameService = {
  /**
   * Récupère la liste complète des jeux.
   * @returns {Promise<IGame[]>} Une promesse contenant un tableau d'objets `IGame`.
   */
  async getAllGames() {
    const gameResponse = await api.get("/games");
    return gameResponse.data as IGame[];
  },

  /**
   * Récupère les jeux les plus populaires, classés par nombre de votes.
   * @returns {Promise<IGame[]>} Une promesse contenant un tableau d'objets `IGame` populaires.
   */
  async getMostPopularGames() {
    const gameResponse = await api.get("/games/popular");
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
   * Récupère la liste des challenges associés à un jeu spécifique.
   *
   * @async
   * @function
   * @param {string} id - L'identifiant unique du jeu dont on souhaite récupérer les challenges.
   * @returns {Promise<IChallenge[]>} Une promesse résolue avec un tableau de challenges (`IChallenge[]`).
   * @throws {Error} Si la requête réseau échoue ou retourne une erreur.
   */
  async getChallengesByGameId(id: string) {
    const challengeResponse = await api.get(`/games/challenges/${id}`);
    return challengeResponse.data as IChallenge[];
  },

  /**
   * Crée un nouveau jeu à partir des données fournies.
   * @param {IGame} game - Les données du jeu à créer.
   * @returns {Promise<IGameFormData>} Une promesse contenant le jeu nouvellement créé.
   */
  async createGame(game: IGameFormData) {
    const gameResponse = await api.post("/games", game);
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
  },
};

export default gameService;
