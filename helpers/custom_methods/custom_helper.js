
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
        let I = actor();
        I.say('Element to check is: ' + elementToCheck);

        return client.isVisible(elementToCheck).then(console.log);
    };
}
module.exports = MyHelper;