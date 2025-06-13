import type { IChallenge } from "@/@types/IChallenge";
import  api  from "@/lib/axios";

const challengeService = {
    
  /**
   * Récupère la liste de tous les challenges.
   * @async
   * @function
   * @returns {Promise<IChallenge[]>} Un tableau d'objets `IChallenge`.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
    async getAllChallenges() {
   
        const challengeResponse = await api.get('/challenges');
        return challengeResponse.data as IChallenge[];
    },

          /**
   * Récupère un challenge par son identifiant.
   * @async
   * @function
   * @param {string} id - L'ID du challenge à récupérer.
   * @returns {Promise<IChallenge>} L'objet `IChallenge` correspondant.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
    async getChallenge(id: string) {
   
        const challengeResponse = await api.get(`/challenges/${id}`);
        return challengeResponse.data as IChallenge;
    },

          /**
   * Crée un nouveau challenge.
   * @async
   * @function
   * @param {IChallenge} challenge - Les données du challenge à créer.
   * @returns {Promise<IChallenge>} L'objet `IChallenge` créé.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
    async createChallenge(challenge: IChallenge) {
   
        const challengeResponse = await api.post('/challenges', challenge);
        return challengeResponse.data as IChallenge;
    },

          /**
   * Met à jour un challenge existant.
   * @async
   * @function
   * @param {string} id - L'ID du challenge à mettre à jour.
   * @param {IChallenge} challenge - Les nouvelles données du challenge.
   * @returns {Promise<IChallenge>} L'objet `IChallenge` mis à jour.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
    async updateChallenge(id: string, challenge: IChallenge) {
   
        const challengeResponse = await api.put(`/challenges/${id}`, challenge);
        return challengeResponse.data as IChallenge;
    },

           /**
   * Supprime un challenge par son identifiant.
   * @async
   * @function
   * @param {string} id - L'ID du challenge à supprimer.
   * @returns {Promise<IChallenge>} L'objet `IChallenge` supprimé.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
    async deleteChallenge(id: string) {
  
        const challengeResponse = await api.delete(`/challenges/${id}`);
        return challengeResponse.data as IChallenge;
    }
    
    
}

export default challengeService;