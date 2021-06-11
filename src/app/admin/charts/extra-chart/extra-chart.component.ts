import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
	selector: 'app-extra-chart',
	templateUrl: './extra-chart.component.html',
	styleUrls: ['./extra-chart.component.scss']
})
export class ExtraChartComponent implements OnInit {
	@ViewChild('ExtraBarCharts') ExtraBarCharts!: ElementRef<HTMLCanvasElement>;
	@ViewChild('CustomizedBarChart') CustomizedBarChart!: ElementRef<HTMLCanvasElement>;
	@ViewChild('StatisticLineChart') StatisticLineChart!: ElementRef<HTMLCanvasElement>;

	chart!: Chart;
	selectedValue: string;

	constructor() { }

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		this.chart = new Chart(this.ExtraBarCharts.nativeElement, {
			type: 'bar',
			data: {
				labels: ['One', 'Two', 'Theree', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
				datasets: [
					{
						label: 'Revenue',
						backgroundColor: '#8e5ea2',
						borderColor: '#3did4a',
						data: [4215, 5312, 6251, 9821, 14984, 900, 12000, 6251, 1800, 500, 8540],
					}
				]
			},
			options: {
				scales: {
					xAxes: [
						{
							time: {
								unit: 'month'
							},
							gridLines: {
								display: true
							},
							ticks: {
								maxTicksLimit: 6
							}
						}
					],
					yAxes: [
						{
							ticks: {
								min: 0,
								max: 15000,
								maxTicksLimit: 100
							},
							gridLines: {
								display: true
							},
							display: true
						}
					]
				},
				legend: {
					display: true
				}
			}
		});

		this.chart = new Chart(this.CustomizedBarChart.nativeElement, {
			type: 'bar',
			data: {
				labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
				datasets: [
					{
						label: 'Revenue',
						backgroundColor: '#e8c3b9',
						borderColor: '#86594d',
						data: [4215, 5312, 6251, 9821, 14984, 900, 12000, 6251, 1800, 500, 8540],
					}
				]
			},
			options: {
				scales: {
					xAxes: [
						{
							time: {
								unit: 'month'
							},
							gridLines: {
								display: false
							},
							ticks: {
								maxTicksLimit: 6
							}
						}
					],
					yAxes: [
						{
							ticks: {
								min: 0,
								max: 15000,
								maxTicksLimit: 100
							},
							gridLines: {
								display: false
							},
							display: false
						}
					]
				},
				legend: {
					display: false
				}
			}
		});

		this.chart = new Chart(this.StatisticLineChart.nativeElement, {
			type: 'line',
			data: {
				labels: ['1500', '1600', '1700', '1750', '1800', '1850', '1900', '1950', '1999', '2050'],
				datasets: [
					{
						data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
						label: 'Total Orders',
						borderColor: '#8e5ea2',
						fill: false
					},
					{
						data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
						label: 'Total Parking Places',
						borderColor: '#3e95cd',
						fill: false
					},
					{
						data: [168, 170, 178, 190, 203, 276, 408, 647, 675, 734],
						label: 'Total Earning ',
						borderColor: '#3cba9f',
						fill: false
					},
					{
						data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
						label: 'Other',
						borderColor: '#e8c3b9',
						fill: false
					}
				]
			},
			options: {
				title: {
					display: true,
					text: 'Statistics'
				}
			}
		});
	}
}
