
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // locators
  fields: {
    username: 'input[name="username"]',
    password: 'input[name="password"]'
  },
  buttons: {
    loginButton: '.submit'
  },

  // methods
  sendLoginForm() {
    I.waitForVisible(this.fields.username, 5);
    I.fillField(this.fields.username, 'product_live_de');
    I.fillField(this.fields.password, 'qwop1010');
    I.click(this.buttons.loginButton);
    I.waitForText('My account', 10);
  }
};
