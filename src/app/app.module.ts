import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CountriesComponent } from './countries/countries.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';
import { CountryItemComponent } from './countries/country-list/country-item/country-item.component';
import { CountryService } from './countries/country.service';
import { WorldComponent } from './countries/world/world.component';
import { GlobalService } from './countries/global.service';
import { CountryDataService } from './countries/country-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { ScrollingModule }  from  '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryListComponent,
    CountryDetailsComponent,
    CountryItemComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [CountryService, GlobalService, CountryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
