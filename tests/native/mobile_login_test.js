
Feature('Login test (mobile rebrush)', {retries: 1});

Scenario('Tipico mobile login test', (I, homePage, loginPage) => {
    //homePage.hideSplashScreen();
    //I.checkIfElementPresentAndDisplayed('[class="mobileCasinoBtnText"]');
    //I.checkIfElementPresentAndDisplayed('[name="username"]');
    I.waitForVisible('//div[@id="page1"]//*[@class="barbottomleft arrow "]');
    I.click('//div[@id="page1"]//*[@class="barbottomleft arrow "]');

    //I.waitForVisible('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.support.v4.widget.DrawerLayout[1]/android.widget.FrameLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[12]');
    //I.click('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.support.v4.widget.DrawerLayout[1]/android.widget.FrameLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[12]');
    //I.waitForVisible('[class="barbottomleft arrow "][onclick="go(\'login\')"]');
    //homePage.goToLogin();
    //I.checkIfElementPresentAndDisplayed('[class="mobileCasinoBtnText"]');
    //loginPage.sendLoginForm();
    //homePage.goToMyAccount();
    //homePage.verifyUser();
    //I.click('//android.widget.LinearLayout[1]/android.widget.FrameLayout[2]/android.widget.LinearLayout[1]/android.widget.Button[1]');
});

