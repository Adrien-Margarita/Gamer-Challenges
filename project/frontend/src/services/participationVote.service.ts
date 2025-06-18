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
  async getAllParticipationsVotes() {
    const participationResponse = await api.get("/participation-vote");
    return participationResponse.data as IParticipationVote[];
  },

  /**
   * Récupère le vote pour une participation spécifique.
   * @async
   * @function
   * @param {string} participation_id - L'identifiant de la participation concernée.
   * @returns {Promise<IParticipationVote[]>} Un tableau de votes pour cette participation.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async getParticipationVote(participation_id: string) {
    const participationVoteResponse = await api.get(
      `/participation-vote/${participation_id}`
    );
    return participationVoteResponse.data as IParticipationVote[];
  },

  /**
   * Crée un nouveau vote pour une participation donnée.
   * @async
   * @function
   * @param {string} participation_id - L'identifiant de la participation à voter.
   * @returns {Promise<IParticipationVote>} Le vote nouvellement créé.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async createParticipationVote(participation_id: string) {
    const participationVoteResponse = await api.post(
      `/participation-vote/${participation_id}`
    );
    return participationVoteResponse.data as IParticipationVote;
  },

    /**
   * Supprime le vote de l'utilisateur connecté pour une participation donnée.
   * @async
   * @function
   * @param {string} participation_id - L'identifiant de la participation dont le vote doit être supprimé.
   * @returns {Promise<IParticipationVote>} Le vote supprimé.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async deleteParticipationVote(participation_id: string) {
    const participationVoteResponse = await api.delete(
      `/participation-vote/${participation_id}`
    );
    return participationVoteResponse.data as IParticipationVote;
  },

  /**
   * Récupère le classement des joueurs ayant reçu le plus de votes.
   * @async
   * @function
   * @returns {Promise<Array<{ user: { user_id: string, pseudonym: string, avatar_url?: string }, votes: number }>>}
   * Un tableau d'utilisateurs avec leur nombre de votes reçus.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async getMostVotedPlayers() {
    const response = await api.get("/participation-vote/most-voted-players");
    return response.data as Array<{
      user: { user_id: string; pseudonym: string; avatar_url?: string };
      votes: number;
    }>;
  },
};

export default participationVoteService;
