
'use strict';

let I, loginFormPopupFragment;

module.exports = {

  _init() {
    I = actor();
    loginFormPopupFragment = require('../fragments/LoginForm.js');
      loginFormPopupFragment._init();
  },
  // locators
  buttons: {
    login: '[class*="login-button nav-button"]',
    personalDetails: '[href*="/personal/user/"]'
  },
  texts: {
    loggedUser: 'Asd Asd'
  },

  login(){
    I.click(this.buttons.login);
    loginFormPopupFragment.fillLoginForm();
  },
  goToPersonalDetails(){
    I.click(this.buttons.personalDetails);
  },
  verifyUser(){
    I.waitForText(this.texts.loggedUser, 5);
  }
};
