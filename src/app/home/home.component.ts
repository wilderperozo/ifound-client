import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showHomePage = false;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.verifyHomePage();
    this.validateHomePage();
  }

  validateHomePage() {
    this.route.events.subscribe(route => {
      this.verifyHomePage(route);
    });
  }

  verifyHomePage(route?) {
    const validateRoute = route ? route : this.route;
    this.showHomePage = validateRoute.url === '/';
  }

}
