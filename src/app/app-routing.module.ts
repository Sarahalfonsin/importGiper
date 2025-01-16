import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MercadoLibreComponent } from './pages/mercado-libre/mercado-libre.component';

const routes: Routes = [
  {
		path:'',
		runGuardsAndResolvers: 'always',
		loadChildren: () =>
			import('./pages/main-page/main-page.module').then(m => m.MainPageModule),
	},
  {
    path:'meli',
    component:MercadoLibreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
