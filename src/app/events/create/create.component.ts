import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICompetition } from 'src/app/competitions/competitions.interfaces';
import { CompetitionsService } from 'src/app/competitions/competitions.service';
import { IEvent } from '../events.interface';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  competitions: ICompetition[] = [];
  eventForm = new FormGroup({
    event_name: new FormControl(null, [Validators.required]),
    event_start_time: new FormControl(null, [Validators.required]),
    competition_id: new FormControl(null, [Validators.required]),
    eventkey: new FormControl(null, [Validators.required]),
  });

  constructor(
    private eventsService: EventsService,
    private competitionsService: CompetitionsService
  ) {}

  ngOnInit(): void {
    this.getCompetitions();
  }

  createEvent() {
    let event: IEvent = this.eventForm.value;

    this.eventsService.insertEvent(event).subscribe((res: any) => {
      console.log(event);
    });
    console.log(event);
  }

  getCompetitions() {
    this.competitionsService.getCompetitions().subscribe((res: any) => {
      this.competitions = res;
    });
  }
}
