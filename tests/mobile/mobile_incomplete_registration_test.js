
Feature('Incomplete registration (mobile rebrush)');

Scenario('Incomplete registration test', (I, homePage, loginPage, registrationPage, cancelRegistrationFragment, footerPage, firstDepositPage) => {
    I.amOnPage('https://m.tipico.de');
    homePage.hideSplashScreen();
    homePage.goToLogin();

    let randomNumber = registrationPage.randomIntFromInterval(100, 9999);
    let firstName = registrationPage.generateName();
    let surName = registrationPage.generateName();

    loginPage.goToRegistration();
    I.selectOption(registrationPage.select.country, 'DE');
    I.selectOption(registrationPage.select.birthdayYear, '1989');
    I.fillField(registrationPage.fields.username, 'test' + randomNumber);
    I.fillField(registrationPage.fields.email, 'test' + randomNumber +'@mail.com');
    I.fillField(registrationPage.fields.password, 'B00Xware');
    I.fillField(registrationPage.fields.confirmPassword, 'B00Xware');
    I.checkOption(registrationPage.checkboxes.terms);
    I.click(registrationPage.buttons.submitButton);
    I.waitForVisible(registrationPage.fields.firstName);
    I.fillField(registrationPage.fields.firstName, 'Michal');
    I.click(footerPage.buttons.homeButton);
    cancelRegistrationFragment.cancelRegistrationAction(true);
    homePage.goToLogin();
    loginPage.sendLoginForm('test' + randomNumber, 'B00Xware');
    I.waitForVisible(registrationPage.fields.firstName);
    I.fillField(registrationPage.fields.firstName, firstName);
    I.fillField(registrationPage.fields.surname, surName);
    I.fillField(registrationPage.fields.streetAndHouseNumber, 'street' + randomNumber);
    I.fillField(registrationPage.fields.city, 'Malta');
    I.fillField(registrationPage.fields.postcode, '12345');
    I.click(registrationPage.buttons.completeRegistrationButton);
    I.waitForVisible(firstDepositPage.select.paymentMethod);
    I.see('As a registered user you can now claim your 100% Welcome Bonus on your first deposit.');
});

