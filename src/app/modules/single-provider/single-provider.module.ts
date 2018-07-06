import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleProviderComponent } from './single-provider.component';
import { CarouselModule } from '../carousel/carousel.module';
import { ModalFormRedeemComponent } from './modal-form-redeem/modal-form-redeem.component';

@NgModule({
    imports: [
        CommonModule,
        CarouselModule,
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBtBZgnBr5SXSSMB9RgaAHZu7i-u8L338M'
        })
    ],
    declarations: [SingleProviderComponent, ModalFormRedeemComponent],
    exports: [SingleProviderComponent],
    providers: []
})
export class SingleProviderModule { }
