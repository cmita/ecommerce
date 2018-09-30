import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  public appLabel = 'E-commerce';
  public searchText = 'abc';

  constructor() {
   // setTimeout(() => {this.searchText = 'Shreemita'}, 5000);
  }
  onSearhTextChange(event) {
  //  console.log('event',event);
  //  console.log('new val', this.searchText);
  //  this.searchText = event.target.value;
    console.log('updated value ',this.searchText );
  }

  onBlurHandler() {
    this.searchText = '';
  }

  onKeyDownHandler(event) {
    console.log('event ', event);
  }

}
