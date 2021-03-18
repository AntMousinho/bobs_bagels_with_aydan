const Bagel = require('./bagel');

class Menu {
    constructor(name) {
        this._name = name
        this._menuItems = [];
        this._deals = [];
    }

    addToMenu(item) {
        let includeCheck = 0
        for(let i = 0; i < this._menuItems.length; i++) {
            if(this._menuItems[i].SKU === item.SKU) includeCheck ++;
        }
        if(includeCheck) return `Menu already contains bagel type ${item.SKU}`;
        this._menuItems.push(item);
        return this._menuItems;
    }


    // printMenu() {
    //     console.log(`Menu for ${this._name}`);
    //     this._menuItems.forEach(item => {
    //         console.log(`${item.SKU} - ${item.name} - ${item.price}`);
    //     })
    // }
}

module.exports = Menu;