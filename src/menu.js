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


    printMenu() {
        if(this._menuItems.length === 0){
            return `Sorry! There are no items on the menu`;
        }
        
        let output = `${this._name.toUpperCase()} MENU`;
        this._menuItems.forEach(item => {
            output += `\n${item.SKU} - ${item.name} - ${item.price}`;
        })
        return output;
    }
}

module.exports = Menu;