import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Country } from '../country.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {
  world: Country;
  subscription: Subscription;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.subscription = this.globalService.dataChanged.subscribe(
      (world: Country) => {
        this.world = world
      }
    );
    this.world = this.globalService.getData();
    this.chartDatasets = [
      {
        data: [this.world.cases, this.world.active, this.world.recovered, this.world.deaths],
        label: this.world.country
      }
    ];
  }

  public chartType: string = 'horizontalBar';

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
