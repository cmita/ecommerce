import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getUser() {
    return this.httpClient.get('http://localhost:3000/get-user');
  }

  public getGitHubUser() {
    return this.httpClient
      .get('https://api.github.com/1users/vivekkumar27june88')
      .pipe(
        delay(2000),
        map(data => {
          return {
            name: data['name'],
            username: data['login'],
            location: data['location'],
            company: data['company']
          };
        })
      );
  }

  public createUser(userFirstname, userLastname) {
    return this.httpClient.post(
      'https://localhost:3000/create-newuser',
      {
        fname: userFirstname,
        lname: userLastname
      },
      {}
    );
  }
}
