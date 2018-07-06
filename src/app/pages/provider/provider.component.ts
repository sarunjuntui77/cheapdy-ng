import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ContentService } from '../../services/content.service';
import { PromotionService } from '../../services/promotion.service';
import { CouponService } from '../../services/coupon.service';

@Component({
    selector: 'app-provider',
    templateUrl: './provider.component.html',
    styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {
    carouselList: any;
    content: any;
    promotion: any;
    relate: Array<any>;
    quotaIp: any;
    loading: boolean;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private contentService: ContentService,
        private promotionService: PromotionService,
        private couponService: CouponService,
        private authService: AuthService,
        ) { }

    ngOnInit() {
        this.getUrlParam();
    }

    clearData() {
        this.carouselList = undefined;
        this.content = undefined;
        this.promotion = undefined;
    }

    getUrlParam() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.clearData();
            const number = params['id'];
            if (number !== 'provider') {
                this.serviceContent(number);
                this.servicePromotion(number);
            } else {
                this.router.navigate(['/']);
            }
        });
    }

    serviceContent(number) {
        this.contentService.getById(number).then(data => {
            if (data.resultCode === '200') {
                this.content = data.data;
                this.titleService.setTitle(this.content.title);
                this.serviceRelate(this.content.category, number);
            }
        });
    }

    serviceRelate(category, number) {
        this.promotionService.getRelateCategory({
            category: category,
            number: number
        }).then(data => {
            if (data.resultCode === '200') {
                this.relate = data.data;
            }
        });
    }

    servicePromotion(number) {
        this.promotionService.getPromotionByProvider(number).then(data => {
            if (data.resultCode === '200') {
                this.promotion = data.data;
                this.serviceQuotaIp(this.promotion.number);
            }
        });
    }

    serviceQuotaIp(number) {
        this.couponService.checkIp(number).then(data => {
            if (data.resultCode === '200') {
                this.quotaIp = data.data;
            }
        });
    }

    ready(param) {
        if (this.content && this.promotion && this.quotaIp) {
            setTimeout(() => {
                this.loading = true;
            }, 1000);
            return true;
        }
    }
}
