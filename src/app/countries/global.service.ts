import { Injectable } from '@angular/core';
import { Country } from './country.model';
import { Subject } from 'rxjs';

@Injectable()
export class GlobalService {

    dataChanged = new Subject<Country>();

    // private world: Country = new Country("World", 244097, 0, 10005, 0, 86714, 147378, 0, 0);
    private world: Country;

    getData() {
        return this.world;
    }

    setData(world: Country) {
        this.world = world;
        this.world.country = "World";
        this.world.active = this.world.cases - this.world.recovered - this.world.deaths;
        this.dataChanged.next(this.world);
    }
}