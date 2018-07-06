import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { API } from '../constants/url';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ContentService {

    constructor(
        private http: Http
        ) { }

    getById(id) {
        return this.http.get(API.GET_CONTENT_PROVIDER + id)
        .toPromise().then(response => response.json())
        .catch(this.handleError);
    }

    getCategories() {
        return this.http.get(API.GET_CATEGORY)
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
