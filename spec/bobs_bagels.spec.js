const assertEquals = require('../assertEquals');
const Bagel = require('../src/bagel');
const Basket = require('../src/basket');

let bagel, userBasket, result;

// Part 1.1
// Set up
bagel = new Bagel('test1', 1.50);
userBasket = new Basket()
console.log('adding bagel to userBasket');

// // Execute
userBasket.addItem(bagel);

// // Verify
result = assertEquals(userBasket.items[0], bagel);
console.log(result);



//Part 1.2
// Set up
bagel = new Bagel('wholegrain', 2.00);
userBasket = new Basket();
console.log('removing bagel from userBasket');

// Execute
userBasket.addItem(bagel);
userBasket.removeItem(bagel);

//Verify
result = assertEquals(userBasket.items.length, 0)
console.log(result);