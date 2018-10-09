import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'st-weekly-number',
  templateUrl: './weekly-number.component.html',
  styleUrls: ['./weekly-number.component.scss']
})
export class WeeklyNumberComponent implements OnInit, OnDestroy {

  weeknumber = undefined;

  constructor(private activatedRoute: ActivatedRoute) {

   }

  ngOnInit() {
    this.weeknumber = this.activatedRoute.snapshot.params['weeknumber'];
    console.dir(this.activatedRoute.params);
    console.log(this.weeknumber);

  }

  ngOnDestroy() {

  }

}
