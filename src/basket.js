class Basket {
    constructor() {
        this._items = []
    }

    get items() {
        return this._items;
    }

    addItem(item) {
        this._items.push(item);
    }

    removeItem(item) {
        if (this.items.includes(item)) {
            this._items.splice(this.items.indexOf(item), 1);
        } else {
            throw new Error ('Item not in basket');
        }
    }

}

module.exports = Basket;