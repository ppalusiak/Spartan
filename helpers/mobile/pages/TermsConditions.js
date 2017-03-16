
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // locators
  texts: {
    title: 'Bonus conditions',
  },

  // methods
  checkPage() {
    I.waitForText(this.texts.title);
  }
};
