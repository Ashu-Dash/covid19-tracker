import { Resolve } from '@angular/router';
import { Country } from './country.model';
import { Injectable } from '@angular/core';
import { CountryDataService } from './country-data.service';
import { GlobalService } from './global.service';

@Injectable({ providedIn: 'root' })
export class WorldDataResolverService implements Resolve<Country> {

    constructor(private countryDataService: CountryDataService, private globalService: GlobalService) {}

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Country | import("rxjs").Observable<Country> | Promise<Country> {
        const world = this.globalService.getData();

        if(!world) {
            return this.countryDataService.fetchGlobalData();
        } else {
            return world;
        }
    }
    
}