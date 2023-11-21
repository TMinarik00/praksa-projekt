import { Component, OnInit } from '@angular/core';
import { ICountry } from '../drzave.interface';
import { DrzaveService } from '../drzave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  countries: ICountry[] = [];

  headItems = [
    { Head: 'ID', FieldName: 'countryId' },
    { Head: 'Country Name', FieldName: 'countryName' },
    { Head: 'Action', FieldName: '' },
  ];

  constructor(private drzaveService: DrzaveService, private route: Router) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.drzaveService.getCountries().subscribe((res: any) => {
      this.countries = res;
    });
  }

  getDetails(country: ICountry) {
    this.route.navigate([`/drzave/list/details/${country.countryId}`]);
  }

  onCreate() {
    this.route.navigate(['drzave/list/create']);
  }

  deleteItem(country: ICountry) {
    this.drzaveService
      .deleteCountry(country.countryId)
      .subscribe((res: any) => {
        this.countries = this.countries.filter(
          (t) => t.countryId !== country.countryId
        );
      });
  }
  // // Get countries by ID
  // this.drzaveService.getCountryById(5).subscribe((res: any) => {
  //   console.log(res);
  // });

  // // Get country ID by name
  // this.drzaveService.getCountryIdByName('ITALIJA').subscribe((res: any) => {
  //   console.log(res);
  // });

  // // Insert country
  // this.drzaveService.insertCountry('RUSSISA').subscribe((res:any)=>{
  //   console.log(res);
  // })

  // // Upsert country
  // this.drzaveService.upsertCountry('A',1).subscribe((res:any)=>{
  //   console.log(res);
  // })

  // // Upsert one or more countries
  // this.drzaveService.upsertOneOrMoreCountries().subscribe((res:any)=>{
  //   console.log(res);
  // })

  // // Insert one or more countries
  // this.drzaveService.insertOneOrMoreCountries().subscribe((res:any)=>{
  //   console.log(res);
  // })

  // // Update country
  // this.drzaveService.updateCountry('A',1).subscribe((res:any)=>{
  //   console.log(res);
  // })

  // // Delete country
  // this.drzaveService.deleteCountry(1).subscribe((res:any)=>
  // {
  //   console.log(res);
  // })
}
