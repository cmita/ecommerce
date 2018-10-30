import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getUser() {
    return this.httpClient.get('http://localhost:3000/get-user');
  }
  public createUser(userFirstname, userLastname) {
    return this.httpClient.post('https://localhost:3000/create-newuser', {
      fname: userFirstname,
      lname: userLastname
    }, {});
  }
}
