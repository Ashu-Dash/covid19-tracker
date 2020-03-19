import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CountriesComponent } from './countries/countries.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';
import { CountryItemComponent } from './countries/country-list/country-item/country-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryListComponent,
    CountryDetailsComponent,
    CountryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
