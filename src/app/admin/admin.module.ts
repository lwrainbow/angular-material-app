import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from '../material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './layout/side-nav-left/side-nav/side-nav.component';
import { SideNavClosedComponent } from './layout/side-nav-left/side-nav-closed/side-nav-closed.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SideNavComponent,
    SideNavClosedComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
