import type { IParticipationVote } from "@/@types/IParticipationVote";
import api from "@/lib/axios";

const participationVoteService = {
  /**
   * Récupère tous les votes sur les participations.
   * @async
   * @function
   * @returns {Promise<IParticipationVote[]>} Un tableau de votes de participation (`IParticipationVote`).
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async getAllParticipationsVote() {
    const participationResponse = await api.get("/participation/votes");
    return participationResponse.data as IParticipationVote[];
  },

  /**
   * Récupère un vote spécifique sur une participation à partir de son ID.
   * @async
   * @function
   * @param {string} id - L'identifiant du vote de participation à récupérer.
   * @returns {Promise<IParticipationVote>} Le vote correspondant.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async getParticipationVote(id: string) {
    const participationVoteResponse = await api.get(
      `/participation/vote/${id}`
    );
    return participationVoteResponse.data as IParticipationVote;
  },

  /**
   * Crée un nouveau vote sur une participation.
   * @async
   * @function
   * @param {IParticipationVote} participationVote - Les données du vote à créer.
   * @returns {Promise<IParticipationVote>} Le vote nouvellement créé.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async createParticipationVote(participationVote: IParticipationVote) {
    const participationVoteResponse = await api.post(
      "/participation/votes",
      participationVote
    );
    return participationVoteResponse.data as IParticipationVote;
  },

  /**
   * Supprime un vote sur une participation, en fonction de l'ID du vote et de l'utilisateur.
   * @async
   * @function
   * @param {string} vote_id - L'identifiant du vote.
   * @param {string} user_id - L'identifiant de l'utilisateur ayant voté.
   * @returns {Promise<IParticipationVote>} Le vote supprimé.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async deleteParticipationVote(vote_id: string, user_id: string) {
    const participationVoteResponse = await api.delete(
      `/participation/vote/${vote_id}/${user_id}`
    );
    return participationVoteResponse.data as IParticipationVote;
  },
};

export default participationVoteService;
