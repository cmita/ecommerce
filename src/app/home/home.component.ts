import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'st-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit () {
    this.elementRef.nativeElement.style.background = '#000';
    this.elementRef.nativeElement.style.display = 'block';


   // this.renderer.setStyle(this.elementRef.nativeElement, 'background', '#000');
  }

}
