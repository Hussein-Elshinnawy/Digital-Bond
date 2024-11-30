import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {
  scroller = inject(ViewportScroller);
  ngOnInit(){
    this.scroller.scrollToPosition([0, 0]);
  }
}
