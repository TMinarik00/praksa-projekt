import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICountry } from 'src/app/drzave/drzave.interface';
import { DrzaveService } from 'src/app/drzave/drzave.service';
import { ISport } from 'src/app/sports/sports.interface';
import { SportsService } from 'src/app/sports/sports.service';
import { ICompetition } from '../competitions.interfaces';
import { CompetitionsService } from '../competitions.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id!: number;
  competition!: ICompetition;
  sports: ISport[] = [];
  countries: ICountry[] = [];
  readonly: boolean = true;

  competitionForm = new FormGroup({
    naziv: new FormControl(null, [Validators.required]),
    sportid: new FormControl(null, [Validators.required]),
    countryid: new FormControl(null, [Validators.required]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private competitionsService: CompetitionsService,
    private sportsService: SportsService,
    private drzaveService: DrzaveService
  ) {}

  ngOnInit(): void {
    this.getSport();
    this.getCountries();
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.getCompetition(this.id);
  }

  getCompetition(id: number) {
    this.competitionsService.getCompetitionById(id).subscribe((res: any) => {
      this.competition = res;

      let sportName = this.sports.find(
        (s) => s.sportsId === this.competition.sportid
      )?.name;

      let countryName = this.countries.find(
        (s) => s.countryId === this.competition.countryid
      )?.countryName;

      this.competitionForm.patchValue({
        naziv: this.competition.naziv,
        sportid: sportName,
        countryid: countryName,
      });

      console.log(this.competition);
    });
  }

  getSport() {
    this.sportsService.getSports().subscribe((res: any) => {
      this.sports = res;
    });
  }

  getCountries() {
    this.drzaveService.getCountries().subscribe((res: any) => {
      this.countries = res;
    });
  }

  editCompetition() {
    this.readonly = false;
  }

  updateCompetition() {
    this.readonly = true;
    let competition: ICompetition = this.competitionForm.value;
    this.competitionsService
      .updateCompetition(this.id, competition)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
