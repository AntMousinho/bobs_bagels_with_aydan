class Basket {
    constructor(capacity = 2) {
        this._items = []
        this._capacity = capacity;
        this._subtotal = 0;
    }

    get items() {
        return this._items;
    }

    get subtotal() {
        return this._subtotal;
    }

    isFull() {
        return this.items.length >= this._capacity;
    }



    addItem(item) {
        if(!this.isFull()) {
            if(this._items.includes(item)) {
                return `${item.name} is already in basket, cannot be added again`
            }else {
                this._items.push(item);
                this._subtotal += item.price;
                return `${item.name} - ${item.price} - added to basket`;
            }
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