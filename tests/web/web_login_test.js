Feature('Tipico web login test');

Scenario('Tipico web login test', (I) => {
    I.amOnPage('http://tipico.de');
    I.click('[class*="login-button nav-button"]');
    I.fillField('[id="login"]', 'product_live_de');
    I.fillField('[id="password"]', 'qwop1010');
    I.click('[id="loginButton"]');
    I.waitForElement('[class="user-info"]', 10);
    I.click('[href*="/personal/user/"]');

    I.see('Logged in as: Asd Asd');
});