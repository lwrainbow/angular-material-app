import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule as Ng2Charts } from 'ng2-charts'

import { MaterialModule } from '../../material.module';
import { ChartsRoutingModule } from './charts-routing.module';
import { HomeComponent } from './home/home.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ExtraChartComponent } from './extra-chart/extra-chart.component';


@NgModule({
	declarations: [
		HomeComponent,
		BarChartComponent,
		DonutChartComponent,
		PieChartComponent,
		LineChartComponent,
		PolarChartComponent,
		RadarChartComponent,
		ExtraChartComponent
	],
	imports: [
		CommonModule,
		FlexLayoutModule,
		Ng2Charts,
		MaterialModule,
		ChartsRoutingModule
	]
})
export class ChartsModule { }