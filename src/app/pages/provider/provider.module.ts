import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProviderComponent } from './provider.component';
import { SingleProviderModule } from '../../modules/single-provider/single-provider.module';

const routes: Routes = [
    { path: ':id', component: ProviderComponent }
];

const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [
        CommonModule,
        RoutingModule,
        SingleProviderModule,
    ],
    declarations: [ProviderComponent],
    exports: [ProviderComponent],
    bootstrap: [ProviderComponent]
})
export class ProviderModule { }
