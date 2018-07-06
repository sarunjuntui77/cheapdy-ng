import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PromotionService } from '../../services/promotion.service';

@Component({
    selector: 'app-single-provider',
    templateUrl: './single-provider.component.html',
    styleUrls: ['./single-provider.component.scss']
})
export class SingleProviderComponent implements OnInit {
    redeemBox: boolean;
    carouselList: any;
    @Input() content: any;
    @Input() promotion: any;
    @Input() quotaIp: any;
    @Input() relate: Array<any>;
    clickMap: boolean;

    constructor(
        private router: Router,
        private promotionService: PromotionService
        ) { }

    ngOnInit() {
        this.clickMap = false;
        this.promotionService.memoCategory(null);
        this.carouselList = {
            id: 'carousel',
            data: this.content.gallery
        };
    }

    memo(category) {
        this.promotionService.memoCategory(category);
        this.router.navigate(['/']);
    }

    openRedeemBox() {
        this.redeemBox = true;
    }

    routing(path) {
        this.router.navigate([path]);
    }

    routingRelate(id) {
        const path = 'provider/' + id;
        this.router.navigate([path]);
        window.scrollTo(0, 0);
    }

    onSelectMap() {
        if (!this.clickMap) {
            this.clickMap = true;
        }
    }

}
