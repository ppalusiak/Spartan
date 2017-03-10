'use strict';

let I, homePage;

module.exports = {

    _init() {
        I = actor();

        homePage = require('../pages/Home.js');
        homePage._init();
    },

    // locators
    buttons: {
        switchButton: '[onclick="international(false)"]',
        confirmButton: '[onclick="international(true)"]'
    },

    // methods
    goToGermanOffer() {
        I.waitForVisible(this.buttons.switchButton);
        I.click(this.buttons.switchButton);
        I.waitForVisible(homePage.buttons.myAccount);
    },
    goToInternationalOffer() {
        I.waitForVisible(this.buttons.confirmButton);
        I.click(this.buttons.confirmButton);
        I.waitForVisible(homePage.buttons.myAccount);
    }
};

