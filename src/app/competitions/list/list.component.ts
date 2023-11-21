import { Component, OnInit } from '@angular/core';
import { ICompetition } from '../competitions.interfaces';
import { CompetitionsService } from '../competitions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DrzaveService } from 'src/app/drzave/drzave.service';
import { SportsService } from 'src/app/sports/sports.service';
import { ISport } from 'src/app/sports/sports.interface';
import { ITeam } from 'src/app/timovi/timovi.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  competitions: ICompetition[] = [];
  sports: ISport[] = [];
  countries: ITeam[] = [];

  headItems = [
    { Head: 'ID', FieldName: 'id' },
    { Head: 'Competition Name', FieldName: 'naziv' },
    { Head: 'Sport Name', FieldName: 'name' },
    { Head: 'Country Name', FieldName: 'countryid' },
    { Head: 'Action', FieldName: '' },
  ];

  constructor(
    private competitionsService: CompetitionsService,
    private route: Router,
    private drzaveService: DrzaveService,
    private sportsService: SportsService
  ) {}

  ngOnInit(): void {
    this.getSports();
    this.getCountries();
    this.getCompetitions();
  }

  getCompetitions() {
    this.competitionsService.getCompetitions().subscribe((res: any) => {
      this.competitions = res;
      this.competitions.forEach((competition) => {
        competition.name = this.sports.find(
          (s) => s.sportsId === competition.sportid
        )?.name;

        competition.countryName = this.countries.find(
          (s) => s.countryid === competition.countryid
        )?.countryName;
      });
    });
  }

  getSports() {
    this.sportsService.getSports().subscribe((res: any) => {
      this.sports = res;
    });
  }

  getCountries() {
    this.drzaveService.getCountries().subscribe((res: any) => {
      this.countries = res;
    });
  }

  getDetails(competition: ICompetition) {
    this.route.navigate([`competitions/list/details/${competition.id}`]);
  }

  onCreate() {
    this.route.navigate(['competitions/list/create']);
  }

  deleteItem(competition: ICompetition) {
    this.competitionsService
      .deleteCompetition(competition.id)
      .subscribe((res: any) => {
        this.competitions = this.competitions.filter(
          (t) => t.id !== competition.id
        );
      });
  }
}
