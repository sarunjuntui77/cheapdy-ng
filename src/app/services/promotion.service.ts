import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { API } from '../constants/url';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class PromotionService {
    public category: string;
    constructor(
        private http: Http
        ) { }

    memoCategory(category) {
        this.category = category;
    }

    readCategory() {
        return this.category;
    }

    getDailyPromotion() {
        return this.http.get(API.GET_PROMOTION)
        .toPromise().then(response => response.json())
        .catch(this.handleError);
    }

    getPromotionByProvider(providerId) {
        return this.http.get(API.GET_PROMOTION + '/' + providerId)
        .toPromise().then(response => response.json())
        .catch(this.handleError);
    }

    getRelateCategory(body) {
        return this.http.post(API.GET_RELATE, body)
        .toPromise().then(response => response.json())
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    mapSearchParams(params: any): URLSearchParams {
        const searchParam: URLSearchParams = new URLSearchParams();
        Object.keys(params).map((key, index) => {
            searchParam.set(key.toString(), params[key]);
        });
        return searchParam;
    }

}
