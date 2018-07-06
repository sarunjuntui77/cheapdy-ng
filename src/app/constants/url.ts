import { environment as env } from 'environments/environment';
const prefix = env.backend;
export const BASE = 'http://localhost:7000/cheapdy-ng/';
export const API = {
    AUTH_ID: prefix + 'api/auth',
    AUTH_DATA: prefix + 'api/auth/data',
    CHECK_IP: prefix + 'api/coupon/ip/',
    GET_PROVIDERS: prefix + 'api/providers',
    REGISTER_COUPON: prefix + 'api/coupon/register',
    GET_CONTENT_PROVIDER: prefix + 'api/provider/',
    GET_PROMOTION: prefix + 'api/promotion',
    GET_CATEGORY: prefix + 'api/category',
    GET_REGION: prefix + 'api/region',
    GET_RELATE: prefix + 'api/promotion/relate',
};
