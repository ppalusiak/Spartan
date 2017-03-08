
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
  sendLoginForm(username, password) {
    I.waitForVisible(this.fields.username);
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.password, password);
    I.click(this.buttons.loginButton);
  }
};
