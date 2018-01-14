import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {routing} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {First} from './first/first';
import {Second} from './second/second';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {SecondModule} from "./second/second.module";

@NgModule({
  imports     : [BrowserModule, FormsModule, HttpModule, routing, SecondModule],
  declarations: [AppComponent, First],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {}
