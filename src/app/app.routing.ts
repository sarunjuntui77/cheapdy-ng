import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: 'app/pages/home/home.module#HomeModule', },
    { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule', },
    { path: 'provider', loadChildren: 'app/pages/provider/provider.module#ProviderModule', }
];
