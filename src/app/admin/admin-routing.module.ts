import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { childRoutes } from './child-routes';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				redirectTo: 'dashboard'
			},
			...childRoutes
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
