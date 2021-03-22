const bobsPrices = require('./bobsPrices');
const Item = require('./item');
const Basket = require('./basket');


class Checkout {
    constructor(basket, prices = bobsPrices) {
        this._basket = basket;
        this._prices = prices;
    }

    total() {
        let dealsObject = this.findDeals();
        let arrayDeals = Object.entries(dealsObject);
        let subtotal = 0;
        for(let i = 0; i < arrayDeals.length; i++) {
            subtotal += this._prices[arrayDeals[i][0]] * arrayDeals[i][1];
        }
        return Math.round(subtotal * 100) / 100;
    }

    findDeals() {
        let amountObject = {
            'BGLO': 0,
            'BGLP': 0,
            'BGLE': 0,
            'COF': 0,
            'DLOB': 0,
            'DLPB': 0,
            'DLEB': 0,
            'DCOF': 0
        }
        this._basket.items.forEach(item => {
            amountObject[item.id] ++;
        });
        while(amountObject['BGLO'] >= 6) {
            amountObject['BGLO'] -= 6;
            amountObject['DLOB'] ++;
        }
        while(amountObject['BGLP'] >= 12) {
            amountObject['BGLP'] -= 12;
            amountObject['DLPB'] ++;
        }
        while(amountObject['BGLE'] >= 6) {
            amountObject['BGLE'] -= 6;
            amountObject['DLEB'] ++;
        }
        while(amountObject['BGLP'] > 0 && amountObject['COF'] > 0) {
            amountObject['BGLP'] --;
            amountObject['COF'] --;
            amountObject['DCOF'] ++
        }
        return amountObject;
    }    
}

module.exports = Checkout;