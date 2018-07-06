import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PromotionService } from '../../services/promotion.service';
import { LocalStorageService } from '../../services/local-storage.service';
@Component({
    selector: 'app-list-provider-equal',
    templateUrl: './list-provider-equal.component.html',
    styleUrls: ['./list-provider-equal.component.scss']
})
export class ListProviderEqualComponent implements OnInit {
    @Input() promotions: Array<any>;
    @Input() categories: Array<any>;
    promotionList: Array<any>;
    activeCategory: string;
    constructor(
        private router: Router,
        private promotionService: PromotionService,
        private storageService: LocalStorageService
        ) { }

    ngOnInit() {
    }

    openSinglePage($event, promotion) {
        $event.preventDefault();
        const url = 'provider/' + promotion.providerId;
        this.router.navigate([url]);
    }

}
