const test = require('mousinho-testlibrary-mse-2103/src/library');
const Basket = require('../src/basket');
const Checkout = require('../src/checkout');
const Item = require('../src/item');

let userBasket, item1, item2, item3, item4, item5, checkout, deal1, deal2;

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

test.describe('Checking deals and changing them for summary', () => {
    test.it('Adding 1 deal, checking that total is correct', () => {
        userBasket = new Basket();
        deal1 = new Item('DLOB', 2.49);
        item1 = new Item('BGLP', 0.39);
        userBasket.addItem(deal1);
        userBasket.addItem(item1);
        checkout = new Checkout(userBasket);
        test.expect(checkout.total()).toEqual(2.88)
    })
    
    test.it('Adding a deal and same bagel type, checking that total is correct (i.e 9 onion bagels)', () => {
        userBasket = new Basket(5);
        deal1 = new Item('DLOB', 2.49);
        item1 = new Item('BGLO', 0.49);
        item2 = new Item('BGLO', 0.49);
        item3 = new Item('BGLO', 0.49);
        userBasket.addItem(deal1)
        userBasket.addItem(item3)
        userBasket.addItem(item2)
        userBasket.addItem(item1)
        checkout = new Checkout(userBasket);
        test.expect(checkout.total()).toEqual(3.96)
    })

    test.it('Example order 1', () => {
        userBasket = new Basket(10);
        deal1 = new Item('DLPB', 3.99);
        deal2 = new Item('DLEB', 2.49);
        item1 = new Item('BGLO', 0.49);
        item2 = new Item('BGLO', 0.49);
        item3 = new Item('COF', 0.99);
        item4 = new Item('COF', 0.99);
        item5 = new Item('COF', 0.99);
        userBasket.addItem(deal1);
        userBasket.addItem(deal2);
        userBasket.addItem(item1);
        userBasket.addItem(item2);
        userBasket.addItem(item3);
        userBasket.addItem(item4);
        userBasket.addItem(item5);
        checkout = new Checkout(userBasket);
        test.expect(checkout.total()).toEqual(10.43);
    })

    test.it('Example order 2', () => {
        userBasket = new Basket(10);
        deal1 = new Item('DLPB', 3.99);
        item1 = new Item('BGLP', 0.39);
        item2 = new Item('BGLP', 0.39);
        item3 = new Item('BGLP', 0.39);
        item4 = new Item('BGLP', 0.39);
        userBasket.addItem(deal1);
        userBasket.addItem(item1);
        userBasket.addItem(item2);
        userBasket.addItem(item3);
        userBasket.addItem(item4);
        checkout = new Checkout(userBasket);
        test.expect(checkout.total()).toEqual(5.55);
    })
})
