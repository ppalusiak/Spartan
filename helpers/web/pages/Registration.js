
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // locators
  fields: {
    username: 'input[name="username"]',
    email: '',
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
  }
};
