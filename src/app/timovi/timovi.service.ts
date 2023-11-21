import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IGetAllTeams, ITeam } from './timovi.interface';

@Injectable({
  providedIn: 'root',
})
export class TimoviService {
  getCountryId = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  getTeams(filters?: IGetAllTeams) {
    return this.http.post(
      environment.url + environment.endpoints.teams.getAllTeams,
      filters || {}
    );
  }

  getSports() {
    return this.http.get(
      environment.url + environment.endpoints.sport.getAllSports,
      {}
    );
  }

  getCountries() {
    return this.http.get(
      environment.url + environment.endpoints.country.getCountries,
      {}
    );
  }

  getTeamById(id: number) {
    return this.http.get(
      environment.url + environment.endpoints.teams.getTeamById + id,
      {}
    );
  }

  getTeamByCountryId(teamId: number) {
    return this.http.get(
      environment.url + environment.endpoints.teams.getTeamByCountryId + teamId,
      {}
    );
  }

  insertTeam(team: ITeam) {
    return this.http.post(
      environment.url + environment.endpoints.teams.insertTeam,
      team
    );
  }

  upsertTeam(id: Number, team: ITeam) {
    return this.http.post(
      environment.url + environment.endpoints.teams.upsertTeam + id,
      { team }
    );
  }

  upsertOneOrMoreTeams(team: ITeam) {
    return this.http.post(
      environment.url + environment.endpoints.teams.upsertOneOrMoreTeams,
      { team }
    );
  }

  insertOneOrMoreTeams(team: ITeam) {
    return this.http.post(
      environment.url + environment.endpoints.teams.insertOneOrMoreTeams,
      [team]
    );
  }

  updateTeam(id: number, updatedTeam: ITeam) {
    return this.http.put(
      environment.url + environment.endpoints.teams.updateTeam + id,
      updatedTeam
    );
  }

  deleteTeam(teamId: number) {
    return this.http.delete(
      environment.url + environment.endpoints.teams.deleteTeamById + teamId
    );
  }
}
