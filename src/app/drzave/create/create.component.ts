import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICountry } from '../drzave.interface';
import { DrzaveService } from '../drzave.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  countryForm = new FormGroup({
    countryName: new FormControl(null, [Validators.required]),
  });

  constructor(private drzaveService: DrzaveService) {}

  ngOnInit(): void {}

  createCountry(){
    let country: ICountry = this.countryForm.value;

    this.drzaveService.insertCountry(country.countryName).subscribe((res:any)=>{
      console.log(country);
    })
  }
}
