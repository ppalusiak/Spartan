'use strict';

let I, promoPopupFragment,myAccountPage;

module.exports = {

    _init() {
        I = actor();

        promoPopupFragment = require('../fragments/promoPopup.js');
        promoPopupFragment._init();

        myAccountPage = require('../pages/MyAccount.js');
        myAccountPage._init();
    },

    // locators
    buttons: {
        login: '[class="barbottomleft arrow "][onclick="go(\'login\')"]',
        myAccount: '[class="barmiddleright arrow "][onclick="go(\'account\')"]',
        sportBets: '[class*="barmiddleleft arrow "][onclick="go(\'sports/all\')"]'
    },
    texts: {
        loggedUser: 'Asd Asd (product_live_de'
    },
    screen: {
        splashScreen: '[id="loading"]',
        root: '[class="dialog-container"] [class="window fadein"]',
        modalOverlay: '[class="modal-overlay "]'
    },

    hideSplashScreen() {
        I.waitForInvisible(this.screen.splashScreen);
        I.waitForInvisible(this.screen.root);
        I.waitForInvisible(this.screen.modalOverlay);
    },
    goToLogin(){
        I.click(this.buttons.login);
        I.waitForVisible('[name="login"]');
    },
    goToMyAccount(){
        I.waitForVisible(this.buttons.myAccount);
        I.click(this.buttons.myAccount);
        I.waitForVisible(myAccountPage.buttons.accountStatementButton);
    },
    verifyUser(){
        I.waitForText(this.texts.loggedUser);
    }
};
