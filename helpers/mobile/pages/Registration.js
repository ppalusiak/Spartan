'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // locators
    fields: {
        username: 'input[name="login"]',
        email: 'input[name="email"]',
        password: 'input[name="password"]'
    },
    buttons: {
        submitButton: '[type="submit"]'
    },
    texts: {
        title: 'Registration'
    },

    // methods
    checkPage() {
        I.waitForText(this.texts.title);
        I.seeElement(this.fields.username);
        I.seeElement(this.fields.email);
        I.seeElement(this.fields.password);
        I.seeElement(this.buttons.submitButton);
    },

    generateName()
    {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (let i = 0; i < 7; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    },

    randomIntFromInterval(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};
