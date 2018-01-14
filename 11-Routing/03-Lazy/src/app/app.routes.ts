import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {First} from './first/first';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'first', pathMatch: 'full'},
  {path: 'first', component: First},
  {path: 'second', loadChildren:  () => System.import('./second/second.module').then(m => m.SecondModule)},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


declare var System: {
  import: (path: string) => Promise<any>;
}
