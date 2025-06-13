import type { IChallengeVote } from "@/@types/IChallengeVote";
import  api  from "@/lib/axios";

const challengeVoteService = {
    
     /**
   * Récupère tous les votes de challenges.
   * @async
   * @function
   * @returns {Promise<IChallengeVote[]>} Un tableau d'objets `IChallengeVote`.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
    async getAllChallengeVote() {
        const challengeVoteResponse = await api.get('/challenge/votes');
        return challengeVoteResponse.data as IChallengeVote[];
    },
    
     /**
   * Récupère un vote de challenge spécifique par son ID.
   * @async
   * @function
   * @param {string} id - L'ID du vote à récupérer.
   * @returns {Promise<IChallengeVote>} L'objet `IChallengeVote` correspondant.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
    async getChallengeVote(id: string) {
        const challengeVoteResponse = await api.get(`/challenge/vote');/${id}`);
        return challengeVoteResponse.data as IChallengeVote;
    
    },

     /**
   * Crée un nouveau vote pour un challenge.
   * @async
   * @function
   * @param {IChallengeVote} challengeVote - Les données du vote à créer.
   * @returns {Promise<IChallengeVote>} L'objet `IChallengeVote` créé.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
    async createChallengeVote(challengeVote: IChallengeVote) {
        const challengeVoteResponse = await api.post('/challenge/votes', challengeVote);
        return challengeVoteResponse.data as IChallengeVote;
    },

      /**
   * Supprime un vote de challenge basé sur l'ID du vote et de l'utilisateur.
   * @async
   * @function
   * @param {string} vote_id - L'identifiant du vote.
   * @param {string} user_id - L'identifiant de l'utilisateur ayant voté.
   * @returns {Promise<IChallengeVote>} L'objet `IChallengeVote` supprimé.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
    async deletechallenge(vote_id: string, user_id: string) {
        const challengeVoteResponse = await api.delete(`/challenge/vote');/${vote_id}/${user_id}`);
        return challengeVoteResponse.data as IChallengeVote;
    }
}

export default challengeVoteService;