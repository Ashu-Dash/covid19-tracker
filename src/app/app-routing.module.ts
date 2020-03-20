import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldComponent } from './countries/world/world.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';
import { CountryResolverService } from './countries/countries-resolver.service';
import { WorldDataResolverService } from './countries/world-data-resolver.service';


const routes: Routes = [
  { path: '', component: WorldComponent, resolve: [CountryResolverService, WorldDataResolverService] },
  { path: ':country', component: CountryDetailsComponent, resolve: [CountryResolverService, WorldDataResolverService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
