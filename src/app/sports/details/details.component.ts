import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ISport } from '../sports.interface';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  sportsId: number = 0;
  sport!: ISport;
  readonly: boolean = true;

  sportForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
  });

  constructor(
    private sportsService: SportsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sportsId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.getSport(this.sportsId);
  }

  getSport(id: number) {
    this.sportsService.getSportById(id).subscribe((res: any) => {
      this.sport = res;
      this.sportForm.patchValue({
        name: this.sport.name,
      });
    });
  }

  toggleEdit() {
    this.readonly = false;
  }

  updateSport() {
    this.readonly = true;
    let sport: ISport = this.sportForm.value;
    this.sportsService
      .updateSport(sport.name, this.sportsId)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
