'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    // locators
    buttons: {
        closeButton: '[id="tipico-welcome-promo"] [class="close-modal"]',
        signUpButton: '[id="tipico-welcome-promo"] [class="cta"]',
        tncButton: '[id="tipico-welcome-promo"] [class="tnc"]'
    },
    labels: {
        title: '[id="tipico-welcome-promo"] [class="title"]',
        description: '[id="tipico-welcome-promo"] [class="description"]'
    },
    modals: {
        modalPopup: '[id="tipico-welcome-promo"] [class="modal"]'
    },
    images: {
        topImage: '[id="tipico-welcome-promo"] [class="topImage"]'
    },

    // methods
    checkLayout() {
        I.waitForVisible(this.modals.modalPopup);
        I.seeElement(this.buttons.closeButton);
        I.seeElement(this.labels.title);
        I.seeElement(this.labels.description);
        I.seeElement(this.images.topImage);
        I.seeElement(this.buttons.signUpButton);
        I.seeElement(this.buttons.tncButton);
    },
    checkPromoVisible(visible) {
        if (visible) {
            I.seeElement(this.modals.modalPopup);
        } else {
            I.dontSeeElement(this.modals.modalPopup);
        }
    },
    close() {
        I.click(this.buttons.closeButton);
        I.dontSeeElement(this.modals.modalPopup);
    },
    goToRegistration() {
        I.click(this.buttons.signUpButton);
    },
    goToTermsConditions() {
        I.click(this.buttons.tncButton);
    }
};
