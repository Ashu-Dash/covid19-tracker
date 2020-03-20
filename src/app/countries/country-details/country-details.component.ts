import { Component, OnInit } from '@angular/core';
import { Country } from '../country.model';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  country: Country;
  name: string;

  constructor(private countryService: CountryService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.name = params['country'];
        this.country = this.countryService.getCountry(this.name);
        this.chartDatasets = [
          {
            data: [this.country.cases, this.country.active, this.country.recovered, this.country.deaths],
            label: this.country.country
          }
        ];
      }
    );
  }

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [];

  public chartLabels: Array<any> = ['Cases', 'Active', 'Recovered', 'Deaths'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255,99,132,1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

}
