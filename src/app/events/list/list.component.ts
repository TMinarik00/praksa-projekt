import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICompetition } from 'src/app/competitions/competitions.interfaces';
import { CompetitionsService } from 'src/app/competitions/competitions.service';
import { IEvent } from '../events.interface';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  events: IEvent[] = [];
  competitions: ICompetition[] = [];

  headItems = [
    { Head: 'ID', FieldName: 'event_id' },
    { Head: 'Event Name', FieldName: 'event_name' },
    { Head: 'Competition Name', FieldName: 'naziv' },
    { Head: 'Start Time', FieldName: 'event_start_time' },
    { Head: 'Action', FieldName: '' },
  ];

  constructor(
    private eventService: EventsService,
    private route: Router,
    private competitionsService: CompetitionsService
  ) {}

  ngOnInit(): void {
    this.getEvents();
    this.getCompetitions();
  }

  getEvents() {
    this.eventService.getEvents().subscribe((res: any) => {
      this.events = res;
      this.events.forEach((event) => {
        event.naziv = this.competitions.find(
          (s) => s.id === event.competition_id
        )?.naziv;
      });
    });
  }

  getCompetitions() {
    this.competitionsService.getCompetitions().subscribe((res: any) => {
      this.competitions = res;
    });
  }

  getDetails(event: IEvent) {
    this.route.navigate([`events/list/details/${event.event_id}`]);
  }

  onCreate() {
    this.route.navigate([`events/list/create`]);
  }

  deleteItem(event: IEvent) {
    this.eventService.deleteEvent(event.event_id).subscribe((res: any) => {
      this.events = this.events.filter((t) => t.event_id !== event.event_id);
    });
  }
}
