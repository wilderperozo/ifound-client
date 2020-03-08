import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  validate(email) {
    this.authService.validate(email).subscribe(
      (user) => {
        console.log('show sign in screen ', user);
      },
      error => {
        if (error.status === 404) {
          console.log('show sign up screen');
        }
      }
    );
  }

}
