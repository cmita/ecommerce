import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Input() types = [];

  @Output() valueEvent: EventEmitter<any>;

  @ViewChild("MyForm") myform;

  constructor() {
    this.valueEvent = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  public submitBtnClicked() {
    console.log(this.myform);
    this.valueEvent.emit({
      name: "abc",
      price: 123
    });

  }
}
