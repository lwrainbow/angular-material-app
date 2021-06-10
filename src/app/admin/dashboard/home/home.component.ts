import { Component, OnInit } from '@angular/core';

interface TopCard {
	imgSrc: string;
	name: string;
	description: string;
	charge: string;
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	orders_count = 10;
	reviews_count = 150;
	clicks_count = 430
	shares_count = 43;
	
	items: Array<TopCard> = [];

	constructor() { }

	ngOnInit(): void {
		this.items =[
			{
				imgSrc: 'assets/images/card-1.jpeg', 
				name: 'Understanding',
				description: 'In-depth knowledge and experience make it possible to solve problems.',
				charge: 'More'
			},
			{
				imgSrc: 'assets/images/card-2.jpeg', 
				name: 'Planing',
				description: 'Plan before doing anything. That will help to make a quality product.',
				charge: 'More'
			},
			{
				imgSrc: 'assets/images/card-3.jpeg', 
				name: 'Implementing',
				description: 'Implement quickly what we have planed. Do reviews until you satisfy.',
				charge: 'More'
			}
		]
	}

}
