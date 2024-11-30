import { Routes } from '@angular/router';
import { HomePageComponent } from './featrues/home-page/home-page.component';
import { ServicesPageComponent } from './featrues/services-page/services-page.component';
import { PageNotFoundComponent } from './featrues/common-components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home',
  },
  {
    path: 'services',
    component: ServicesPageComponent,
    title: 'Services',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title:'Error 404'
  },
];
