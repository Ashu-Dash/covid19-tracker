import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldComponent } from './countries/world/world.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';
import { CountryResolverService } from './countries/countries-resolver.service';


const routes: Routes = [
  { path: '', component: WorldComponent, resolve: [CountryResolverService] },
  { path: ':country', component: CountryDetailsComponent, resolve: [CountryResolverService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
