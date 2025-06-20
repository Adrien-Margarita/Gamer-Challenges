import type { IUser } from "@/@types/IAuth";
import { IMostVotedPlayer } from "@/@types/IPlayer";
import api from "@/lib/axios";
import { logger } from "@/utils/logger";

const playerService = {
  /**
   * Récupère la liste complète des joueurs.
   * @returns {Promise<IUser[]>} Une promesse contenant un tableau d'objets `IUser`.
   */
  async getAllPlayers() {
    const playerResponse = await api.get("/users");
    return playerResponse.data as IUser[];
  },

  /**
   * Récupère un joueur spécifique via son identifiant.
   * @param {string} id - L'identifiant du joueur à récupérer.
   * @returns {Promise<IUser>} Une promesse contenant le joueur correspondant à l'ID.
   */
  async getPlayer(id: string) {
    const playerResponse = await api.get(`/users/${id}`);
    return playerResponse.data as IUser;
  },

  /**
   * Récupère la liste des joueurs ayant obtenu le plus de votes.
   *
   * @returns {Promise<Array<{ user_id: string, votes: number, user_pseudonym: string }>>}
   * Une promesse contenant un tableau d'objets avec l'ID de l'utilisateur, son pseudonyme, et le nombre de votes reçus.
   */
  async getMostVotedPlayers(): Promise<IMostVotedPlayer[]> {
    const response = await api.get("/participation-vote/most-voted-players");
    logger("PlayerService → getMostVotedPlayers()", response.data);
    return response.data;
  },

    /**
   * Récupère tous les challenges créés par un joueur.
   * @param {string} userId - L'identifiant du joueur.
   * @returns {Promise<any[]>} Une promesse contenant un tableau de challenges enrichis.
   */
  async getPlayerChallenges(userId: string) {
    const response = await api.get(`/users/${userId}/challenges`);
    logger("PlayerService → getPlayerChallenges()", response.data);
    return response.data;
  },

    /**
   * Récupère toutes les participations d'un joueur.
   * @param {string} userId - L'identifiant du joueur.
   * @returns {Promise<any[]>} Une promesse contenant un tableau de participations enrichies.
   */
  async getPlayerParticipations(userId: string) {
    const response = await api.get(`/users/${userId}/participations`);
    logger("PlayerService → getPlayerParticipations()", response.data);
    return response.data;
  },

  /**
   * Met à jour un joueur existant identifié par son ID.
   * @param {string} id - L'identifiant du joueur à mettre à jour.
   * @param {IUser} player - Les nouvelles données du joueur.
   * @returns {Promise<IUser>} Une promesse contenant le joueur mis à jour.
   */
  async updatePlayer(id: string, player: IUser) {
    const playerResponse = await api.put(`/users/${id}`, player);
    return playerResponse.data as IUser;
  },

  /**
   * Supprime un joueur existant via son ID.
   * @param {string} id - L'identifiant du joueur à supprimer.
   * @returns {Promise<IUser>} Une promesse contenant les données du joueur supprimé.
   */
  async deletePlayer(id: string) {
    const playerResponse = await api.delete(`/users/${id}`);
    return playerResponse.data as IUser;
  },
};

export default playerService;
