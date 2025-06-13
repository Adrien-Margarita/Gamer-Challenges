import type { IUser } from "@/@types/IAuth";
import api from "@/lib/axios";

const playerService = {
  /**
   * Récupère la liste complète des joueurs.
   * @returns {Promise<IUser[]>} Une promesse contenant un tableau d'objets `IUser`.
   */
  async getAllPlayers() {
    const playerResponse = await api.get('/users');
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
   * Met à jour un joueur existant identifié par son ID.
   * @param {string} id - L'identifiant du joueur à mettre à jour.
   * @param {IGame} game - Les nouvelles données du joueur.
   * @returns {Promise<IGame>} Une promesse contenant le joueur mis à jour.
   */
  async updatePlayer(id: string, player: IUser) {
    const playerResponse = await api.put(`/users/${id}`, player);
    return playerResponse.data as IUser;
  },

  /**
   * Supprime un joueur existant via son ID.
   * @param {string} id - L'identifiant du joueur à supprimer.
   * @returns {Promise<IGame>} Une promesse contenant les données du joueur supprimé.
   */
  async deletePlayer(id: string) {
    const playerResponse = await api.delete(`/users/${id}`);
    return playerResponse.data as IUser;
  }
}

export default playerService;