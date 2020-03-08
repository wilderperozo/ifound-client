import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  private API_URI = environment.API + '/auth';

  constructor(private http: HttpClient) {
  }

  validate(email) {
    return this.http.post(this.API_URI + '/validate', {email});

  }
}
