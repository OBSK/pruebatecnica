"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(email, card_number, cvv, expiration_year, expiration_month) {
        this.email = email;
        this.card_number = card_number;
        this.cvv = cvv;
        this.expiration_year = expiration_year;
        this.expiration_month = expiration_month;
    }
    saveCard() {
        return new Promise((resolve, reject) => {
        });
    }
}
exports.Card = Card;
