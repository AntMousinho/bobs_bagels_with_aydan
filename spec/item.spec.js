const test = require('mousinho-testlibrary-mse-2103/src/library')
const Item = require('../src/item');

let item;

test.describe('Testing item getters', () => {
    test.it('get id returns item id', () => {
        item = new Item(1, 2.50);
        test.expect(item.id).toEqual(1);
    })

    test.it('get price returns item price', () => {
        test.expect(item.price).toEqual(2.50);
    })
})
