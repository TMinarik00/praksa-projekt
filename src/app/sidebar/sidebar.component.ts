import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICountry } from '../drzave/drzave.interface';
import { DrzaveService } from '../drzave/drzave.service';
import { ITeam } from '../timovi/timovi.interface';
import { TimoviService } from '../timovi/timovi.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  countries: ICountry[] = [];
  route: any;
  team!: ITeam;
  selected: boolean = false;

  constructor(
    private drzaveService: DrzaveService,
    private timoviService: TimoviService
  ) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.drzaveService.getCountries().subscribe((res: any) => {
      this.countries = res;
      console.log('drzave: ', this.countries);
    });
  }

  filter(country: ICountry) {
    this.timoviService.getCountryId.emit(country.countryId);
  }
}
