const test = require('mousinho-testlibrary-mse-2103/src/library');
const Basket = require('../src/basket');
const Checkout = require('../src/checkout');
const Item = require('../src/item');

let userBasket, item1, item2, item3, checkout;

test.describe('Testing checkout class total', () => {
    test.it('basket.total sums the price of items', () => {
        userBasket = new Basket(3);
        item1 = new Item(1, 3.00);
        item2 = new Item(2, 2.00);
        item3 = new Item(3, 4.00);
        userBasket.addItem(item1);
        userBasket.addItem(item2);
        userBasket.addItem(item3);
        checkout = new Checkout(userBasket);
        test.expect(checkout.total()).toEqual(9.00);
    })
})
