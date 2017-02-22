
Feature('Login test (mobile rebrush)', {retries: 1});

Scenario('Tipico mobile login test', (I, homePage, loginPage) => {
  I.amOnPage('https://m.tipico.de');
  homePage.dismissNewLookDialog();
  homePage.goToLogin();
  loginPage.sendLoginForm();
  homePage.goToMyAccount();
  homePage.verifyUser();
});

