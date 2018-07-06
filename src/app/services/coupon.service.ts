import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { API } from '../constants/url';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class CouponService {

    constructor(
        private http: Http
        ) {}

    registerCoupon(body) {
        return this.http.post(API.REGISTER_COUPON, body)
        .toPromise().then(response => response.json())
        .catch(this.handleError);
    }

    checkIp(number) {
        return this.http.get(API.CHECK_IP + number)
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
