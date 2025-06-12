import type { IChallenge } from "@/@types/IChallenge";
import  api  from "@/lib/axios";

const challengeService = {
 
    async getAllChallenges() {
        const challengeResponse = await api.get('/challenges');
        return challengeResponse.data as IChallenge[];
    },

    async getChallenge(id: string) {
        const challengeResponse = await api.get(`/challenges/${id}`);
        return challengeResponse.data as IChallenge;
    },

    async createChallenge(challenge: IChallenge) {
        const challengeResponse = await api.post('/challenges', challenge);
        return challengeResponse.data as IChallenge;
    },

    async updateChallenge(id: string, challenge: IChallenge) {
        const challengeResponse = await api.put(`/challenges/${id}`, challenge);
        return challengeResponse.data as IChallenge;
    },

    async deleteChallenge(id: string) {
        const challengeResponse = await api.delete(`/challenges/${id}`);
        return challengeResponse.data as IChallenge;
    }
    
    
}

export default challengeService;