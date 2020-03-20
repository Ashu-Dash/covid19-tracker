import { Resolve } from '@angular/router';
import { Country } from './country.model';
import { Injectable } from '@angular/core';
import { CountryDataService } from './country-data.service';
import { CountryService } from './country.service';

@Injectable({ providedIn: 'root' })
export class CountryResolverService implements Resolve<Country[]> {

    constructor(private countryDataService: CountryDataService, private countryService: CountryService) {}

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Country[] | import("rxjs").Observable<Country[]> | Promise<Country[]> {
        const countries = this.countryService.getCountries();

        if(countries.length == 0) {
            return this.countryDataService.fetchCountries();
        } else {
            return countries;
        }
    }
    
}