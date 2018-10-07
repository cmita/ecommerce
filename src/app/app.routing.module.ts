import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';

export const ROUTES: Routes = [{
  path: 'home',
  component: AppComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'navigation',
  component: NavigationComponent
}];
