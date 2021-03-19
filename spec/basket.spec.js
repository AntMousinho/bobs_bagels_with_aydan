const test = require('mousinho-testlibrary-mse-2103/src/library');
const Basket = require('../src/basket');
const Item = require('../src/item');

let userBasket, item1, item2, item3;

test.describe('Adding an item to the basket', () => {
    test.it('An item has been added to basket', () => {
        userBasket = new Basket();
        item1 = new Item(1, 3.00);
        
        test.expect(userBasket.addItem(item1).length).toEqual(1);
    })

    test.it('The exact item was added to basket', () => {
        item2 = new Item(2, 2.00);
        test.expect(userBasket.addItem(item2)[1]).toEqual(item2);
    })

    test.it('cannot add item when isFull is true', () => {
        userBasket = new Basket();
        item1 = new Item(1, 3.00);
        item2 = new Item(2, 2.00);
        item3 = new Item(3, 4.00);
        userBasket.addItem(item1);
        userBasket.addItem(item2);
        test.expect(userBasket.addItem(item3)).toEqual(`Cannot add item, basket is full`);
    })

    test.it(`cannot add an item is it is already in the basket`, () => {
        userBasket = new Basket();
        item1 = new Item(1, 3.00);
        userBasket.addItem(item1);
        test.expect(userBasket.addItem(item1)).toEqual(`Cannot add item that is already in the basket`);
    })
})

test.describe(`Removing an item from the basket`, () => {
    test.it('successfully removes an item from array', () => {
        userBasket = new Basket();
        item1 = new Item(1, 3.00);
        item2 = new Item(2, 2.00);
        userBasket.addItem(item1);
        userBasket.addItem(item2);
        
        test.expect(userBasket.removeItem(item2).length).toEqual(1);
    })

    test.it('check to see if it removes the exact item from the array', () => {
        userBasket = new Basket();
        item1 = new Item(1, 3.00);
        item2 = new Item(2, 2.00);
        userBasket.addItem(item1);
        userBasket.addItem(item2);

        test.expect(userBasket.removeItem(item1).includes(item1)).toEqual(false);
    })

    test.it('cannot remove an item if it is not in the basket', () => {
        userBasket = new Basket();
        test.expect(userBasket.removeItem(item1)).toEqual(`Cannot remove an item that is not in the basket`);
    })
})

test.describe('Basket capacity and isFull tests', () => {
    test.it('get capacity returns the capacity that is set', () => {
        userBasket = new Basket(4);
        test.expect(userBasket.capacity).toEqual(4);
    })

    test.it('isFull returns false then items.length < capacity', () => {
        userBasket = new Basket();
        item1 = new Item(1, 3.00);
        userBasket.addItem(item1);
        test.expect(userBasket.isFull()).toEqual(false);
    })

    test.it('isFull returns true when items.length = capacity', () => {
        userBasket = new Basket();
        item1 = new Item(1, 3.00);
        item2 = new Item(2, 2.00);
        userBasket.addItem(item1);
        userBasket.addItem(item2);
        test.expect(userBasket.isFull()).toEqual(true);
    })
})