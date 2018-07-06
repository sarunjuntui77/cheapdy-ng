import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CouponService } from '../../../services/coupon.service';

@Component({
    selector: 'app-modal-form-redeem',
    templateUrl: './modal-form-redeem.component.html',
    styleUrls: ['./modal-form-redeem.component.scss']
})
export class ModalFormRedeemComponent implements OnInit {
    @Input() promotion: any;
    @Input() content: any;
    @Input() quotaIp: any;
    @Output() finish: EventEmitter<any> = new EventEmitter();
    clientStatus: string;
    form: FormGroup;
    uiEvent = {
        formSubmit: false
    };
    resultCoupon: any;
    button = {
        name: '',
        disabled: true
    };
    constructor(
        private fb: FormBuilder,
        private conponService: CouponService
        ) { }

    ngOnInit() {
        this.clientStatus = '';
        this.setButtonName();
        this.createForm();
    }

    progressWidth(qty, maxQty) {
        return (qty / maxQty * 100) + '%';
    }

    createForm() {
        this.form = this.fb.group({
            email: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
            sex: new FormControl('', Validators.required),
        });
    }

    setButtonName() {
        if (!this.promotion.qty || this.promotion.qty === 0) {
            this.button.name = 'คูปองหมดแล้ว';
            this.button.disabled = true;
        } else {
            this.button.name = `เหลือคูปอง ${this.promotion.qty}`;
            this.button.disabled = false;
        }
    }

    setCouponBody() {
        return {
            email: this.form.value.email,
            name: this.form.value.name,
            sex: this.form.value.sex,
            number: this.promotion.number,
            title: this.promotion.title,
            desc: this.promotion.desc,
            id: this.content.id,
            providerName: this.content.title,
        };
    }

    onSubmit($event) {
        $event.preventDefault();
        if (this.form.status !== 'INVALID') {
            this.uiEvent.formSubmit = true;
            const body = this.setCouponBody();
            this.serviceRegisterCoupon(body);
        }
    }

    serviceRegisterCoupon(body) {
        this.conponService.registerCoupon(body).then(data => {
            if (data.resultCode) {
                this.successService(data);
            } else {
                this.failedService();
            }
        });
    }

    successService(data) {
        if (data.resultCode === '200') {
            this.promotion.qty -= 1 ;
            this.clientStatus = 'GETED';
            this.setButtonName();
        } else if (data.resultCode === '400') {
            this.clientStatus = 'MAX';
        } else if (data.resultCode === '500') {
            this.clientStatus = 'ERROR';
        }
    }

    failedService() {
    }
}
