'use strict';

let I, termsConditionsPage;

module.exports = {

    _init() {
        I = actor();
        termsConditionsPage = require('../pages/TermsConditions.js');
        termsConditionsPage._init();
    },

    // locators
    modalPopup: '[id="tipico-welcome-promo"] [class="modal"]',
    modalOverlay: '[class="modal-overlay "]',
    closeButton: '[id="tipico-welcome-promo"] [class*="close-modal"]',
    title: '[id="tipico-welcome-promo"] [class="title"]',
    description: '[id="tipico-welcome-promo"] [class="description"]',
    topImage: '[id="tipico-welcome-promo"] [class="topImage"]',
    signUpButton: '[id="tipico-welcome-promo"] [class*="cta"]',
    tncButton: '[id="tipico-welcome-promo"] [class*="tnc noselect"]',

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
        I.waitForInvisible(this.modalOverlay);
        I.dontSeeElement(this.modalPopup);
    },
    goToRegistration() {
        I.click(this.signUpButton);
    },
    checkTermsConditions() {
        I.click(this.tncButton);
        termsConditionsPage.checkPage();
        // todo: add check section on welcome promo popup (Phase 2)
    }
};
