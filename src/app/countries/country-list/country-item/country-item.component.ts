import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../country.model';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss']
})
export class CountryItemComponent implements OnInit {

  @Input() country: Country;

  ngOnInit(): void {
  }

}
