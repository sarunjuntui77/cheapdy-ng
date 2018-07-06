import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';

import { AuthService } from './services/auth.service';
import { ProviderService } from './services/provider.service';
import { CouponService } from './services/coupon.service';
import { ContentService } from './services/content.service';
import { PromotionService } from './services/promotion.service';
import { LocalStorageService } from './services/local-storage.service';

import { HomeModule } from './pages/home/home.module';
import { ProviderModule } from './pages/provider/provider.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HeaderModule,
        RouterModule.forRoot(routes),
        HomeModule,
        ProviderModule
    ],
    providers: [
        AuthService,
        ProviderService,
        PromotionService,
        CouponService,
        ContentService,
        LocalStorageService
    ],
    bootstrap: [   
        AppComponent
    ]
})
export class AppModule { }
