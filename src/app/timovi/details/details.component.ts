import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICountry, ISport, ITeam } from '../timovi.interface';
import { TimoviService } from '../timovi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  teamId: number = 0;
  team!: ITeam;
  sports: ISport[] = [];
  countries: ICountry[] = [];
  readonly: boolean = true;

  teamForm = new FormGroup({
    // teamId: new FormControl(null,[Validators.required]),
    teamName: new FormControl(null, [Validators.required]),
    foundedYear: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    countryId: new FormControl(null, [Validators.required]),
    sportid: new FormControl(null, [Validators.required]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private timoviService: TimoviService
  ) {}

  ngOnInit(): void {
    this.getSport();
    this.getCountries();
    this.teamId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.getTeam(this.teamId);
  }

  getTeam(id: number) {
    this.timoviService.getTeamById(id).subscribe((res: any) => {
      this.team = res;

      let sportName = this.sports.find(
        (s) => s.sportsId === this.team.sportid
      )?.name;

      let countryName = this.countries.find(
        (s) => s.countryId === this.team.countryid
      )?.countryName;

      this.teamForm.patchValue({
        teamName: this.team.teamName,
        foundedYear: this.team.foundedYear,
        city: this.team.city,
        countryId: countryName,
        sportid: sportName,
      });

      console.log(this.team);
    });
  }

  getSport() {
    this.timoviService.getSports().subscribe((res: any) => {
      this.sports = res;
    });
  }

  getCountries() {
    this.timoviService.getCountries().subscribe((res: any) => {
      this.countries = res;
    });
  }

  toggleEdit() {
    this.readonly = false;
  }

  updateTeam() {
    this.readonly = true;
    let team: ITeam = this.teamForm.value;
    this.timoviService.updateTeam(this.teamId, team).subscribe((res) => {
      console.log(res);
    });
  }
}
