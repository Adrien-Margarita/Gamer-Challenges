import type { IParticipationVote } from "@/@types/IParticipationVote";
import api from "@/lib/axios";

const participationVoteService = {
    async getAllParticipationsVote(){
        const participationResponse = await api.get('/participation/votes');
        return participationResponse.data as IParticipationVote[];
    },
     
    async getParticipationVote(id: string) {
        const participationVoteResponse = await api.get(`/participation/vote/${id}`);
        return participationVoteResponse.data as IParticipationVote;
    
    },

    async createParticipationVote(participationVote: IParticipationVote) {
        const participationVoteResponse = await api.post('/participation/votes', participationVote);
        return participationVoteResponse.data as IParticipationVote;
    },
    

    async deleteParticipationVote(vote_id: string, user_id: string) {
        const participationVoteResponse = await api.delete(`/participation/vote/${vote_id}/${user_id}`);
        return participationVoteResponse.data as IParticipationVote;
    }
}

export default participationVoteService