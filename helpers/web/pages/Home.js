'use strict';

let I, loginFormPopupFragment;

module.exports = {

    _init() {
        I = actor();
        loginFormPopupFragment = require('../fragments/LoginForm.js');
        loginFormPopupFragment._init();
    },
    // locators
    buttons: {
        login: '[class*="login-button nav-button"]',
        personalDetails: '[href*="/personal/user/"]',
        languageSelectButton: '[id="selected_lang"]'
    },
    texts: {
        loggedUser: 'Asd Asd'
    },

    login(){
        I.click(this.buttons.login);
        loginFormPopupFragment.fillLoginForm();
    },
    goToPersonalDetails(){
        I.click(this.buttons.personalDetails);
    },
    verifyUser(){
        I.waitForText(this.texts.loggedUser);
    },
    changeLanguage(environment, language) {
        I.waitForVisible(this.buttons.languageSelectButton);
        I.click(this.buttons.languageSelectButton);
        switch (environment) {
            case "https://web-staging.tipdev.com":

                // language selection
                switch (language) {
                    case "DE":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="de_INT"]');
                        break;
                    case "EN":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="en_INT"]');
                        break;
                    case "IT":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="it_INT"]');
                        break;
                    case "FR":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="fr_AT"]');
                        break;
                    case "TR":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="tr_AT"]');
                        break;
                    case "HR":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="hr_AT"]');
                        break;
                    case "DK":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="da_AT"]');
                        break;
                }

                break;
            case "https://web-staging-de.tipdev.com":

                // language selection
                switch (language) {
                    case "DE":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="de_DE"]');
                        break;
                    case "EN":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="en_DE"]');
                        break;
                    case "TR":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="tr_DE"]');
                        break;
                }
                break;
            case "https://web-staging-de-sh.tipdev.com":

                // language selection
                switch (language) {
                    case "DE":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="de_DE"]');
                        break;
                    case "EN":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="en_DE"]');
                        break;
                    case "TR":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="tr_DE"]');
                        break;
                }
                break;
            case "https://web-staging-at.tipdev.com":

                // language selection
                switch (language) {
                    case "DE":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="de_AT"]');
                        break;
                    case "EN":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="en_AT"]');
                        break;
                    case "TR":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="tr_AT"]');
                        break;
                    case "HR":
                        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="hr_AT"]');
                        break;
                }
                break;
        }
    }
};

