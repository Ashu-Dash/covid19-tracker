import { Injectable } from "@angular/core";
import { Country } from './country.model';
import { CountryDataService } from './country-data.service';
import { Subject } from 'rxjs';

@Injectable()
export class CountryService {

    countriesChanged = new Subject<Country[]>();

    // private countries: Country[] = [new Country("China", 80928, 0, 3245, 0, 70420, 7263, 0, 0, "https://restcountries.eu/data/chn.svg"),
    //     new Country("USA", 13737, 0, 201, 0, 108, 13428, 0, 0, "https://restcountries.eu/data/usa.svg")
    // ];
    private countries: Country[] = [];

    getCountries() {
        return this.countries.slice();
    }

    setCountries(countries: Country[]) {
        this.countries = countries;
        this.countriesChanged.next(this.countries.slice());
    }

    getCountry(country: string) {
        return this.countries.filter(function(el) {
            return el.country.toLowerCase() == country.toLowerCase();
        })[0];
    }
}