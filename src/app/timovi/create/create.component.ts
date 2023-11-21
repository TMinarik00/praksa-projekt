import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICountry, ICreateTeam, ITeam, ISport } from '../timovi.interface';
import { TimoviService } from '../timovi.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  countries: ICountry[] = [];
  sports: ISport[] = [];
  teamForm = new FormGroup({
    // teamId: new FormControl(null,[Validators.required]),
    teamname: new FormControl(null, [Validators.required]),
    foundedyear: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    countryid: new FormControl(null, [Validators.required]),
    sportid: new FormControl(null, [Validators.required]),
  });

  constructor(private timoviService: TimoviService) {}

  ngOnInit(): void {
    this.getCountries();
    this.getSports();
  }

  createTeam() {
    let team: ITeam = this.teamForm.value;

    this.timoviService.insertTeam(team).subscribe((res: any) => {
      console.log(team);
    });
    console.log(team);
  }

  getCountries() {
    this.timoviService.getCountries().subscribe((res: any) => {
      this.countries = res;
    });
  }

  getSports() {
    this.timoviService.getSports().subscribe((res: any) => {
      this.sports = res;
    });
  }
}
