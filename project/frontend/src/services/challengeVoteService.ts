import type { IChallengeVote } from "@/@types/IChallengeVote";
import  api  from "@/lib/axios";

const challengeVoteService = {
    
    async getAllChallengeVote() {
        const challengeVoteResponse = await api.get('/challenge/votes');
        return challengeVoteResponse.data as IChallengeVote[];
    },
    
    async getChallengeVote(id: string) {
        const challengeVoteResponse = await api.get(`/challenge/vote');/${id}`);
        return challengeVoteResponse.data as IChallengeVote;
    
    },

    async createChallengeVote(challengeVote: IChallengeVote) {
        const challengeVoteResponse = await api.post('/challenge/votes', challengeVote);
        return challengeVoteResponse.data as IChallengeVote;
    },

    async deletechallenge(vote_id: string, user_id: string) {
        const challengeVoteResponse = await api.delete(`/challenge/vote');/${vote_id}/${user_id}`);
        return challengeVoteResponse.data as IChallengeVote;
    }
}

export default challengeVoteService;