
'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },
    // locators
    forms: {
        personalDetails: 'form[id="editUserForm"]'
    },
    texts: {
        username: 'product_live_de'
    },

    verifyForm() {
        I.waitForElement(this.forms.personalDetails, 5);
    },
    verifyUser() {
        I.waitForText(this.texts.username, 5);
    }
};
