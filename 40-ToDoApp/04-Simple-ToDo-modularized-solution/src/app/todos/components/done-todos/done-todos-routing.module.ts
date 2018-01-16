import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DoneTodosComponent} from './done-todos.component';


const appRoutes: Routes = [

    // { path: 'done', component: DoneTodosComponent},
    { path: '', component: DoneTodosComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(appRoutes);
