import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import {FormsModule} from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeroeComponent } from './pages/hereo/hereo.component';
import { HeroesComponent } from './pages/hereos/hereos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
