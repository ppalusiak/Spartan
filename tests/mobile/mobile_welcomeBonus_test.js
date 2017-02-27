
Feature('Promo popup (mobile rebrush)', {retries: 1});

Before((I, homePage) => {
  I.amOnPage('https://mobile-spartans.tipdev.com');
  homePage.hideSplashScreen();
});

Scenario('Promo Layout on all domains', (I, promoPopupFragment, homePage) => {
  let domains = ["https://mobile-spartans.tipdev.com", "https://mobile-spartans-de.tipdev.com", "https://mobile-spartans-de-sh.tipdev.com", "https://mobile-spartans-at.tipdev.com"];
  domains.forEach(function(element) {
    I.amOnPage(element);
    homePage.hideSplashScreen();
    homePage.dismissNewLookDialog();
    promoPopupFragment.checkLayout();
  });
});

Scenario('Close popup and see the home page', (I, promoPopupFragment, homePage) => {
  homePage.hideSplashScreen();
  promoPopupFragment.close();
  I.see('Login');
});

Scenario('Sign up button -> registration section', (I, promoPopupFragment, registrationPage, homePage) => {
  homePage.hideSplashScreen();
  promoPopupFragment.goToRegistration();
  registrationPage.checkPage();
});

Scenario('Terms and Conditions button -> T&C section', (I, homePage, promoPopupFragment, termsConditionsPage) => {
  homePage.hideSplashScreen();
  promoPopupFragment.goToTermsConditions();
  termsConditionsPage.checkPage();
});

