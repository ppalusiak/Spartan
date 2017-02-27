
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // locators
  texts: {
    title: 'Terms & Conditions',
  },

  // methods
  checkPage() {
    I.waitForText(this.texts.title);
  }
};
