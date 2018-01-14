import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule, MatSidenavModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {DatabindingComponent} from './01-basics/01-databinding/databinding.component';
import {
  StructuralDirectivesComponent,
  TestComponent
} from './01-basics/02-structural-directives/structural-directives.component';
import {ChildListComponent} from './01-basics/03-nested-components/child-list.component';
import {ChildFormComponent} from './01-basics/03-nested-components/child-form.component';
import {ParentComponent} from './01-basics/03-nested-components/parent.component';
import {ServiceConsumerComponent} from './01-basics/05-service/service-consumer.component';
import {LifecycleComponent} from './01-basics/04-lifecycle/lifecycle.component';
import {LifecycleParentComponent} from './01-basics/04-lifecycle/lifecycle-parent.component';
import {FormModule} from './02-forms/forms.module';
// import {ProviderService} from './01-basics/05-service/provider.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DatabindingComponent,
    StructuralDirectivesComponent, TestComponent,
    ParentComponent, ChildFormComponent, ChildListComponent, ServiceConsumerComponent,
    LifecycleParentComponent, LifecycleComponent,
    ServiceConsumerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Angular Material
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,

    // Feature modules (eager loaded)
    FormModule,

    // initial routing setup
    AppRoutingModule,
  ],
  providers: [],
  // providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
