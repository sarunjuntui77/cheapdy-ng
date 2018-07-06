import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../../services/promotion.service';
import { ContentService } from '../../services/content.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    categories: Array<any> = [];
    promotions: Array<any> = [];
    promotionList: Array<any>;
    activeCategory: string;
    ready: boolean;
    constructor(
        private titleService: Title,
        private promotionService: PromotionService,
        private contentService: ContentService,
        private storageService: LocalStorageService
        ) { }

    ngOnInit() {
        this.getCategories();
        this.getDailyPromotion();
        this.titleService.setTitle('Cheapdy | ถูกกว่าแค่ทัชเดียว');
    }

    all() {
        this.activeCategory = 'all';
        this.promotionList = this.promotions;
    }

    readMemo() {
        const categoryMemo = this.promotionService.readCategory();
        if (categoryMemo) {
            this.filterCategory(categoryMemo);
            this.promotionService.memoCategory(null);
        } else {
            this.all();
        }
    }

    filterCategory(category) {
        this.activeCategory = category;
        const filter = this.promotions.filter(item => item.category === category);
        this.promotionList = filter;
    }

    sync() {
        this.ready = false;
        this.promotionService.getDailyPromotion().then(data => {
            if (data.resultCode === '200') {
                this.promotions = data.data;
                this.storageService.setDailyPromotions(this.promotions);
                this.all();
                this.ready = true;
            }
        });
    }

    getCategories() {
        const storage = this.storageService.getCategories();
        if (storage) {
            this.categories = storage.data;
        } else {
            this.contentService.getCategories().then(data => {
                if (data.resultCode === '200') {
                    this.categories = data.data;
                    this.storageService.setCategories(this.categories);
                }
            });
        }

    }

    getDailyPromotion() {
        const storage = this.storageService.getDailyPromotions();
        if (storage) {
            this.promotions = storage.data;
            this.promotionList = this.promotions;
            setTimeout(() => {
                this.ready = true;
            }, 1000);
        } else {
            this.promotionService.getDailyPromotion().then(data => {
                if (data.resultCode === '200') {
                    this.promotions = data.data;
                    this.promotionList = this.promotions;
                    this.storageService.setDailyPromotions(this.promotions);
                    this.ready = true;
                }
            });
        }
    }
}
