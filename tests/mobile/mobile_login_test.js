Feature('Login test (mobile rebrush)', {retries: 1});

Scenario('Tipico mobile login test', (I, homePage, loginPage, promoPopupFragment) => {
    I.amOnPage('https://m.tipico.de');
    homePage.hideSplashScreen();
    promoPopupFragment.close();
    homePage.hideSplashScreen();
    I.checkIfElementPresentAndDisplayed('[class="mobileCasinoBtnText"]');
    homePage.goToLogin();
    loginPage.sendLoginForm('product_live_de', 'qwop1010');
    homePage.goToMyAccount();
    homePage.verifyUser();
});

