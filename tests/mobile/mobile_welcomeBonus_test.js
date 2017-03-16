Feature('Promo popup (mobile rebrush)', {retries: 1});

Before((I, homePage) => {
});

xScenario('Promo Layout on all domains', (I, promoPopupFragment, homePage) => {
    let domains = ["https://mobile-hotfix.tipdev.com", "https://mobile-hotfix-de.tipdev.com", "https://mobile-hotfix-de-sh.tipdev.com", "https://mobile-hotfix-at.tipdev.com"];
    domains.forEach(function (element) {
        I.amOnPage(element);
        homePage.hideSplashScreen();
        promoPopupFragment.checkLayout();
    });

    domains.forEach(function (element) {
        I.amOnPage(element);
        homePage.hideSplashScreen();
        promoPopupFragment.checkPromoVisible(false);
    });
});

Scenario('Close popup and see the home page', (I, promoPopupFragment, homePage) => {
    I.amOnPage('https://mobile-hotfix.tipdev.com');
    homePage.hideSplashScreen();
    promoPopupFragment.close();
    let status = I.checkIfElementPresentAndDisplayed('[class="mobileCasinoBtnText"]');
    if (status) {
        I.see('Tipico Casino App');
    }
});

xScenario('Sign up button -> registration section', (I, promoPopupFragment, registrationPage, homePage) => {
    I.amOnPage('https://mobile-hotfix.tipdev.com');
    homePage.hideSplashScreen();
    promoPopupFragment.goToRegistration();
    registrationPage.checkPage();
});

xScenario('Terms and Conditions button -> T&C section', (I, homePage, promoPopupFragment, termsConditionsPage) => {
    I.amOnPage('https://mobile-hotfix.tipdev.com');
    homePage.hideSplashScreen();
    promoPopupFragment.goToTermsConditions();
    termsConditionsPage.checkPage();
});

xScenario('Welcome promo is not displayed on navigation through the app / user logged out', (I, homePage, loginPage, footerPage, promoPopupFragment) => {
    I.amOnPage('https://mobile-hotfix.tipdev.com');
    homePage.hideSplashScreen();
    promoPopupFragment.checkLayout();
    promoPopupFragment.close();
    homePage.hideSplashScreen();
    homePage.goToLogin();
    loginPage.goToRegistration();
    footerPage.goToHome();
    promoPopupFragment.checkPromoVisible(false);
});

xScenario('Welcome promo is not displayed on domain redirection', (I, homePage, loginPage, switchPage, promoPopupFragment) => {
    I.amOnPage('https://mobile-hotfix.tipdev.com');
    homePage.hideSplashScreen();
    promoPopupFragment.checkLayout();
    promoPopupFragment.close();
    homePage.hideSplashScreen();
    homePage.goToLogin();
    loginPage.sendLoginForm('mobile_de_01', 'B00Xware');
    switchPage.goToGermanOffer();
    promoPopupFragment.checkPromoVisible(false);
});