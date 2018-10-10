import { Component, OnInit } from '@angular/core';
import { USE_VALUE } from '@angular/core/src/di/injector';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'st-item-shoes',
  templateUrl: './item-shoes.component.html',
  styleUrls: ['./item-shoes.component.scss']
})
export class ItemShoesComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log(
      'item resolved',
      this.activatedRoute.snapshot.data['itemResolvedValue']
    );
  }
}
