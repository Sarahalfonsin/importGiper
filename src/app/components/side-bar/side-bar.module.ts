import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SideBarComponent } from './side-bar.component';
import { MaterialModule } from 'src/app/material-module';


@NgModule({
  declarations: [
    SideBarComponent,
  ],
  exports:[SideBarComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class SideBarModule { }
