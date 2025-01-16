import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component'; // Import the correct component

const routes: Routes = [
  {
		path: '',
		component: MainPageComponent, // Use the correct component here
		runGuardsAndResolvers: 'always'
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
