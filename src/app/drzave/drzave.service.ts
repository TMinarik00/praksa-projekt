import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ICountry } from './drzave.interface';

@Injectable({
  providedIn: 'root',
})
export class DrzaveService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get(
      environment.url + environment.endpoints.country.getCountries,
      {}
    );
  }

  getCountryById(id: number) {
    return this.http.get(
      environment.url + environment.endpoints.country.getCountryById + id,
      {}
    );
  }

  getCountryIdByName(countryName: string) {
    return this.http.get(
      environment.url +
        environment.endpoints.country.getCountryIdByName +
        countryName,
      {}
    );
  }

  insertCountry(countryName: string) {
    return this.http.post(
      environment.url + environment.endpoints.country.insertCountry,
      {
        countryName,
      }
    );
  }

  upsertCountry(countryName: string, id: number) {
    return this.http.post(
      environment.url + environment.endpoints.country.upsertCountry + id,
      { countryName }
    );
  }

  upsertOneOrMoreCountries(country: ICountry) {
    return this.http.post(
      environment.url + environment.endpoints.country.upsertOneOrMoreCountires,
      { country }
    );
  }

  insertOneOrMoreCountries(country: ICountry) {
    return this.http.post(
      environment.url + environment.endpoints.country.insertOneOrMoreCountires,
      { country }
    );
  }

  updateCountry(countryName: string, id: number) {
    return this.http.put(
      environment.url + environment.endpoints.country.updateCountry + id,
      { countryName }
    );
  }

  deleteCountry(countryId: number) {
    return this.http.delete(
      environment.url +
        environment.endpoints.country.deleteCountryById +
        countryId
    );
  }
}
