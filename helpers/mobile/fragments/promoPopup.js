
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // locators
  modalPopup: '[id="welcome-promo"] [class="modal"]',
  closeButton: '[id="welcome-promo"] [class="close-modal"]',
  title: '[id="welcome-promo"] [class="title"]',
  description: '[id="welcome-promo"] [class="description"]',
  topImage: '[id="welcome-promo"] [class="topImage"]',
  signUpButton: '[id="welcome-promo"] [class="cta"]',
  tncButton: '[id="welcome-promo"] [class="tnc"]',

  // methods
  checkLayout() {
    I.waitForVisible(this.modalPopup);
    I.seeElement(this.closeButton);
    I.seeElement(this.title);
    I.seeElement(this.description);
    I.seeElement(this.topImage);
    I.seeElement(this.signUpButton);
    I.seeElement(this.tncButton);
  },
  close() {
    I.click(this.closeButton);
    I.dontSeeElement(this.modalPopup, 5);
  },
  goToRegistration() {
    I.click(this.signUpButton);
  },
  goToTermsConditions() {
    I.click(this.tncButton);
  }
};
