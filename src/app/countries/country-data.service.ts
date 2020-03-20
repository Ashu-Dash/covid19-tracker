import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country.model';
import { map, tap } from 'rxjs/operators';
import { CountryService } from './country.service';

@Injectable({ providedIn: 'root' })
export class CountryDataService {

    constructor(private http: HttpClient, private countryService: CountryService) {}

    fetchCountries() {
        return this.http.get<Country[]>(
            "https://coronavirus-19-api.herokuapp.com/countries"
        ).pipe(
            map(countries => {
                return countries.map(country => {
                    return {
                        ...country
                    };
                })
            }),
            tap(countries => {
                this.countryService.setCountries(countries);
            })
        )
    }
}