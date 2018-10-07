import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'st-contact',
  template: `
    <p>
      contact works!
    </p>
  `,
  styles: [`p{background:red;}`],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
