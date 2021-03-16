const { isExportDefaultDeclaration } = require("@babel/types");

class Basket {
    constructor(itemLimit = 2) {
        this._items = []
        this._itemLimit = itemLimit;
        this._subtotal = 0;
    }

    get items() {
        return this._items;
    }

    get subtotal() {
        return this._subtotal;
    }

    isFull() {
        return this.items.length >= this._itemLimit;
    }

    addItem(item) {
        if(!this.isFull()) {
            this._items.push(item);
            this._subtotal += item.price;
            return `${item.name} - ${item.price} - added to basket`;
        } else {
            return `Cannot add ${item.name}, basket is full`;
        }
    }

    removeItem(item) {
        if (this.items.includes(item)) {
            this._items.splice(this.items.indexOf(item), 1);
            this._subtotal -= item.price;
            return `${item.name} removed from basket`;
        } else {
            return `${item.name} not found in basket`;
        }
    }

}

module.exports = Basket;