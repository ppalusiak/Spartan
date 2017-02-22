Feature('login test (web)');

Scenario('Tipico web login test', (I, homePage) => {
    I.amOnPage('http://tipico.de');
    homePage.login();
    homePage.goToPersonalDetails();
    homePage.verifyUser();
});