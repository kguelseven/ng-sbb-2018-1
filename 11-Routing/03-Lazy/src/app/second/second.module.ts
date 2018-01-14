import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core'
import {routing} from "./second.routing";
import {Second} from './second';
import {SecondMain} from "./main/second-main";
import {SecondDetail} from "./detail/second-detail";

@NgModule({
  imports     : [CommonModule, routing],
  declarations: [Second, SecondMain, SecondDetail],
  exports: [Second],
})
export class SecondModule {}
