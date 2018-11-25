import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

@Injectable()
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  public getGitHubUser() {
    return this.httpClient
      .get('https://api.github.com/users/vivekkumar27june88')
      .pipe(
        delay(2000),
        map(data => {
          return [{
            name: data['name'],
            username: data['login'],
            location: data['location'],
            company: data['company'],
            id: data['id']
          }];
        })
      );
  }
}
