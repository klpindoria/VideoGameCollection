import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse } from '../models/api-response.model';
import { Game } from '../models/Game/game.model';
import { GameDetail } from '../models/games-read.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(ordering: string, search?: string): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);
    
    if(search) {
      params = new HttpParams().set('ordering', ordering).set('search', search); 
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    });
  }

  getGameDetail(id: string): Observable<APIResponse<GameDetail>> {
    return this.http.get<APIResponse<GameDetail>>(`${env.BASE_URL}/games/${id}`);
  }
}
