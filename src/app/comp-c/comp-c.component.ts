import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent implements OnInit {

  subscribedValue = '';
  constructor(private testService: TestService) {

  }

  ngOnInit() {
    this.testService.testSubject.subscribe(
      data =>  this.subscribedValue = data
    );
  }

}
