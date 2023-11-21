import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICompetition } from 'src/app/competitions/competitions.interfaces';
import { CompetitionsService } from 'src/app/competitions/competitions.service';
import { IEvent } from '../events.interface';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id!: number;
  event!: IEvent;
  competitions: ICompetition[] = [];
  readonly: boolean = true;

  eventForm = new FormGroup({
    event_name: new FormControl(null, [Validators.required]),
    event_start_time: new FormControl(null, [Validators.required]),
    competition_id: new FormControl(null, [Validators.required]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventsService: EventsService,
    private competitionsService: CompetitionsService
  ) {}

  ngOnInit(): void {
    this.getCompetitions();
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.getEvents(this.id);
  }

  getEvents(id: number) {
    this.eventsService.getEventById(id).subscribe((res: any) => {
      this.event = res;

      let competitionName = this.competitions.find(
        (s) => s.id === this.event.competition_id
      )?.naziv;

      this.eventForm.patchValue({
        event_name: this.event.event_name,
        event_start_time: this.event.event_start_time,
        competition_id: competitionName,
      });
      console.log(this.event);
    });
  }

  getCompetitions() {
    this.competitionsService.getCompetitions().subscribe((res: any) => {
      this.competitions = res;
    });
  }

  editEvent() {
    this.readonly = false;
  }

  updateEvent() {
    this.readonly = true;
    let event: IEvent = this.eventForm.value;
    this.eventsService.updateEvent(this.id, event).subscribe((res: any) => {
      console.log(res);
    });
  }
}
