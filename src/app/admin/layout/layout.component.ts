import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout'
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { from, Subscription } from 'rxjs';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	@ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer;
	@ViewChild('snav') sideNav: MatSidenav;

	sideNavDefaultOpened = true;
	showFullMenu = true;
	isExpanded = true;
	closedWidth = 75;
	openedWidth = 250;
	isMobile: boolean;
	sideNavMode: 'side' | 'over';
	toolBarHeight = 64;
	private readonly mediaWatcher: Subscription;
	isDarkTheme = false;

	constructor(
		media: MediaObserver
	) { 
		this.mediaWatcher = media.media$.subscribe((change: MediaChange) => {
			if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
				if (this.sideNavDefaultOpened) {
					this.sideNavDefaultOpened = false;
					this.isExpanded = false;
				} 
				this.isMobile = true;
				this.showFullMenu = true;
				this.sideNavMode = 'over';
			} else {
				this.isMobile = false;
				this.sideNavDefaultOpened = true;
				this.sideNavMode = 'side';
			}
			if (change.mqAlias === 'xs') {
				this.toolBarHeight = 56;
			} else {
				this.toolBarHeight = 64;
			}
		})
	}

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		this.sidenavContainer.scrollable.elementScrolled().subscribe((a) => {

		})
	}

	ngOnDestry():void {
		this.mediaWatcher.unsubscribe();
	}

	onToolBarMenuToggle(): void {
		if (this.isMobile) {
			if (!this.isExpanded) {
				setTimeout(() => {
					this.sideNav.toggle();
				}, 150)
			} else {
				this.sideNav.toggle();
			}
		} else {
			if (!this.isExpanded) {
				setTimeout(() => {
					this.showFullMenu = true;
				}, 150)
			} else {
				this.showFullMenu = false;
			}
		}
		this.isExpanded = !this.isExpanded;
	}
}
