
'use strict';

let I, newLookPopupFragment, promoPopupFragment;

module.exports = {

  _init() {
    I = actor();
    newLookPopupFragment = require('../fragments/newLookPopup.js');
    newLookPopupFragment._init();

    promoPopupFragment = require('../fragments/promoPopup.js');
    promoPopupFragment._init();
  },

  // locators
  buttons: {
    login: '[class="barbottomleft arrow "][onclick="go(\'login\')"]',
    myAccount: '[class="barmiddleright arrow "][onclick="go(\'account\')"]'
  },
  texts: {
    loggedUser: 'Asd Asd (product_live_de'
  },
  screen: {
    splashScreen: '[id="loading"]'
  },

  hideSplashScreen() {
    I.waitForInvisible(this.screen.splashScreen, 30);
  },
  dismissNewLookDialog() {
    newLookPopupFragment.confirm();
  },
  goToLogin(){
    I.click(this.buttons.login);
  },
  goToMyAccount(){
    I.click(this.buttons.myAccount);
  },
  verifyUser(){
    I.waitForText(this.texts.loggedUser, 5);
  }
};
