
Feature('Incomplete registration (mobile rebrush)');

Scenario('Incomplete registration test', (I, homePage, registrationPage) => {
    I.amOnPage('https://m.tipico.de');
    homePage.hideSplashScreen();
    homePage.goToLogin();

    let randomNumber = registrationPage.randomIntFromInterval(100, 9999);
    let firstName = registrationPage.generateName();
    let surName = registrationPage.generateName();

    I.click('[class="form"] [onclick*="login/register"]');
    I.waitForVisible('[name="country"]');
    I.selectOption('[name="country"]', 'DE');
    I.selectOption('[name="birthday.year"]', '1989');
    I.fillField('[name="login"]', 'test' + randomNumber);
    I.fillField('[name="email"]', 'test' + randomNumber +'@mail.com');
    I.fillField('[name="password"]', 'B00Xware');
    I.fillField('[name="passwordConfirm"]', 'B00Xware');
    I.checkOption('[name="terms"]');
    I.click('[class="form"] [type="submit"]');
    I.waitForVisible('[name="firstName"]');
    I.fillField('[name="firstName"]', 'Michal');
    I.click('[id="page1"] [class*="icon-home"]');
    I.waitForVisible('[class="window fadein"]');
    I.click('//button[@class="w50 dialog-button"]/div[.="Yes"]');
    homePage.hideSplashScreen();
    homePage.goToLogin();
    I.fillField('[name="username"]', 'test' + randomNumber);
    I.fillField('[name="password"]', 'B00Xware');
    I.click('input[class="submit"]');
    I.waitForVisible('[name="firstName"]');
    I.fillField('[name="firstName"]', firstName);
    I.fillField('[name="lastName"]', surName);
    I.fillField('[name="street"]', 'street' + randomNumber);
    I.fillField('[name="city"]', 'Malta');
    I.fillField('[name="zipCode"]', '12345');
    I.click('[id="page1"] button[type="submit"]');
    I.waitForVisible('select[onchange*="paymentMethod"]');
    I.see('As a registered user you can now claim your 100% Welcome Bonus on your first deposit.');
});

