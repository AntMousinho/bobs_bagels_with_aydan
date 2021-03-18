const assertEquals = require('../testCode/assertEquals');
const Bagel = require('../src/bagel');
const Basket = require('../src/basket');
const Menu = require('../src/menu');

const test = require('mousinho-testlibrary-mse-2103/src/library');

let bagel, bagel2, bagel3, bagel4, userBasket, result, bobsMenu;



test.describe(`Testing the Menu.addItem() function`, () => {
    test.it('check that an item has been added', () => {
        bobsMenu = new Menu('bobs bagels');
        bagel = new Bagel();

        result = bobsMenu.addToMenu(bagel);

        test.expect(result[0]).toEqual(bagel);
    })

    test.it('cannot add the same type of item twice', () => {
        bagel2 = new Bagel();
        result = bobsMenu.addToMenu(bagel2);

        test.expect(result).toEqual(`Menu already contains bagel type ${bagel2.SKU}`);
    })
})
