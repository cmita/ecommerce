import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Renderer2,
  ViewChildren,
  QueryList
} from '@angular/core';
import { USE_VALUE } from '@angular/core/src/di/injector';
import { Router, ActivatedRoute } from '@angular/router';
import { CompAComponent } from '../comp-a/comp-a.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {
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

  @ViewChild('testInput2')
  testInput2: ElementRef;

  @ViewChildren('testInput2, testInput4')
  inputs: QueryList<ElementRef>;
  @ViewChildren(CompAComponent)
  acomps: QueryList<CompAComponent>;

  arr = [1, 2, 3, 4];

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.data['myResolvedValue']);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit >>> testInput2 >>> ', this.testInput2);
    this.renderer2.setAttribute(
      this.testInput2.nativeElement,
      'placeholder',
      'dummy placeholder'
    );

    console.log(this.acomps);

    this.acomps.changes.subscribe(data => {
      console.log(data);
      console.log(this.acomps);
    });

    setTimeout(() => {
      this.arr = [1, 2, 3, 4, 5, 6, 7];
    }, 5000);
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private renderer2: Renderer2
  ) {
    console.log('testINput2 >>> ', this.testInput2);
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
