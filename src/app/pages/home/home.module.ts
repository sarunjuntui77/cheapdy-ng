import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProviderEqualModule } from '../../modules/list-provider-equal/list-provider-equal.module';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent }
];
const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [
        CommonModule,
        RoutingModule,
        ListProviderEqualModule,
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    bootstrap: [HomeComponent]
})
export class HomeModule { }
