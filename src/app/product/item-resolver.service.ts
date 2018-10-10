import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverService {
  constructor() {}
  resolve() {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => {
      console.log('response', response);
      return response;
    });
  }
}
