import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
	selector: 'app-polar-chart',
	templateUrl: './polar-chart.component.html',
	styleUrls: ['./polar-chart.component.scss']
})
export class PolarChartComponent implements OnInit {
	// PolarArea
	public polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
	public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
	public polarAreaLegend = true;

	public polarAreaChartType: ChartType = 'polarArea';

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
