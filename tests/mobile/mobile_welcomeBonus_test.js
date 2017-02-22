
Feature('Promo popup (mobile rebrush)', {retries: 1});

Before((I, homePage) => {
  I.amOnPage('https://mobile-spartans.tipdev.com');
  homePage.hideSplashScreen();
});

Scenario('Promo Layout', (I, promoPopupFragment, homePage) => {
  let domains = ["https://mobile-spartans.tipdev.com", "https://mobile-spartans-de.tipdev.com", "https://mobile-spartans-de-sh.tipdev.com", "https://mobile-spartans-at.tipdev.com"];
  domains.forEach(function(element) {
    I.amOnPage(element);
    homePage.hideSplashScreen();
    homePage.dismissNewLookDialog();
    promoPopupFragment.checkLayout();
  });
});

xScenario('Close popup and see the home page', (I, promoPopupFragment, homePage) => {
  homePage.dismissNewLookDialog();
  promoPopupFragment.close();
  I.see('Login');
});

xScenario('Sign up button -> registration section', (I, promoPopupFragment, registrationPage, homePage) => {
  homePage.dismissNewLookDialog();
  promoPopupFragment.goToRegistration();
  registrationPage.checkPage();
});

xScenario('Terms and Conditions button -> T&C section', (I, homePage, promoPopupFragment, termsConditionsPage) => {
  homePage.dismissNewLookDialog();
  promoPopupFragment.goToTermsConditions();
  termsConditionsPage.checkPage();
});

