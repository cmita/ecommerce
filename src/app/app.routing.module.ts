import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigateGuardGuard } from './navigate-guard.guard';
import { SomeResolveService } from './some-resolver.service';

export const ROUTES: Routes = [

  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'navigation',
    component: NavigationComponent,
    canActivate: [NavigateGuardGuard],
    resolve: {myResolvedValue: SomeResolveService}
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];
