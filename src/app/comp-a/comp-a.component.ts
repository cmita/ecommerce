import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

   value = 1;
  constructor(private testService: TestService) { }

  ngOnInit() {
  }

  public emitValue() {

    this.testService.testSubject.next(`${this.value++}`);
  }

}
