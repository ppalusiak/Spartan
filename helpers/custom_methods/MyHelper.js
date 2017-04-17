'use strict';
let Helper = codecept_helper;
class MyHelper extends Helper {
    // before/after hooks

    _before() {
        // remove if not used
    }

    _after() {
        // remove if not used
    }

    checkIfElementPresentAndDisplayed(elementToCheck) {
        let client = this.helpers['WebDriverIO'].browser;
        return client.isVisible(elementToCheck).then(function(value) {
            return value;
        });
    };

    clearLocalStorage() {
        let client = this.helpers['WebDriverIO'].browser;
        return client.localStorage('DELETE');
    };

    deleteCookie() {
        let client = this.helpers['WebDriverIO'].browser;
        return client.deleteCookie();
    };

    refreshPage() {
        let client = this.helpers['WebDriverIO'].browser;
        return client.refresh();
    };

    clickOnFirstVisible(visibleElement) {
        console.log(this.checkIfElementPresentAndDisplayed('[id="page1"]'));
        let I = actor();
        let client = this.helpers['WebDriverIO'].browser;
        client.elements(visibleElement, function (res) {
                res.value.forEach(function (elem) {
                    if (this.checkIfElementPresentAndDisplayed(elem)) {
                        I.click(elem);
                    }
                })
            }
        );

        /*list.forEach(function (element) {
         console.log(element);
         });*/

        /*list.forEach(function (element) {
         if (this.checkIfElementPresentAndDisplayed(element)) {
         I.click(element);
         }
         });*/
    };

    doSomethingOnMobile() {
        let client = this.helpers['WebDriverIO'].browser.click('ADD');
        let I = actor();
        I.click('ADD');
    };
}
module.exports = MyHelper;