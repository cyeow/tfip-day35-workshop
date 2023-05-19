import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Game, GamesResponse } from "./models";
import { Observable, map } from "rxjs";

@Injectable()
export class GamesService {

    // services
    http = inject(HttpClient);

    // endpoints
    BOARDGAMES_ENDPOINT = 'https://gameapi.legendory.com/games';

    getGames(pageNumber: number, limit: number): Observable<Game[]> {
        let offset = pageNumber * limit;

        let params = new HttpParams()
            .append('offset', offset)
            .append('limit', limit);

        return this.http.get<GamesResponse>(this.BOARDGAMES_ENDPOINT, { params })
            .pipe(
                map(result => result.games),
            );
    }
}