'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // locators
    texts: {
        title: 'Sportsbetting Bonus',
    },
    sections: {
        termsCondSection: '[id*="bonus_terms"]',
    },

    // methods
    checkPage() {
        I.waitForElement(this.sections.termsCondSection);
        I.see(this.texts.title);
    }
};
