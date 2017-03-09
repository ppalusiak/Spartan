Feature('Promo popup (mobile rebrush)', {retries: 1});

Before((I, homePage) => {
});

Scenario('Promo Layout on all domains', (I, promoPopupFragment, homePage) => {
    let domains = ["https://mobile-staging.tipdev.com", "https://mobile-staging-de.tipdev.com", "https://mobile-staging-de-sh.tipdev.com", "https://mobile-staging-at.tipdev.com"];
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
    I.amOnPage('https://mobile-staging.tipdev.com');
    homePage.hideSplashScreen();
    promoPopupFragment.close();
    I.see('Login');
});

Scenario('Sign up button -> registration section', (I, promoPopupFragment, registrationPage, homePage) => {
    I.amOnPage('https://mobile-staging.tipdev.com');
    homePage.hideSplashScreen();
    promoPopupFragment.goToRegistration();
    registrationPage.checkPage();
});

Scenario('Terms and Conditions button -> T&C section', (I, homePage, promoPopupFragment, termsConditionsPage) => {
    I.amOnPage('https://mobile-staging.tipdev.com');
    homePage.hideSplashScreen();
    promoPopupFragment.goToTermsConditions();
    termsConditionsPage.checkPage();
});

Scenario('Welcome promo is not displayed on navigation through the app / user logged out', (I, homePage, loginPage, promoPopupFragment) => {
    I.amOnPage('https://mobile-staging.tipdev.com');
    homePage.hideSplashScreen();
    promoPopupFragment.checkLayout();
    promoPopupFragment.close();
    homePage.hideSplashScreen();
    homePage.goToLogin();
    I.click('[onclick*="login/register"]');
    I.waitForVisible('[name="country"]');
    I.click('[id="page1"] [onclick*="home"]');
    homePage.hideSplashScreen();
    I.waitForVisible('[class="barbottomleft arrow "][onclick="go(\'login\')"]');
    promoPopupFragment.checkPromoVisible(false);
});

Scenario('Welcome promo is not displayed on domain redirection', (I, homePage, loginPage, promoPopupFragment) => {
    I.amOnPage('https://mobile-staging.tipdev.com');
    homePage.hideSplashScreen();
    promoPopupFragment.checkLayout();
    promoPopupFragment.close();
    homePage.hideSplashScreen();
    homePage.goToLogin();
    loginPage.sendLoginForm('mobile_de_01', 'B00Xware');
    I.waitForVisible('[onclick="international(false)"]');
    I.click('[onclick="international(false)"]');
    I.waitForVisible('[id="page1"] [onclick="go(\'account\')"]');
    promoPopupFragment.checkPromoVisible(false);
});