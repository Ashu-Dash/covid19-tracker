import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country.model';
import { map, tap } from 'rxjs/operators';
import { CountryService } from './country.service';
import { GlobalService } from './global.service';

@Injectable({ providedIn: 'root' })
export class CountryDataService {

    constructor(private http: HttpClient, private countryService: CountryService, private globalService: GlobalService) { }

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

    fetchGlobalData() {
        return this.http.get<Country>(
            "https://coronavirus-19-api.herokuapp.com/all"
        ).pipe(
            map(country => {
                return {
                    ...country
                };
            }),
            tap(country => {
                this.globalService.setData(country);
            })
        )
    }
}