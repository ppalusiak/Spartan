exports.config = {
    tests: './tests/mobile/*login_test.js',
    timeout: 30000,
    output: './output',

    params: {
        env: 'prod'
    },

    helpers: {
        WebDriverIO: {
            url: 'https://mobile-hotfix.tipdev.com',
            restart: true,
            browser: 'chrome',
            windowSize: '415x730',
            waitForTimeout: 30000,
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: [
                        'user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4'
                    ]
                },
                mobileEmulationEnabled: true
            },
            coloredLogs: true
        },
        MyHelper: {
            require: './helpers/custom_methods/MyHelper.js',
            env: 'prod',
            defaultUrl: 'https://mobile-hotfix.tipdev.com'
        }
    },
    include: {
        I: './helpers/steps_file.js',
        loginPage: './helpers/mobile/pages/Login.js',
        homePage: './helpers/mobile/pages/Home.js',
        registrationPage: './helpers/mobile/pages/Registration.js',
        termsConditionsPage: './helpers/mobile/pages/TermsConditions.js',
        myAccountPage: './helpers/mobile/pages/MyAccount.js',
        informationPage: './helpers/mobile/pages/Information.js',
        footerPage: './helpers/mobile/pages/Footer.js',
        betsPage: './helpers/mobile/pages/Bets.js',
        switchPage: './helpers/mobile/pages/SwitchDomain.js',
        firstDepositPage: './helpers/mobile/pages/FirstDeposit.js',
        promoPopupFragment: './helpers/mobile/fragments/promoPopup.js',
        cancelRegistrationFragment: './helpers/mobile/fragments/cancelRegistrationPopup.js'
    },
    bootstrap: false,
    mocha: {
        reporterOptions: {
            reportDir: './output',
            enableCharts: true,
            reportTitle: 'Spartan Reporter'
        }
    },
    name: 'Spartan',



};