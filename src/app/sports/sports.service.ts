import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SportsService {
  constructor(private http: HttpClient) {}

  getSports() {
    return this.http.get(
      environment.url + environment.endpoints.sport.getAllSports
    );
  }

  getSportById(id: number) {
    return this.http.get(
      environment.url + environment.endpoints.sport.getSportById + id
    );
  }

  getSportIdByName(sportName: string) {
    return this.http.get(
      environment.url +
        environment.endpoints.sport.getSportIdByName +
        sportName,
      {}
    );
  }

  insertSport(name: string) {
    return this.http.post(
      environment.url + environment.endpoints.sport.insertSport,
      { name }
    );
  }

  updateSport(name: string, id: number) {
    return this.http.put(
      environment.url + environment.endpoints.sport.updateSport + id,
      { name }
    );
  }

  deleteSport(sportsId: number) {
    return this.http.delete(
      environment.url + environment.endpoints.sport.deleteSport + sportsId
    );
  }
}
