const assertEquals = require('../testCode/assertEquals');
const Bagel = require('../src/bagel');
const Basket = require('../src/basket');
const Menu = require('../src/menu');

const test = require('mousinho-testlibrary-mse-2103/src/library');

let bagel, bagel2, bagel3, bagel4, userBasket, result, bobsMenu;

// User Story 1
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

// User Story 2
test.describe('Testing print menu function', () => {
    test.it('Check that item in the menu is printed', () => {
        bobsMenu = new Menu('bobs bagels');
        bagel = new Bagel();
        bobsMenu.addToMenu(bagel);

        result = bobsMenu.printMenu();

        test.expect(result).toEqual(`BOBS BAGELS MENU\n${bagel.SKU} - ${bagel.name} - ${bagel.price}`)
    })

    test.it('Check that every item in the menu is printed', () => {
        bagel2 = new Bagel('BGLO')
        bagel3 = new Bagel('BGLE')

        bobsMenu.addToMenu(bagel2)
        bobsMenu.addToMenu(bagel3)

        result = bobsMenu.printMenu();
        test.expect(result).toEqual(`BOBS BAGELS MENU\n${bagel.SKU} - ${bagel.name} - ${bagel.price}\n${bagel2.SKU} - ${bagel2.name} - ${bagel2.price}\n${bagel3.SKU} - ${bagel3.name} - ${bagel3.price}`)
    })

    test.it('Doesnt print menu when it is empty', () =>{
        bobsMenu = new Menu('bobs bagels');

        result = bobsMenu.printMenu();
        
        test.expect(result).toEqual(`Sorry! There are no items on the menu`);
    })
})


// User Story 3
test.describe('Testing menu.removeItem() functnon', () => {
    test.it('Removes item from the menu', () => {
        bobsMenu = new Menu('bobs bagels');
        bagel = new Bagel();
        bagel2 = new Bagel('BGLO');
        bagel4 = new Bagel('BGLO');

        bobsMenu.addToMenu(bagel);
        bobsMenu.addToMenu(bagel2);
        test.expect(bobsMenu.removeFromMenu(bagel4).length).toEqual(1);
    })

    test.it('Cannot remove item.SKU that is not in the menu', () => {
        bagel3 = new Bagel('BGLO');
        test.expect(bobsMenu.removeFromMenu(bagel3)).toEqual(`Cannot remove item that is not on the menu`);
    })
})