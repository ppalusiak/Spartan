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
        noButton: '//button[@class="w50 dialog-button"]/div[.="No"]',
        yesButton: '//button[@class="w50 dialog-button"]/div[.="Yes"]'
    },
    modal: {
        cancelRegistration: '[class="window fadein"]'
    },

    // methods
    cancelRegistrationAction(confirm) {
        I.waitForVisible(this.modal.cancelRegistration);

        if (confirm) {
            I.click(this.buttons.yesButton);
        }
        else {
            I.click(this.buttons.noButton);
        }
        homePage.hideSplashScreen();
    }
};
