import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ICountry } from 'src/app/drzave/drzave.interface';
import { DrzaveService } from 'src/app/drzave/drzave.service';
import { ISport } from 'src/app/sports/sports.interface';
import { SportsService } from 'src/app/sports/sports.service';
import { ICompetition } from '../competitions.interfaces';
import { CompetitionsService } from '../competitions.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  sports: ISport[] = [];
  countries: ICountry[] = [];
  competitionForm = new FormGroup({
    naziv: new FormControl(null, [Validators.required]),
    sportid: new FormControl(null, [Validators.required]),
    countryid: new FormControl(null, [Validators.required]),
  });

  constructor(
    private competitionsService: CompetitionsService,
    private drzaveService: DrzaveService,
    private sportsService: SportsService
  ) {}

  ngOnInit(): void {
    this.getCountries();
    this, this.getSports();
  }

  createCompetition() {
    let competition: ICompetition = this.competitionForm.value;

    this.competitionsService
      .insertCompetition(competition)
      .subscribe((res: any) => {
        console.log(competition);
      });
    console.log(competition);
  }

  getCountries() {
    this.drzaveService.getCountries().subscribe((res: any) => {
      this.countries = res;
    });
  }

  getSports() {
    this.sportsService.getSports().subscribe((res: any) => {
      this.sports = res;
    });
  }
}
