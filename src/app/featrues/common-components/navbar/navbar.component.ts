import {
  Component,
  effect,
  ElementRef,
  HostListener,
  signal,
  viewChild,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { animate, scroll, scrollInfo } from 'motion';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  facebook = faFacebook;
  instagram = faInstagram;
  linkedin = faLinkedin;
  whatsapp = faWhatsapp;
  tiktok = faTiktok;

  navbar = viewChild.required<ElementRef>('navbar');
  navbarPosition = signal(0);
  isVisible = signal(true);
  hover = signal(false);
  activeFragment: string='';

  ngOnInit() {
      scrollInfo((scrollInfo) => {
        const position = scrollInfo.y.current;
        const velocity = scrollInfo.y.velocity;
        if (Math.abs(velocity) > 50) {
          if (position < 200 || velocity < 0) {
            this.isVisible.set(true);
          } else {
            this.isVisible.set(false);
          }
        }
      });
  }
  @HostListener('mouseenter', ['$event']) onEnter(e: MouseEvent) {
    this.showNavBar(e);
  }

  @HostListener('mouseleave', ['$event']) onLeave(e: MouseEvent) {
    this.hideNavBar(e);
  }
  private showNavBar(e: MouseEvent): void {
    this.hover.set(true);
  }
  private hideNavBar(e: MouseEvent): void {
    this.hover.set(false);
  }

  animateNav = effect(() => {
    const topPosition = this.navbarPosition() + 'px';
    animate(
      this.navbar().nativeElement,
      { top: topPosition },
      { duration: 0.2 }
    );
    let yTransition;
    if (this.isVisible() || this.hover()) {
      yTransition = 0;
    } else {
      yTransition = -45;
    }
    animate(this.navbar().nativeElement, { y: yTransition }, { duration: 0.2 });
  });
}
