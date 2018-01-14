import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {First} from './first/first';
import {Second} from './second/second';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'first', pathMatch: 'full'},
  {path: 'first', component: First},
  {path: 'second', component: Second},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
