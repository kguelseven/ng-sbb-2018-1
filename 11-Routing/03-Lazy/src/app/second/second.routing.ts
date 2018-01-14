import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Second} from "./second";
import {SecondDetail} from './detail/second-detail';
import {SecondMain} from './main/second-main';

export const secondRoutes: Routes = [
    {
        path: '',
        component: Second,
        children: [
            {path: '', component: SecondMain},
            {path: 'detail/:id', component: SecondDetail},
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(secondRoutes);
