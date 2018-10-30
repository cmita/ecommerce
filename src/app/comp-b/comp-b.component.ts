import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {
  subscribedValue = '';
  constructor(private testService: TestService) {}

  ngOnInit() {
    setTimeout(() => {
      this.testService.testSubject.subscribe(
        data => {
          console.log(data);
          this.subscribedValue = data;
        }
      );
    }, 5000);
  }
}
