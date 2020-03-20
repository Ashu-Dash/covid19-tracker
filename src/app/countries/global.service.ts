import { Injectable } from '@angular/core';
import { Country } from './country.model';

@Injectable()
export class GlobalService {

    private world: Country = new Country("World", 244097, 0, 10005, 0, 86714, 147378, 0, 0);

    getData() {
        return this.world;
    }
}