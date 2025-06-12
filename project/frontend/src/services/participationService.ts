import type { IParticipation } from "@/@types/IParticipation";
import  api  from "@/lib/axios";

const challengeService = {
 
    async getAllParticipations() {
        const participationResponse = await api.get('/participations');
        return participationResponse.data as IParticipation[];
    },

    async getParticipation(id: string) {
        const participationResponse = await api.get(`/participations/${id}`);
        return participationResponse.data as IParticipation;
    },

    async createParticipation(participation: IParticipation) {
        const participationResponse = await api.post('/participations', participation);
        return participationResponse.data as IParticipation;
    },

    async updateParticipation(id: string, participation: IParticipation) {
        const participationResponse = await api.put(`/participations/${id}`, participation);
        return participationResponse.data as IParticipation;
    },

    async deleteParticipation(id: string) {
        const participationResponse = await api.delete(`/participations/${id}`);
        return participationResponse.data as IParticipation;
    }
    
}

export default challengeService;