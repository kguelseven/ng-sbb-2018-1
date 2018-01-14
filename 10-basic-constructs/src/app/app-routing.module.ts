import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatabindingComponent} from './01-basics/01-databinding/databinding.component';
import {StructuralDirectivesComponent} from './01-basics/02-structural-directives/structural-directives.component';
import {ParentComponent} from './01-basics/03-nested-components/parent.component';
import {ServiceConsumerComponent} from './01-basics/05-service/service-consumer.component';
import {LifecycleParentComponent} from './01-basics/04-lifecycle/lifecycle-parent.component';
import {SimpleFormComponent} from './02-forms/01-simple-form/simple-form.component';
import {TemplateDrivenFormComponent} from './02-forms/02-template-driven-form/template-driven-form.component';
import {ReactiveFormComponent} from './02-forms/03-reactive-form/reactive-form.component';

declare const System: {
  import: (path: string) => Promise<any>;
};


const routes: Routes = [
  {path: 'databinding', component: DatabindingComponent},
  {path: 'structural-directives', component: StructuralDirectivesComponent},
  {path: 'nested-components', component: ParentComponent},
  {path: 'lifecycle', component: LifecycleParentComponent},
  {path: 'service', component: ServiceConsumerComponent},
  // Note: forms component bring their own route confiuration
  {path: 'backend', loadChildren: './03-BackendAccess/backend.module#BackendModule'},
  {path: 'routing', loadChildren: './04-routing/routing.module#RoutingModule'},
  {path: 'advanced', loadChildren: './05-advanced/advanced.module#AdvancedModule'},
  {path: 'change-tracking', loadChildren: './10-change-tracking/change-tracking.module#ChangeTrackingModule'},
  {path: '**', redirectTo: 'databinding'}, // default route
];


@NgModule({
  imports: [RouterModule.forRoot(routes /*, { enableTracing: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


