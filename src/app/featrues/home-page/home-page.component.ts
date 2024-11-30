import { Component } from '@angular/core';
import { HeroComponent } from './home-components/hero/hero.component';
import { AboutUsComponent } from './home-components/about-us/about-us.component';
import { ReviewsComponent } from './home-components/reviews/reviews.component';
import { ContactUsComponent } from './home-components/contact-us/contact-us.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, AboutUsComponent, ReviewsComponent, ContactUsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
