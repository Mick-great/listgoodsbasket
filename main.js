const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json';


class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render()
            });
    }
}

_getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .catch(error => {
            console.log(error);
        })
}
