import type { IGame } from "@/@types/IGame";
import  api  from "@/lib/axios";

const gameService = {
    
    async getAllGames() {
        const gameResponse = await api.get('/games');
        return gameResponse.data as IGame[];
    },
    
    async getGame(id: string) {
        const gameResponse = await api.get(`/games/${id}`);
        return gameResponse.data as IGame;
    
    },

    async createGame(game: IGame) {
        const gameResponse = await api.post('/games', game);
        return gameResponse.data as IGame;
    },

    async updateGame(id: string, game: IGame) {
        const gameResponse = await api.put(`/games/${id}`, game);
        return gameResponse.data as IGame;
    },

    async deleteGame(id: string) {
        const gameResponse = await api.delete(`/games/${id}`);
        return gameResponse.data as IGame;
    }
}

export default gameService;