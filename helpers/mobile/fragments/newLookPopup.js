
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // locators
  root: '[class="dialog-container"] [class="window fadein"]',
  okButton: '[class="w100 dialog-button"]',
  loader: '[id="loading"]',
  titan: 'id="titan"',
  titanCloseButton: '[class="crossButton"]',

  // methods
  confirm() {
    if (I.seeElement(this.okButton)) {
      I.click(this.okButton);
      I.waitForInvisible(this.root, 10);
      I.waitForInvisible(this.loader, 10);
    } else if (I.seeElement(this.titan)){
      I.click(this.titanCloseButton);
      I.waitForInvisible(this.root, 10);
      I.waitForInvisible(this.loader, 10);
    } else {
      I.waitForInvisible(this.root, 10);
      I.waitForInvisible(this.loader, 10);
    }

    //I.waitForVisible(this.okButton);

  }
};
