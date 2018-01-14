import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AdvancedRoutingModule} from './advanced-routing.module';
import {AttributeDirectiveComponent} from './01-attribute-directive/attribute-directive.component';
import {PipesComponent} from './02-pipe/pipes.component';
import {CustomPipeComponent} from './03-custom-pipe/custom-pipe.component';
import {CamelCasePipe} from './03-custom-pipe/camel-case.pipe';
import {HighlightDirective} from './01-attribute-directive/highlight.directive';
import {StylingContainerComponent} from './04-styling/container.component';
import {UnstyledComponent} from './04-styling/unstyled.component';
import {StylingComponent} from './04-styling/styling.component';
import {DependencyInjectionComponent} from './05-dependency-injection/dependency-injection.component';
import {DiChildComponent} from './05-dependency-injection/child.component';
import {ClockComponent} from './06-content-projection/clock.component';
import {BlackBoxComponent} from './06-content-projection/black-box.componen';
import {ContentMainComponent} from './06-content-projection/main.component';

@NgModule({
  declarations: [
    AttributeDirectiveComponent, HighlightDirective,
    PipesComponent,
    CustomPipeComponent, CamelCasePipe,
    StylingContainerComponent, StylingComponent, UnstyledComponent,
    DependencyInjectionComponent, DiChildComponent,
    ContentMainComponent, BlackBoxComponent, ClockComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdvancedRoutingModule
  ],
  exports: [
    // you only need to export the component if its used in a template
  ],
  providers: [],
})
export class AdvancedModule {}
