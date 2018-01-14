import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormComponent} from './03-reactive-form/reactive-form.component';
import {TemplateDrivenFormComponent} from './02-template-driven-form/template-driven-form.component';
import {SimpleFormComponent} from './01-simple-form/simple-form.component';
import {NgModule} from '@angular/core';
import {FormsRoutingModule} from './forms.routing';

@NgModule({
  declarations: [
    SimpleFormComponent, TemplateDrivenFormComponent, ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsRoutingModule
  ],
  exports: [
    // you only need to export the component if its used in a template
    // SimpleFormComponent, TemplateDrivenFormComponent, ReactiveFormComponent
  ],
  providers: [],
})
export class FormModule {}
