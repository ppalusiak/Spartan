
Feature('Login test (mobile rebrush)', {retries: 1});

Scenario('Tipico mobile login test', (I, homePage, loginPage) => {
  I.amOnPage('https://m.tipico.de');
  homePage.hideSplashScreen();
  I.checkIfElementPresentAndDisplayed('[class="mobileCasinoBtnText"]');
  I.checkIfElementPresentAndDisplayed('[name="username"]');
  homePage.goToLogin();
  I.checkIfElementPresentAndDisplayed('[class="mobileCasinoBtnText"]');
  loginPage.sendLoginForm();
  homePage.goToMyAccount();
  homePage.verifyUser();
});

