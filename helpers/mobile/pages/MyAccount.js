'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // locators
    buttons: {
        accountStatementButton: '[id="page1"] [onclick*="account/statement"]',
    },

    // methods
};
