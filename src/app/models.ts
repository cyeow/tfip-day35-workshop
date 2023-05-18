export interface Game {
    gameId: string;
    name: string;
    year: number;
    ranking: number;
    users_rated: number;
    url: string;
    image: string;
}

export interface GamesResponse {
    games: Game[];
    offset: number;
    limit: number;
    timeStamp: string;
}