
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // locators
  fields: {
    username: 'input[id="registerForm:login"]',
    email: 'input[id="registerForm:email"]',
    password: 'input[id="registerForm:password"]'
  },
  buttons: {
    submitButton: '[id="registerForm:registerButton"]'
  },
  texts: {
    title: 'Account Details'
  },

  // methods
  checkPage() {
    I.waitForText(this.texts.title);
    I.seeElement(this.fields.username);
    I.seeElement(this.fields.email);
    I.seeElement(this.fields.password);
    I.seeElement(this.buttons.submitButton);
  }
};
