const assertEquals = require('../testCode/assertEquals');
const Bagel = require('../src/bagel');
const Basket = require('../src/basket');
const Menu = require('../src/menu');

const test = require('mousinho-testlibrary-mse-2103/src/library');

let bagel, bagel2, bagel3, bagel4, userBasket, result, bobsMenu;

// Part 1.1
// Set up
bagel = new Bagel();
userBasket = new Basket()
console.log('Test 1.1: Adding bagel to userBasket');

// // Execute
userBasket.addItem(bagel);

// // Verify
result = assertEquals(userBasket.items[0], bagel);
console.log(result);


//Part 1.2
// Set up
bagel = new Bagel();
userBasket = new Basket();
console.log('Test 1.2: Removing bagel from userBasket');

// Execute
userBasket.addItem(bagel);
userBasket.removeItem(bagel);

//Verify
result = assertEquals(userBasket.items.length, 0)
console.log(result);



//Part 2.1
//Set up
bagel2 = new Bagel();
bagel3 = new Bagel();
userBasket = new Basket();
console.log('Test 2.1: Not able to add more to the basket when it is full')

// Execute
userBasket.addItem(bagel);
userBasket.addItem(bagel2);
userBasket.addItem(bagel3);

// Verify
console.log(userBasket.addItem(bagel3));
result = assertEquals(userBasket.items.length, 2);
console.log(result);


//Part 2.2
//Set up
userBasket = new Basket(3);
bagel4 = new Bagel();
console.log("Test 2.2: Creating a bag that can hold more items")

//Execute
userBasket.addItem(bagel);
userBasket.addItem(bagel2);
userBasket.addItem(bagel3);
userBasket.addItem(bagel4);

//Verify
console.log(userBasket.addItem(bagel4));
result = assertEquals(userBasket.items.length, 3);
console.log(result);


//Part 2.3
//Setup
userBasket = new Basket();
console.log('Test 2.3: Cannot remove an item that is not in the basket')

//Execute
let output = userBasket.removeItem(bagel);

//Verify
result = assertEquals(output, `${bagel.name} not found in basket`);
console.log(result);


//Part 2.3-2
//Setup
userBasket = new Basket();
console.log(`Test 2.3-2: Adding the same item to the basket`)

//Execute
userBasket.addItem(bagel);
userBasket.addItem(bagel);

//Verify
result = assertEquals(userBasket.items.length, 1);
console.log(result);


//Part 3.1
//Setup
userBasket = new Basket();
console.log('Test 3.1: Letting the user know the price of the item before adding it');

//Execute
output = userBasket.addItem(bagel);

//Verify
result = assertEquals(output, `${bagel.name} - ${bagel.price} - added to basket`);
console.log(result);


//Part 3.2
//Setup
userBasket = new Basket(4);
console.log(`Test 3.2: Letting the user know the subtotal when going to checkout`)

//Execute
userBasket.addItem(bagel);
userBasket.addItem(bagel2);
userBasket.addItem(bagel3);
userBasket.addItem(bagel4);
userBasket.removeItem(bagel3);

//Verify
result = assertEquals(userBasket.subtotal, 1.17);
console.log(result);
