Feature('Promo popup (web page)', {retries: 1});

Before((I, homePage) => {

});

Scenario('Promo Layout', (I, promoPopupFragment) => {
    let domains = ["https://web-spartans.tipdev.com", "https://web-spartans-de.tipdev.com", "https://web-spartans-de-sh.tipdev.com", "https://web-spartans-at.tipdev.com"];
    domains.forEach(function (element) {
        I.amOnPage(element);
        promoPopupFragment.checkLayout();
    });
});

xScenario('Promo for German language', (I, homePage, promoPopupFragment) => {
    let domains = ["https://web-spartans.tipdev.com", "https://web-spartans-de.tipdev.com", "https://web-spartans-de-sh.tipdev.com", "https://web-spartans-at.tipdev.com"];
    domains.forEach(function (element) {
        I.amOnPage(element);
        promoPopupFragment.checkLayout();
        promoPopupFragment.close();
        I.waitForVisible('[id="selected_lang"]');
        I.click('[id="selected_lang"]');
        I.click('[id="lang_layer"] ul:not([class="hide"]) [onclick*="de"]');
        I.clearLocalStorage();
        I.refreshPage();
        promoPopupFragment.checkLayout();
    });
});

Scenario('Close popup and see the home page', (I, promoPopupFragment) => {
    I.amOnPage('https://web-spartans.tipdev.com');
    promoPopupFragment.close();
    I.see('Log in');
});

Scenario('Sign up button -> registration section', (I, promoPopupFragment, registrationPage) => {
    I.amOnPage('https://web-spartans.tipdev.com');
    promoPopupFragment.goToRegistration();
    registrationPage.checkPage();
});

Scenario('Terms and Conditions button -> T&C section', (I, homePage, promoPopupFragment) => {
    I.amOnPage('https://web-spartans.tipdev.com');
    promoPopupFragment.checkTermsConditions();
});
