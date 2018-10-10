import { Component, OnInit } from '@angular/core';
import { USE_VALUE } from '@angular/core/src/di/injector';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public appLabel = 'E-commerce';
  public searchText = 'abc';
  public itemTypes = ['clothes', 'shoes', 'accessories'];
  public items = {
    type: 'shoes',
    name: 'addidas',
    details: 'expensive Shoes',
    price: 300,
    country: ['US', 'Canada']
  };
  public openAddItem = false;
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.data['myResolvedValue']);
  }



  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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
  gotoDashboard() {
    setTimeout(() => {
      this.router.navigate(['./dashboard', 'weekly']);
    }, 5000);
  }
}
