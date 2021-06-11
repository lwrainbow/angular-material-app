import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

	public barChartData: ChartDataSets[] = [
		{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
		{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
	];
	public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	public barChartOptions: any = {
		scaleShowVerticalLines: false,
		responsive: true
	}
	public barChartLegend = true;
	public barChartType: ChartType = 'bar';

	constructor() { }

	ngOnInit(): void {
	}

	chartClicked(e: any): void {
		console.log(e.active);
		console.log(e.event);
	}

	chartHovered(e: any): void {
		console.log(e);
	}
}
