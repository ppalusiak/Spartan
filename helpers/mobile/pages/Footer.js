'use strict';

let I, homePage, betsPage, loginPage, informationPage, myAccountPage;

module.exports = {

    _init() {
        I = actor();

        homePage = require('../pages/Home.js');
        homePage._init();

        betsPage = require('../pages/Bets.js');
        betsPage._init();

        loginPage = require('../pages/Login.js');
        loginPage._init();

        informationPage = require('../pages/Information.js');
        informationPage._init();

        myAccountPage = require('../pages/MyAccount.js');
        myAccountPage._init();
    },

    // locators
    buttons: {
        homeButton: '[class="footer-nav"] [onclick*="home"]',
        betsButton: '[class="footer-nav"] [onclick*="sports/all"]',
        myBetsButton: '[class="footer-nav"] [onclick*="ticket/list"]',
        myAccountButton: '[class="footer-nav"] [onclick*="account"]',
        betSlipButton: '[class="footer-nav"] [onclick*="editor"]',
        loginButton: '[class="footer-nav"] [onclick*="login"]',
        informationButton: '[class="footer-nav"] [onclick*="information"]'
    },

    // methods
    goToHome() {
        I.click(this.buttons.homeButton);
        I.waitForVisible(homePage.buttons.sportBets);
    },
    goToBets() {
        I.click(this.buttons.betsButton);
        I.waitForVisible(betsPage.buttons.footballButton);
    },
    goToLogin() {
        I.click(this.buttons.loginButton);
        I.waitForVisible(loginPage.fields.username);
    },
    goToMyBets() {
        I.click(this.buttons.myBetsButton);
    },
    goToMyAccount() {
        I.click(this.buttons.myAccountButton);
        I.waitForVisible(myAccountPage.buttons.accountStatementButton);
    },
    goToInformation() {
        I.click(this.buttons.informationButton);
        I.waitForVisible(informationPage.buttons.termsButton);
    },
    goToBetSlip() {
        I.click(this.buttons.betSlipButton);
    }
};
