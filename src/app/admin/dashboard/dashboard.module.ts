import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../../material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { StatComponent } from './stat/stat.component';


@NgModule({
  declarations: [
    HomeComponent,
    StatComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
