import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { WeeklyBusinessComponent } from './weekly-business/weekly-business.component';
import { MonthlyBusinessComponent } from './monthly-business/monthly-business.component';
import { WeeklyNumberComponent } from './weekly-number/weekly-number.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [
    MainComponent,
    WeeklyBusinessComponent,
    MonthlyBusinessComponent,
    WeeklyNumberComponent
  ],
  exports: [MainComponent, WeeklyBusinessComponent, MonthlyBusinessComponent, WeeklyNumberComponent]
})
export class DashboardModule {}
