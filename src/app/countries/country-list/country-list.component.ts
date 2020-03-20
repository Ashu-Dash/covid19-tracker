import { Component, OnInit } from '@angular/core';
import { Country } from '../country.model';
import { CountryService } from '../country.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: Country[];
  subscription: Subscription;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.subscription = this.countryService.countriesChanged
      .subscribe(
        (countries: Country[]) => {
          this.countries = countries;
        }
      );
    this.countries = this.countryService.getCountries();
  }

}
