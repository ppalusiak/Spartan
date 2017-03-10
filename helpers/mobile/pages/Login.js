'use strict';

let I, registrationPage;

module.exports = {

    _init() {
        I = actor();

        registrationPage = require('../pages/Registration.js');
        registrationPage._init();
    },

    // locators
    fields: {
        username: 'input[name="username"]',
        password: 'input[name="password"]'
    },
    buttons: {
        loginButton: '.submit',
        registerButton: '[onclick*="login/register"]'
    },

    // methods
    sendLoginForm(username, password) {
        I.waitForVisible(this.fields.username);
        I.fillField(this.fields.username, username);
        I.fillField(this.fields.password, password);
        I.click(this.buttons.loginButton);
    },
    goToRegistration() {
        I.click(this.buttons.registerButton);
        I.waitForVisible(registrationPage.select.country);
    }
};
