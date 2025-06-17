import type {
  IChallenge,
  IChallengeFormData,
  ILatestChallenge,
  IPopularChallenge,
} from "@/@types/IChallenge"
import { IParticipation } from "@/@types/IParticipation"
import api from "@/lib/axios"
import { ensureCsrfToken } from "@/lib/ensureCsrfToken"

const challengeService = {
  /**
   * Récupère la liste de tous les challenges.
   */
  async getAllChallenges() {
    const challengeResponse = await api.get("/challenges")
    return challengeResponse.data as IChallenge[]
  },

  /**
   * Récupère les challenges les plus populaires.
   */
  async getMostPopularChallenges() {
    const challengeResponse = await api.get("/challenges/popular")
    return challengeResponse.data as IPopularChallenge[]
  },

  /**
   * Récupère les derniers challenges créés.
   */
  async getLastChallenges() {
    const challengeResponse = await api.get("/challenges/latest")
    return challengeResponse.data as ILatestChallenge[]
  },

  /**
   * Récupère un challenge par ID.
   */
  async getChallenge(id: string) {
    const challengeResponse = await api.get(`/challenges/${id}`)
    return challengeResponse.data as IChallenge
  },

  /**
   * Récupère la liste des participations associés à un challenge spécifique.
   *
   * @async
   * @function
   * @param {string} id - L'identifiant unique du challenge dont on souhaite récupérer les participations.
   * @returns {Promise<IChallenge[]>} Une promesse résolue avec un tableau de participations (`IParticipation[]`).
   * @throws {Error} Si la requête réseau échoue ou retourne une erreur.
   */
  async getParticipationsByChallengeId(id: string) {
    const participationResponse = await api.get(`/participations/challenge/${id}`);
    return participationResponse.data as IParticipation[];
  },

  /**
   * Crée un nouveau challenge.
   */
  async createChallenge(challenge: IChallengeFormData) {
    await ensureCsrfToken()
    const challengeResponse = await api.post("/challenges", challenge)
    return challengeResponse.data as IChallenge
  },

  /**
   * Met à jour un challenge existant.
   */
  async updateChallenge(id: string, challenge: IChallenge) {
    await ensureCsrfToken()
    const challengeResponse = await api.put(`/challenges/${id}`, challenge)
    return challengeResponse.data as IChallenge
  },

  /**
   * Supprime un challenge par ID.
   */
  async deleteChallenge(id: string) {
    await ensureCsrfToken()
    const challengeResponse = await api.delete(`/challenges/${id}`)
    return challengeResponse.data as IChallenge
  },
}

export default challengeService
