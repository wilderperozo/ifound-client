import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private URL_API = environment.API + '/post';

  constructor(private http: HttpClient) {
  }

  public list(): Observable<IPost> {
    return this.http.get<IPost>(this.URL_API);
  }
}
