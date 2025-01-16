import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SideBarModule } from './components/side-bar/side-bar.module';
import { MercadoLibreComponent } from './pages/mercado-libre/mercado-libre.component';

@NgModule({
  declarations: [
    AppComponent,
    MercadoLibreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    SideBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
