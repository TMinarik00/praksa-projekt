import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICountry } from '../drzave.interface';
import { DrzaveService } from '../drzave.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  countryId: number = 0;
  country!: ICountry;
  readonly: boolean = true;

  countryForm = new FormGroup({
    countryName: new FormControl(null, [Validators.required]),
  });

  constructor(
    private drzaveService: DrzaveService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.countryId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.getCountry(this.countryId);
  }

  getCountry(id: number) {
    this.drzaveService.getCountryById(id).subscribe((res: any) => {
      this.country = res;

      this.countryForm.patchValue({
        countryName: this.country.countryName,
        countryId: this.country.countryId,
      });
    });
    console.log(this.country);
  }

  toggleEdit() {
    this.readonly = false;
  }

  updateCountry() {
    this.readonly = true;
    let country: ICountry = this.countryForm.value;
    this.drzaveService
      .updateCountry(country.countryName, this.countryId)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
