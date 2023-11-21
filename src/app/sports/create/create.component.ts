import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISport } from '../sports.interface';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  sportForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
  });

  constructor(private sportsService: SportsService) {}

  ngOnInit(): void {}

  createSport() {
    let sport: ISport = this.sportForm.value;

    this.sportsService.insertSport(sport.name).subscribe((res: any) => {
      console.log(sport);
    });
  }
}
