import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AttributeDirectiveComponent} from './01-attribute-directive/attribute-directive.component';
import {PipesComponent} from './02-pipe/pipes.component';
import {CustomPipeComponent} from './03-custom-pipe/custom-pipe.component';
import {StylingContainerComponent} from './04-styling/container.component';
import {DependencyInjectionComponent} from './05-dependency-injection/dependency-injection.component';
import {ContentMainComponent} from './06-content-projection/main.component';


const advancedRoutes: Routes = [

  {path: 'attribute-directive', component: AttributeDirectiveComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'custom-pipes', component: CustomPipeComponent},
  {path: 'styling', component: StylingContainerComponent},
  {path: 'dependency-injection', component: DependencyInjectionComponent},
  {path: 'content-projection', component: ContentMainComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(advancedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdvancedRoutingModule { }
