'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // locators
    fields: {
        // first step
        username: 'input[name="login"]',
        email: 'input[name="email"]',
        password: 'input[name="password"]',
        confirmPassword: 'input[name="passwordConfirm"]',

        // second step
        firstName: '[name="firstName"]',
        surname: '[name="lastName"]',
        streetAndHouseNumber: '[name="street"]',
        city: '[name="city"]',
        postcode: '[name="zipCode"]',
    },
    buttons: {
        // first step
        submitButton: '[class="form"] [type="submit"]',

        // second step
        completeRegistrationButton: '[type="submit"]'
    },
    texts: {
        title: 'Registration'
    },
    select: {
        // first step
        country: '[name="country"]',
        birthdayDay: '[name="birthday.day"]',
        birthdayMonth: '[name="birthday.month"]',
        birthdayYear: '[name="birthday.year"]',

        // second step
        salutation: '[name="salutation"]'
    },
    checkboxes: {
        terms: '[name="terms"]'
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
