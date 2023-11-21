import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ICompetition } from './competitions.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CompetitionsService {
  constructor(private http: HttpClient) {}

  getCompetitions() {
    return this.http.get(
      environment.url + environment.endpoints.competititon.getAllCompetitions,
      {}
    );
  }

  getCompetitionById(id: number) {
    return this.http.get(
      environment.url +
        environment.endpoints.competititon.getCompetitionById +
        id
    );
  }

  insertCompetition(competition: ICompetition) {
    return this.http.post(
      environment.url + environment.endpoints.competititon.insertCompetition,
      competition
    );
  }

  updateCompetition(id: number, competition: ICompetition) {
    return this.http.put(
      environment.url +
        environment.endpoints.competititon.updateCompetition +
        id,
      { competition }
    );
  }

  deleteCompetition(id: number) {
    return this.http.delete(
      environment.url +
        environment.endpoints.competititon.deleteCompetitionById +
        id
    );
  }
}
