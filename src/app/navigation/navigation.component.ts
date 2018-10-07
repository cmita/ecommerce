import { Component, OnInit } from '@angular/core';
import { USE_VALUE } from '../../../node_modules/@angular/core/src/di/injector';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  public appLabel = 'E-commerce';
  public searchText = 'abc';
  public itemTypes = ['clothes', 'shoes', 'accessories'];
  public items = {
    'type': 'shoes',
    'name': 'addidas',
    'details': 'expensive Shoes',
    'price': 300,
    'country': ['US', 'Canada']
  };

  public openAddItem = false;



  constructor() {
    /*setTimeout(() => {
      this.itemTypes = [...this.itemTypes, 'mobiles'];
    }, 15000);*/
  }
  onSearhTextChange(event) {
    //  console.log('event',event);
    //  console.log('new val', this.searchText);
    //  this.searchText = event.target.value;
    console.log('updated value ', this.searchText);
  }

  onBlurHandler() {
    this.searchText = '';
  }

  onKeyDownHandler(event) {
    console.log('event ', event);
  }

  addNewItemBtnClicked(event: MouseEvent) {
    console.log('add new item button is clicked');
    this.openAddItem = true;
  }

  valueEventHandler(event: any) {
    console.log(event);
    this.openAddItem = false;
  }

}
