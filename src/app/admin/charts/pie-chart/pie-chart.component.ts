import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-pie-chart',
	templateUrl: './pie-chart.component.html',
	styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
	public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
	public pieChartData: number[] = [300, 500, 100];
	public pieChartType: ChartType = 'pie';

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
