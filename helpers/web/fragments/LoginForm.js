
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // locators
  fields: {
    username: '[id="login"]',
    password: '[id="password"]'
  },
  buttons: {
    loginButton: '[id="loginButton"]'
  },
  forms: {
     loginForm: 'form[id="loginForm"]'
  },

  // methods
  fillLoginForm() {
    I.waitForVisible(this.forms.loginForm, 5);
    I.fillField(this.fields.username, 'product_live_de');
    I.fillField(this.fields.password, 'qwop1010');
    I.click(this.buttons.loginButton);
    I.waitForText('Personal Details', 10);
  }
};
