import { Component, OnInit } from '@angular/core';
import { childRoutes } from 'src/app/admin/child-routes';

@Component({
  selector: 'app-side-nav-closed',
  templateUrl: './side-nav-closed.component.html',
  styleUrls: ['./side-nav-closed.component.scss']
})
export class SideNavClosedComponent implements OnInit {
	showMenu = false;
	routes = childRoutes;

  constructor() { }

  ngOnInit(): void {
  }

}
