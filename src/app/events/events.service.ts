import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEvent } from './events.interface';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get(
      environment.url + environment.endpoints.event.getAllEvents,
      {}
    );
  }

  getEventById(id: number) {
    return this.http.get(
      environment.url + environment.endpoints.event.getEventById + id
    );
  }

  insertEvent(event: IEvent) {
    return this.http.post(
      environment.url + environment.endpoints.event.insertEvent,
      event
    );
  }

  updateEvent(id: number, event: IEvent) {
    return this.http.put(
      environment.url + environment.endpoints.event.updateEvent + id,

      event
    );
  }

  deleteEvent(id: number) {
    return this.http.delete(
      environment.url + environment.endpoints.event.deleteCounEvent + id
    );
  }
}
