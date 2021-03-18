class Menu {
    constructor(name) {
        this._name = name
        this._menuItems = [];
        this._deals = [];
    }

    addToMenu(item) {
        this._menuItems.push(item);
    }

    addDeal(item, )

    printMenu() {
        console.log(`Menu for ${this._name}`);
        this._menuItems.forEach(item => {
            console.log(`${item.SKU} - ${item.name} - ${item.price}`);
        })
    }
}
