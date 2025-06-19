import type {
  IParticipation,
  IParticipationEditData,
  IParticipationFormData,
} from "@/@types/IParticipation";
import api from "@/lib/axios";
import { ensureCsrfToken } from "@/lib/ensureCsrfToken";

const participationService = {
  /**
   * Récupère la liste de toutes les participations.
   * @async
   * @function
   * @returns {Promise<IParticipation[]>} Un tableau d'objets `IParticipation`.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async getAllParticipations() {
    const participationResponse = await api.get("/participations");
    return participationResponse.data as IParticipation[];
  },

  /**
   * Récupère une participation spécifique par son identifiant.
   * @async
   * @function
   * @param {string} id - L'ID de la participation à récupérer.
   * @returns {Promise<IParticipation>} L'objet `IParticipation` correspondant.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async getParticipation(id: string) {
    const participationResponse = await api.get(`/participations/${id}`);
    return participationResponse.data as IParticipation;
  },

  /**
   * Crée une nouvelle participation.
   * @async
   * @function
   * @param {IParticipation} participation - Les données de la participation à créer.
   * @returns {Promise<IParticipation>} L'objet `IParticipation` créé.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async createParticipation(participation: IParticipationFormData) {
    await ensureCsrfToken();
    const participationResponse = await api.post(
      "/participations",
      participation
    );
    return participationResponse.data as IParticipation;
  },

  /**
   * Met à jour une participation existante.
   * @async
   * @function
   * @param {string} id - L'ID de la participation à mettre à jour.
   * @param {IParticipation} participation - Les nouvelles données de la participation.
   * @returns {Promise<IParticipation>} L'objet `IParticipation` mis à jour.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async updateParticipation(
    participation_id: string,
    participation: Omit<IParticipationEditData, "participation_id">
  ) {
    await ensureCsrfToken();
    const participationResponse = await api.put(
      `/participations/${participation_id}`,
      participation
    );
    return participationResponse.data as IParticipationEditData;
  },

  /**
   * Supprime une participation par son identifiant.
   * @async
   * @function
   * @param {string} id - L'ID de la participation à supprimer.
   * @returns {Promise<IParticipation>} L'objet `IParticipation` supprimé.
   * @throws {Error} En cas d'échec de la requête HTTP.
   */
  async deleteParticipation(id: string) {
    const participationResponse = await api.delete(`/participations/${id}`);
    return participationResponse.data as IParticipation;
  },
};

export default participationService;
