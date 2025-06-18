import type { IChallengeVote } from "@/@types/IChallengeVote";
import api from "@/lib/axios";

const BASE = "/challenge-vote";

const challengeVoteService = {
  /**
   * Récupère tous les votes de challenges.
   * @async
   * @function
   * @returns {Promise<IChallengeVote[]>} Un tableau d'objets `IChallengeVote`.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async getAllChallengeVotes() {
    const { data } = await api.get<IChallengeVote[]>(BASE);
    return data;
  },

  /**
   * Récupère l'ensemble des votes associés à un challenge.
   * @async
   * @function
   * @param {string} challenge_id - L'identifiant du challenge concerné.
   * @returns {Promise<IChallengeVote[]>} Un tableau de votes pour ce challenge.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async getChallengeVotes(challenge_id: string) {
    const { data } = await api.get<IChallengeVote[]>(`${BASE}/${challenge_id}`);
    return data;
  },

  /**
   * Crée un nouveau vote pour un challenge donné.
   * L'utilisateur est déterminé côté back via la session.
   * @async
   * @function
   * @param {string} challenge_id - L'identifiant du challenge à voter.
   * @returns {Promise<IChallengeVote>} L'objet `IChallengeVote` créé.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async createChallengeVote(challenge_id: string) {
    const { data } = await api.post<IChallengeVote>(`${BASE}/${challenge_id}`);
    return data;
  },

  /**
   * Supprime le vote de l'utilisateur connecté pour un challenge donné.
   * @async
   * @function
   * @param {string} challenge_id - L'identifiant du challenge dont le vote doit être supprimé.
   * @returns {Promise<IChallengeVote>} L'objet `IChallengeVote` supprimé.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async deleteChallengeVote(challenge_id: string) {
    const { data } = await api.delete<IChallengeVote>(`${BASE}/${challenge_id}`);
    return data;
  },
};

export default challengeVoteService;
