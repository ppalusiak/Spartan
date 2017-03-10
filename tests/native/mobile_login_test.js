
Feature('Login test (mobile rebrush)', {retries: 1});

Scenario('Tipico mobile login test', (I, homePage, loginPage) => {
    I.waitForVisible('[class="barbottomleft arrow "][onclick="go(\'login\')"]');
    homePage.goToLogin();
    loginPage.sendLoginForm('product_live_de', 'qwop1010');
    homePage.goToMyAccount();
    homePage.verifyUser();
    //I.click('//android.widget.LinearLayout[1]/android.widget.FrameLayout[2]/android.widget.LinearLayout[1]/android.widget.Button[1]');
});

