import {NgModule} from '@angular/core'
import {routing} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {First} from './first/first';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  imports     : [BrowserModule, FormsModule, HttpModule, routing],
  declarations: [AppComponent, First],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {}
