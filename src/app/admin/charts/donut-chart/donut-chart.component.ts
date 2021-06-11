import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
	selector: 'app-donut-chart',
	templateUrl: './donut-chart.component.html',
	styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {
	public doughnutChartData: MultiDataSet = [
		[350, 450, 100],
		[50, 150, 120],
		[250, 130, 70],
	];
	public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	public doughnutChartType: ChartType = 'doughnut';

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
