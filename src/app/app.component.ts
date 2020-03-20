import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) {
}

  ngOnInit(): void {
  }
  title = 'covid19-tracker';

  showWorldData() {
    this.router.navigate(['']);
  }
}
