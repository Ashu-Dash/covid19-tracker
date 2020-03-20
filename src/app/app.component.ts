import { Component, OnInit } from '@angular/core';
import { CountryDataService } from './countries/country-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }
  title = 'covid19-tracker';
}
