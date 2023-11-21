import { Component, OnInit } from '@angular/core';
import { ISport, ITeam } from '../timovi.interface';
import { TimoviService } from '../timovi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DrzaveService } from 'src/app/drzave/drzave.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  teams: ITeam[] = [];
  sports: any[] = [];
  countries: any[] = [];
  countryId!: number;

  headItems = [
    { Head: 'ID', FieldName: 'teamid' },
    { Head: 'Team Name', FieldName: 'teamName' },
    { Head: 'Founded Year', FieldName: 'foundedYear' },
    { Head: 'Country Name', FieldName: 'countryName' },
    { Head: 'Sport Name', FieldName: 'sportName' },
    { Head: 'Action', FieldName: '' },
  ];

  constructor(
    private timoviService: TimoviService,
    private route: Router,
    private activedRoute: ActivatedRoute,
    private drzaveService: DrzaveService
  ) {}

  ngOnInit(): void {
    this.timoviService.getCountryId.subscribe((idd) => {
      this.countryId = idd;
      console.log('alo', this.countryId);
      this.getTeams(this.countryId);
    });
    this.getCountries();
    this.getSport();
    this.getTeams();
  }

  getDetails(team: ITeam) {
    this.route.navigate([`timovi/list/details/${team.teamid}`]); //this.activedRoute());
  }

  onCreate() {
    this.route.navigate(['timovi/list/create']);
  }

  deleteItem(team: ITeam) {
    this.timoviService.deleteTeam(team.teamid!).subscribe((res: any) => {
      this.teams = this.teams.filter((t) => t.teamid !== team.teamid);
    });
  }

  getSport() {
    this.timoviService.getSports().subscribe((res: any) => {
      this.sports = res;
      console.log('sportovi: ', this.sports);
    });
  }

  getCountries() {
    this.timoviService.getCountries().subscribe((res: any) => {
      this.countries = res;
      console.log('drzave: ', this.countries);
    });
  }

  getTeams(countryId?: number) {
    this.timoviService.getTeams({ countryId }).subscribe((res: any) => {
      this.teams = res;
      this.teams.forEach((team) => {
        team.sportName = this.sports.find(
          (s) => s.sportsId === team.sportid
        )?.name;

        team.countryName = this.countries.find(
          (s) => s.countryId === team.countryid
        )?.countryName;
      });
    });
  }

  /*   getTeamByCountry() {
    this.timoviService.getTeamByCountryId(this.countryId).subscribe((res) => {
      console.log('timovi po country-u', res);
    });
  } */

  /*  //Get Team ID
    this.timoviService.getTeamById(1).subscribe((res: any) => {
      console.log(res);
    });

    //Get Team Name By Country ID
    this.timoviService.getTeamByCountryId(3).subscribe((res: any) => {
      console.log(res);
    });

    // Insert team
    let test: any = {
      teamname: 'Hercegovina22',
      city: 'Mostar22',
      countryid: 1,
      foundedyear: 5,
      sportid: 1,
    };
    this.timoviService.insertTeam(test).subscribe((res: any) => {
      console.log(res);
    });

    ///////////////DORADI///////////////
    // Upsert teams
    this.timoviService.upsertTeam().subscribe((res: any) => {
      console.log(res);
    });

    // Upsert one or more teams
    this.timoviService.upsertOneOrMoreTeams().subscribe((res: any) => {
      console.log(res);
    });

    // Insert one or more teams
    this.timoviService.insertOneOrMoreTeams().subscribe((res: any) => {
      console.log(res);
    });

    // Update team
    // let team: ITeam = {

    // };
    // this.timoviService.updateTeam(1, team).subscribe((res: any) => {
    //  console.log(res);
    // });

    // Delete team
    this.timoviService.deleteTeam(8).subscribe((res: any) => {
      console.log('deleted', res);
    });
  } */
}
