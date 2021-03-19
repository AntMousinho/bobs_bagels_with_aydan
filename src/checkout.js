class Checkout {
    constructor(basket) {
        this._basket = basket;
    }

    total() {
        let result = this._basket.items.map(item => item.price).reduce((a, b) => a + b);
        return result
    }
}

module.exports = Checkout;