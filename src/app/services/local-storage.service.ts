export class LocalStorageService {
    constructor() {}

    getDailyPromotions() {
        const date = new Date().toLocaleDateString();
        let localData = JSON.parse(localStorage.dailyPromotions || null);
        if (localData) {
            if (localData.date !== date) {
                localData = null;
            }
        }
        return localData;
    }

    getCategories() {
        const date = new Date().toLocaleDateString();
        let localData = JSON.parse(localStorage.categories || null);
        if (localData) {
            if (localData.date !== date) {
                localData = null;
            }
        }
        return localData;
    }

    setSessionId() {
    }

    setCategories(categories) {
        const date = new Date().toLocaleDateString();
        const body = {
            date: date,
            data: categories
        };
        localStorage.setItem('categories', JSON.stringify(body));
    }

    setDailyPromotions(dailyPromotion) {
        const date = new Date().toLocaleDateString();
        const body = {
            date: date,
            data: dailyPromotion
        };
        localStorage.setItem('dailyPromotions', JSON.stringify(body));
    }
}
