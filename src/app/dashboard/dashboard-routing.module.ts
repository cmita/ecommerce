import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MonthlyBusinessComponent } from './monthly-business/monthly-business.component';
import { WeeklyBusinessComponent } from './weekly-business/weekly-business.component';
import { WeeklyNumberComponent } from './weekly-number/weekly-number.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'monthly', component: MonthlyBusinessComponent },
  { path: 'weekly', component: WeeklyBusinessComponent },
  { path: 'weekly/:weeknumber', component: WeeklyNumberComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
